import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configs from 'src/configs';
import { DatabaseOptionsService } from './database/services/database.options.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLOptionsService } from './database/services/graphql.options.service';
import { UserModule } from 'src/modules/user/user.module';
import { ProductsModule } from 'src/modules/products/products.module';
import { OrderProductsModule } from 'src/modules/order-products/order-products.module';
import { OrdersModule } from 'src/modules/order/order.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      load: configs,
      isGlobal: true,
      cache: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule,UserModule,
        OrdersModule,
        ProductsModule,
        OrderProductsModule,],
      useClass: DatabaseOptionsService,
      inject: [DatabaseOptionsService],
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [ConfigModule],
      driver: ApolloDriver,
      useClass: GraphQLOptionsService,
      inject: [GraphQLOptionsService],
    }),
  ],
})
export class CommonModule {}
