import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity, GraphQLFederationDirective } from '@qushah/common';
import { Role } from './role.entity';
import { Organization } from './external/organization.entity';

/*
 TODO: Add userType - Individual & Business. 
  Make firstName, lastName nullable, add name field.
  Add check in migration file to ensure firstName, lastName is
  not null when user type is individual, and name is not null type is business.
  Write a hook to join firstName, lastName before saving for individuals.
*/
@ObjectType()
@Entity({ name: 'users' })
@GraphQLFederationDirective('@key(fields: "id")')
export class User extends BaseEntity {
  @Field(() => String)
  @Column()
  firstName: string;

  @Field(() => String)
  @Column()
  lastName: string;

  @Field(() => String)
  @Column()
  email: string;

  @Column()
  password: string;

  @Field(() => String)
  @Column()
  phone: string;

  @Field(() => Role)
  @ManyToOne(() => Role)
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @Field(() => String, { nullable: true })
  @Column({ name: 'organization_id', type: 'uuid', nullable: true })
  organizationId?: string;

  @Field(() => [Organization], { nullable: true })
  organization?: Organization;
}
