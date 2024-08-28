import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateOrderDto } from './createDto';

@InputType()
export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @Field(() => Int)
  id: number;
}
