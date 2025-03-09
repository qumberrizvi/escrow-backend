import { Field, ObjectType } from '@nestjs/graphql';
import { Role } from '../entities/role.entity';

//  TODO: Implement Class Validator
@ObjectType()
export class CreateUserInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  passwordConfirmation: string;

  @Field(() => String)
  phone: string;

  @Field(() => Role)
  role: Role;

  @Field(() => String)
  organizationId: string;
}
