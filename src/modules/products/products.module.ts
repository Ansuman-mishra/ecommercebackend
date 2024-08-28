import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/products.entity';
import { ProductsService } from './services/products.service';
import { ProductsResolver } from './resolver/products.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductsService, ProductsResolver],
})
export class ProductsModule {}