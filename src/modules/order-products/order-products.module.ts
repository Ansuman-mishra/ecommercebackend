import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderProductsService } from './services/order-products.service';
import { OrderProductsResolver } from './resolver/order-products.resolver';
import { OrderProduct } from './entities/order-products.entity';
import { Order } from '../order/entities/order.entity';
import { Product } from '../products/entities/products.entity';


@Module({
  imports: [TypeOrmModule.forFeature([OrderProduct, Order, Product])],
  providers: [OrderProductsService, OrderProductsResolver],
})
export class OrderProductsModule {}