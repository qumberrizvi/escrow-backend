import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'roles' })
export class Role {
  @Field(() => String)
  @PrimaryColumn()
  name: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  description: string;
}
