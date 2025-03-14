import { Field, InputType } from '@nestjs/graphql';
import { UserRole } from '@qushah/common';
import { IsString } from 'class-validator';

//  TODO: Implement Class Validator
@InputType()
export class CreateUserInput {
  @IsString()
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

  @Field(() => UserRole)
  role: UserRole;

  @Field(() => String)
  organizationId: string;
}
