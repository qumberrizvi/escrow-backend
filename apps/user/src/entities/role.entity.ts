import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'roles' })
export class Role extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  name: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  description: string;
}
