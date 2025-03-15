import {
  BaseEntity as BaseEntityTypeOrm,
  CreateDateColumn,
  DataSource,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { ColumnOrder, getColumnOrder } from '@qushah/common/decorators';
import { ColumnMetadata } from 'typeorm/metadata/ColumnMetadata';

@ObjectType()
@Entity()
export abstract class BaseEntity extends BaseEntityTypeOrm {
  @ColumnOrder(-1)
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ColumnOrder(9999)
  @Field(() => Date)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ColumnOrder(9999)
  @Field(() => Date, { nullable: true })
  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ColumnOrder(9999)
  @Field(() => Date, { nullable: true })
  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt?: Date;

  static useDataSource(dataSource: DataSource) {
    BaseEntityTypeOrm.useDataSource.call(this, dataSource);
    const meta = dataSource.entityMetadatasMap.get(this);

    const getOrderSafely = (column: ColumnMetadata) => {
      const target = column.target as any;

      // Check if the target and its prototype exist
      if (target && target.prototype) {
        // Retrieve the column order using the custom getColumnOrder function
        return getColumnOrder(target.prototype, column.propertyName);
      }

      // Fallback to a default high order value if target is undefined
      return 9996;
    };

    if (meta != null) {
      // Reorder columns based on custom `@ColumnOrder` decorator
      meta.columns = [...meta.columns].sort((xColumn, yColumn) => {
        // Get the order values for both columns being compared
        const orderXColumn = getOrderSafely(xColumn);
        const orderYColumn = getOrderSafely(yColumn);

        // Sort in ascending order
        return orderXColumn - orderYColumn;
      });
    }
  }
}
