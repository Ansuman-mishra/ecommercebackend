import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderProduct } from '../entities/order-products.entity';
import { Order } from 'src/modules/order/entities/order.entity';
import { Product } from 'src/modules/products/entities/products.entity';
import { CreateOrderProductDto } from '../dtos/createDto';

@Injectable()
export class OrderProductsService {
  constructor(
    @InjectRepository(OrderProduct)
    private orderProductRepository: Repository<OrderProduct>,
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  findAll(): Promise<OrderProduct[]> {
    return this.orderProductRepository.find({
      relations: ['order', 'product'],
    });
  }

  findOne(id: number): Promise<OrderProduct> {
    return this.orderProductRepository.findOne({
      where: { id },
      relations: ['order', 'product'],
    });
  }

  async findOneById(id: number): Promise<OrderProduct> {
    return this.orderProductRepository.findOne({
      where: { id },
      relations: ['order', 'product'],
    });
  }

  async create(
    createOrderProductDto: CreateOrderProductDto,
  ): Promise<OrderProduct> {
    const order = await this.orderRepository.findOne({
      where: { id: createOrderProductDto.orderId },
    });
    const product = await this.productRepository.findOne({
      where: { id: createOrderProductDto.productId },
    });

    if (!order || !product) {
      throw new Error('Order or Product not found');
    }

    const newOrderProduct = this.orderProductRepository.create({
      order,
      product,
    });

    return this.orderProductRepository.save(newOrderProduct);
  }

  async remove(id: number): Promise<void> {
    await this.orderProductRepository.delete(id);
  }
}
