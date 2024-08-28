import { Module } from '@nestjs/common';
import { GraphQLOptionsService } from './services/graphql.options.service';

@Module({
  providers: [GraphQLOptionsService],
  exports: [GraphQLOptionsService],
  imports: [],
  controllers: [],
})
export class GraphQLOptionsModule {}
