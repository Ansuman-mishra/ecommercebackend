import { ObjectType, Field, Int } from '@nestjs/graphql';
import { OrderModel } from 'src/modules/order/models/order.model';
import { ProductModel } from 'src/modules/products/models/products.model';


@ObjectType()
export class OrderProductModel {
  @Field(() => Int)
  id: number;

  @Field(() => OrderModel)
  order: OrderModel;

  @Field(() => ProductModel)
  product: ProductModel;
}
