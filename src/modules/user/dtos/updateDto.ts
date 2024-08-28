import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateUserDto } from './createDto';

@InputType()
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @Field(() => Int)
  id: number;
}
