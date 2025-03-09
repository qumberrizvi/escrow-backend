import { Directive, Field, ObjectType } from '@nestjs/graphql';
import { GraphQLFederationDirective } from '@qushah/common';

@ObjectType()
@GraphQLFederationDirective('@extends') // Extending from Organization Microservice
@GraphQLFederationDirective('@key(fields: "id")') // Federation key
export class Organization {
  @Field(() => String)
  @Directive('@external') // This field is managed by Organization Microservice
  id: string;
}
