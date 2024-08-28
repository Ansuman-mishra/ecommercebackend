import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateProductDto {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => Float)
  price: number;
}
