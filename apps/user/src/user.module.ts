import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {
  ClientsModule,
  CommonModule,
  DatabaseModule,
  GraphQLMicroserviceModule,
  MicroServiceClient,
  SCHEMA,
} from '@qushah/common';
import { UserResolver } from './resolvers/user.resolver';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';

@Module({
  imports: [
    CommonModule,
    GraphQLMicroserviceModule,
    DatabaseModule.init(SCHEMA.USER),
    DatabaseModule.loadEntities([User, Role]),
    ClientsModule.register(MicroServiceClient.ORGANIZATION_CLIENT),
  ],
  controllers: [UserController],
  providers: [UserService, UserResolver],
})
export class UserModule {}
