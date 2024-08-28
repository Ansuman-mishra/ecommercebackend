import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProductModel } from 'src/modules/products/models/products.model';


import { UserModel } from 'src/modules/user/models/user.model';
@ObjectType()
export class OrderModel {
  @Field(() => Int)
  id: number;

  @Field()
  product: ProductModel;

  @Field(() => Int)
  quantity: number;

  @Field()
  createdAt: Date;

  @Field(() => UserModel)
  user: UserModel;
}
