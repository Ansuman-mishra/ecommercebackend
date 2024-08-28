import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserResolver } from './resolver/user.resolver';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [UserService],
  providers: [UserService, UserResolver],
  controllers: [],
})
export class UserModule {}
