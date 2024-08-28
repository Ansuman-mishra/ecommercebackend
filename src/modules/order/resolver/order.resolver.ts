import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderModel } from '../models/order.model';
import { OrdersService } from '../services/order.service';
import { CreateOrderDto } from '../dtos/createDto';
import { UpdateOrderDto } from '../dtos/updateDto';

@Resolver(() => OrderModel)
export class OrdersResolver {
  constructor(private ordersService: OrdersService) {}

  @Query(() => [OrderModel], { name: 'orders' })
  findAll() {
    return this.ordersService.findAll();
  }

  @Query(() => OrderModel, { name: 'order' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ordersService.findOne(id);
  }

  @Mutation(() => OrderModel)
  createOrder(@Args('createOrderDto') createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Mutation(() => OrderModel)
  updateOrder(@Args('updateOrderDto') updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(updateOrderDto.id, updateOrderDto);
  }

  @Mutation(() => Boolean)
  removeOrder(@Args('id', { type: () => Int }) id: number) {
    return this.ordersService.remove(id).then(() => true);
  }
}
