import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateOrderDto {
  @Field()
  product: string;

  @Field(() => Int)
  quantity: number;

  @Field(() => Int)
  userId: number;
}
