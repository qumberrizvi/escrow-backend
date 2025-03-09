import { Directive, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@extends') // Extending from Organization Microservice
@Directive('@key(fields: "id")') // Federation key
export class Organization {
  @Field(() => String)
  @Directive('@external') // This field is managed by Organization Microservice
  id: string;
}
