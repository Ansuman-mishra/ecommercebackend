import { Module } from '@nestjs/common';
import { OrderProductsModule } from 'src/modules/order-products/order-products.module';
import { OrdersModule } from 'src/modules/order/order.module';
import { ProductsModule } from 'src/modules/products/products.module';
import { UserModule } from 'src/modules/user/user.module';

@Module({
  //   controllers: [UserController],
  providers: [],
  exports: [],
  imports: [UserModule,ProductsModule,OrdersModule,OrderProductsModule],
})
export class RoutesModule {}
