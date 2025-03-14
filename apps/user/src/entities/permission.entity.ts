import { ObjectType } from '@nestjs/graphql';
import { BaseEntity, Entity } from 'typeorm';

@ObjectType()
@Entity()
export class Permission extends BaseEntity {
  name: string;
}
