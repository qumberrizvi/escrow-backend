import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, Entity, ManyToMany, PrimaryColumn } from 'typeorm';
import { Role } from './role.entity';

@ObjectType()
@Entity({ name: 'permissions' })
export class Permission extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  name: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  description?: string;

  @ManyToMany(() => Role, (role) => role.permissions)
  roles: Role[];
}
