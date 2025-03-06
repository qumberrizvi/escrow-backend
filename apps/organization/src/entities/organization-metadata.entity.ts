import { Column, Entity, OneToOne } from 'typeorm';
import { Field, Float, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@qushah/common';
import { JoinColumn } from 'typeorm';
import { Organization } from './organization.entity';

@ObjectType()
@Entity({ name: 'organizations_metadata' })
export class OrganizationMetadata extends BaseEntity {
  @OneToOne(() => Organization, (organization) => organization.meta, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'organization_id' })
  organization: Organization;

  @Field(() => String, { nullable: true })
  @Column({ name: 'primary_color', nullable: true })
  primaryColor?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  domain?: string;

  @Field(() => String)
  @Column()
  logo: string;

  @Field(() => Float)
  @Column({
    name: 'rent_fee_percentage',
    default: 5.0,
    precision: 5,
    scale: 2,
    type: 'decimal',
  })
  rentFeePercentage: number;

  @Field(() => Float)
  @Column({
    name: 'deposit_fee_percentage',
    default: 5.0,
    precision: 5,
    scale: 2,
    type: 'decimal',
  })
  depositFeePercentage: number;

  @Field(() => Boolean)
  @Column({ name: 'allow_interest_earning', type: 'boolean', default: false })
  allowInterestEarning: boolean;
}
