import { Module } from '@nestjs/common';
import { UserModule } from 'src/modules/user/user.module';

@Module({
  //   controllers: [UserController],
  providers: [],
  exports: [],
  imports: [UserModule],
})
export class RoutesModule {}
