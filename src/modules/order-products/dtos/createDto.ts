import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateOrderProductDto {
  @Field(() => Int)
  orderId: number;

  @Field(() => Int)
  productId: number;
}
