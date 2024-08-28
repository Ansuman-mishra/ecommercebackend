import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
// import { Order } from '../../orders/entities/order.entity';
import { IsEmail, IsNotEmpty, Length, IsString } from 'class-validator';
import { Order } from 'src/modules/order/entities/order.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @Column({ unique: true })
  @IsNotEmpty({ message: 'Username is required' })
  @IsString()
  @Length(4, 20, { message: 'Username must be between 4 and 20 characters' })
  username: string;

  @Column()
  @IsNotEmpty({ message: 'Password is required' })
  @IsString()
  @Length(8, 100, { message: 'Password must be at least 8 characters long' })
  password: string;

  @Column({ unique: true })
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;

  @Column()
  @IsNotEmpty({ message: 'First name is required' })
  @IsString()
  firstName: string;

  @Column()
  @IsNotEmpty({ message: 'Last name is required' })
  @IsString()
  lastName: string;

  @CreateDateColumn()
  createdAt: Date;
}
