import { Field, InputType } from '@nestjs/graphql';
import { Roles } from '@qushah/common';

//  TODO: Implement Class Validator
@InputType()
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

  // @Field(() => Roles)  // FIXME: GraphQL unable to resolve type when running seeder
  role: Roles;

  @Field(() => String)
  organizationId: string;
}
