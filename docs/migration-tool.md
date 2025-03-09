# Migration CLI Manual

This CLI is designed to streamline database migration management in a multi-microservice NestJS project using TypeORM.

## Prerequisites

- Ensure **pnpm** is installed globally.
- Ensure **TypeORM** and **ts-node** are installed as dependencies in the project.
- Ensure you have a `.env` file properly set up for database connections.

## Usage

The general syntax for the migration command:

```sh
pnpm migration -m <microservice> -c <command> [-a <args>]
```

### Parameters:

- `-m, --microservice` → Specifies the target microservice (e.g., `auth`, `escrow`, `user`, etc.).
- `-c, --command` → Specifies the TypeORM migration command to run (e.g., `generate`, `run`, `revert`, `seed`, etc.).
- `-t, --title` (optional) → Title for migration file. Needed while running `generate`.
- `-a, --args` (optional) → Additional arguments passed to TypeORM CLI.

---

## Available Commands

### 1. Generate a Migration

Creates a new migration file based on changes in entity definitions.

```sh
pnpm migration -m organization -c generate -t CreateOrganization
```

- `-m organization` → Runs migration for the `organization` microservice.
- `-c generate` → Generates a migration file.
- `-t "CreateOrganization"` → Specifies the migration file name.

---

### 2. Run Migrations

Applies pending migrations to the database.

```sh
pnpm migration -m escrow -c run
```

- `-m escrow` → Runs migrations for the `escrow` microservice.
- `-c run` → Executes pending migrations.

---

### 3. Revert Last Migration

Rolls back the most recent migration.

```sh
pnpm migration -m user -c revert
```

- `-m user` → Targets the `user` microservice.
- `-c revert` → Rolls back the latest migration.

---

### 4. Show Migration Status

Lists applied and pending migrations.

```sh
pnpm migration -m property -c show
```

- `-m property` → Targets the `property` microservice.
- `-c show` → Displays migration history.

---

### 5. Run Seeder

Executes the seed script for a microservice.

```sh
pnpm migration -m user -c seed
```

- `-m user` → Targets the `user` microservice.
- `-c seed` → Runs the seeder script located at `apps/<microservice>/src/seeder/seeder.ts`.

---

## Notes

- The `-m` flag is mandatory to specify which microservice's migration should be executed.
- The CLI automatically resolves the correct TypeORM `DataSource` file based on the microservice name.
- If no changes are detected when generating a migration, the CLI will **not throw an error** but will log a warning
  instead.
- If `-c seed` is used, the CLI will execute the corresponding `seeder.ts` file for the specified microservice. Seeders
  are used to populate the database with initial data and should be located at
  `apps/<microservice>/src/seeder/seeder.ts`.

## Troubleshooting

### Error: "No changes in database schema were found"

- Ensure that your entities are properly configured and registered in the microservice's `DataSource`.
- Verify that the database is up to date with the latest migrations.

### Error: "Cannot find module 'typeorm'"

- Run `pnpm install` to ensure dependencies are correctly installed.

---

## Future Enhancements

- Automate versioning with Release Please integration.
- Support interactive mode for selecting microservices and commands.
- Enhance error handling and logging.

---

This CLI provides an efficient way to manage database migrations across multiple microservices in a monorepo setup.
