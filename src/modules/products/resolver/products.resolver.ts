import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductModel } from '../models/products.model';
import { CreateProductDto } from '../dtos/createDto';
import { UpdateProductDto } from '../dtos/updateDto';
import { ProductsService } from '../services/products.service';


@Resolver(() => ProductModel)
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => [ProductModel], { name: 'products' })
  findAll() {
    return this.productsService.findAll();
  }

  @Query(() => ProductModel, { name: 'product' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.findOne(id);
  }

  @Mutation(() => ProductModel)
  createProduct(
    @Args('createProductDto') createProductDto: CreateProductDto,
  ) {
    return this.productsService.create(createProductDto);
  }

  @Mutation(() => ProductModel)
  updateProduct(
    @Args('updateProductDto') updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(
      updateProductDto.id,
      updateProductDto,
    );
  }

  @Mutation(() => Boolean)
  removeProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.remove(id).then(() => true);
  }
}
