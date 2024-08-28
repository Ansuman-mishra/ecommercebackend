import { Order } from 'src/modules/order/entities/order.entity';
import { Product } from 'src/modules/products/entities/products.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';


@Entity()
export class OrderProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.orderProducts, { eager: true })
  order: Order;

  @ManyToOne(() => Product, (product) => product.orderProducts, {
    eager: true,
    nullable: false,
  })
  product: Product;
}
