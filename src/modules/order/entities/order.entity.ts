import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { OrderProduct } from '../../order-products/entities/order-product.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.orders, {
    nullable: true,
  })
  user: User;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order, {
    nullable: true,
  })
  orderProducts: OrderProduct[];
}
