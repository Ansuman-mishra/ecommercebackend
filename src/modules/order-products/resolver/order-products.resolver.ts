import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderProductModel } from '../models/order-products.model';
import { CreateOrderProductDto } from '../dtos/createDto';
import { OrderProductsService } from '../services/order-products.service';

@Resolver(() => OrderProductModel)
export class OrderProductsResolver {
  constructor(private orderProductsService: OrderProductsService) {}

  @Query(() => [OrderProductModel], { name: 'orderProducts' })
  findAll() {
    return this.orderProductsService.findAll();
  }

  @Query(() => OrderProductModel, { name: 'orderProduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.orderProductsService.findOne(id);
  }

  @Mutation(() => OrderProductModel)
  createOrderProduct(
    @Args('createOrderProductDto')
    createOrderProductDto: CreateOrderProductDto,
  ) {
    return this.orderProductsService.create(createOrderProductDto);
  }

  @Mutation(() => Boolean)
  removeOrderProduct(@Args('id', { type: () => Int }) id: number) {
    return this.orderProductsService.remove(id).then(() => true);
  }
}
