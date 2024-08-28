import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/services/user.service';
import { UserResolver } from '../user/resolver/user.resolver';
import { Order } from './entities/order.entity';
import { OrdersService } from './services/order.service';
import { OrdersResolver } from './resolver/order.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  exports: [OrdersService],
  providers: [OrdersService, OrdersResolver],
  controllers: [],
})
export class OrdersModule {}
// console.log('first', first)