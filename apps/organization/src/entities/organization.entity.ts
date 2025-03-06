import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToOne } from 'typeorm';
import { BaseEntity } from '@qushah/common';
import { OrganizationMetadata } from './organization-metadata.entity';

@ObjectType()
@Entity({ name: 'organizations' })
export class Organization extends BaseEntity {
  @Field(() => String)
  @Column({ unique: true })
  name: string;

  @Field(() => String)
  @Column({ unique: true })
  slug: string;

  @Field(() => String)
  @Column({ name: 'primary_contact_name' })
  primaryContactName: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => String)
  @Column()
  phone: string;

  @Field(() => OrganizationMetadata, { nullable: true })
  @OneToOne(() => OrganizationMetadata, (meta) => meta.organization)
  meta?: OrganizationMetadata;
}
