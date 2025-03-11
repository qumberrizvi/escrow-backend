import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {
  CommonModule,
  DatabaseModule,
  GraphQLMicroserviceModule,
  SCHEMA,
  SeederModule,
} from '@qushah/common';
import { UserResolver } from './resolvers/user.resolver';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';
import { SeederService } from './seeder/seeder.service';

@Module({
  imports: [
    CommonModule,
    GraphQLMicroserviceModule,
    DatabaseModule.init(SCHEMA.USER),
    DatabaseModule.loadEntities([User, Role]),
    SeederModule.init([SeederService], [Role]),
  ],
  controllers: [UserController],
  providers: [UserService, UserResolver],
})
export class UserModule {}
