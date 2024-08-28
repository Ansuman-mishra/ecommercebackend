import { InputType, Field, Int, Float, PartialType } from '@nestjs/graphql';
import { CreateProductDto } from './createDto';


@InputType()
export class UpdateProductDto extends PartialType(CreateProductDto) {
  @Field(() => Int)
  id: number;
}
