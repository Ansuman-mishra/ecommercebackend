
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateOrderProductDto } from './createDto';

@InputType()
export class UpdateOrderProductDto extends PartialType(CreateOrderProductDto) {
  @Field(() => Int)
  id: number;
}
