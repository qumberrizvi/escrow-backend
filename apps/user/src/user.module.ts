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
import { Permission } from './entities/permission.entity';
import { JwtAuthGuardModule } from '@qushah/common';

@Module({
  imports: [
    CommonModule,
    GraphQLMicroserviceModule,
    JwtAuthGuardModule.register(),
    DatabaseModule.init(SCHEMA.USER),
    DatabaseModule.loadEntities([User, Role, Permission]),
    SeederModule.init([SeederService], [Role, Permission]),
  ],
  controllers: [UserController],
  providers: [UserService, UserResolver],
})
export class UserModule {}
