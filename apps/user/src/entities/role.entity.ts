import { Field, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
} from 'typeorm';
import { Permission } from './permission.entity';

@ObjectType()
@Entity({ name: 'roles' })
export class Role extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  name: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field(() => [Permission])
  @ManyToMany(() => Permission, (permission) => permission.roles, {
    eager: true,
  })
  @JoinTable({
    name: 'role_permissions',
    joinColumn: { name: 'role', referencedColumnName: 'name' },
    inverseJoinColumn: { name: 'permission', referencedColumnName: 'name' },
  })
  permissions: Permission[];
}
