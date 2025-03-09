import { execSync } from 'child_process';
import yargs from 'yargs';
import path from 'path';

// Parse CLI arguments
const argv = yargs(process.argv.slice(2))
  .option('microservice', {
    alias: 'm',
    type: 'string',
    describe: 'The name of the microservice',
    demandOption: true,
  })
  .option('command', {
    alias: 'c',
    type: 'string',
    describe: 'TypeORM CLI command (e.g., generate, run, revert, seed)',
    demandOption: true,
  })
  .option('args', {
    alias: 'a',
    type: 'string',
    describe: 'Additional arguments for the TypeORM CLI command (optional)',
    default: '',
  })
  .option('title', {
    alias: 't',
    type: 'string',
    describe:
      'Title for migration file. Needed while running generate (optional)',
    default: '',
  })
  .help().argv;

// Destructure arguments
const { microservice, command, args, title } = argv as {
  microservice: string;
  command: string;
  args?: string;
  title?: string;
};

// Handle seeding separately
if (command === 'seed') {
  const seederPath = `ts-node -r tsconfig-paths/register ./apps/${microservice}/src/seeder/seeder.ts`;
  console.log(`Executing: ${seederPath}`);
  try {
    execSync(seederPath, { stdio: 'inherit' });
  } catch {
    process.exit(1);
  }
  process.exit(0);
}

// Dynamically set the path to the DataSource for the selected microservice
const dataSourcePath = path.join(
  __dirname,
  `./apps/${microservice}/src/typeorm.data-source.ts`,
);

// Prepare the TypeORM CLI command with the -d (dataSource) argument
const typeormCommand = `ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:${command} ${title ? './apps/' + microservice + '/src/migrations/' + title : ''} -d ${dataSourcePath} ${args || ''}`;

// Execute the TypeORM CLI command
console.log(`Executing: ${typeormCommand}`);
try {
  execSync(typeormCommand, { stdio: 'inherit' });
} catch {
  process.exit(1);
}
