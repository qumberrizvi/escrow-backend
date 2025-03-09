import { Directive, Field, ObjectType } from '@nestjs/graphql';
import { Organization } from '../organization.entity';

@ObjectType()
@Directive('@extends') // 🚀 Extending User from User microservice
@Directive('@key(fields: "id")') // Federated entity
export class User {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  @Directive('@external') // organizationId is stored in User service
  organizationId?: string;

  @Field(() => Organization, { nullable: true })
  @Directive('@requires(fields: "organizationId")') // Requires orgId to fetch org
  organization?: Organization;
}
