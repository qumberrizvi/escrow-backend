import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseEntity, GraphQLFederationDirective } from '@qushah/common';
import { Organization } from './external/organization.entity';
import { Role } from './role.entity';

@ObjectType()
@Entity({ name: 'users' })
@Unique(['email', 'organizationId'])
@Unique(['phone', 'organizationId'])
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
  @ManyToOne(() => Role, { eager: true })
  @JoinColumn({ name: 'role' })
  role: Role;

  @Field(() => String, { nullable: true })
  @Column({ name: 'organization_id', type: 'uuid', nullable: true })
  organizationId?: string;

  @Field(() => [Organization], { nullable: true })
  organization?: Organization;
}
