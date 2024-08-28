import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ENUM_APP_ENVIRONMENT } from 'src/app/constants/app.enum.constant';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GqlOptionsFactory } from '@nestjs/graphql';

@Injectable()
export class GraphQLOptionsService
  implements GqlOptionsFactory<ApolloDriverConfig>
{
  private readonly env: string;
  private readonly playground: boolean;
  private readonly debug: boolean;
  private readonly autoSchemaFile: string;

  constructor(private readonly configService: ConfigService) {
    this.env = this.configService.get<string>('app.env', 'development');
    this.playground = this.configService.get<boolean>(
      'graphql.playground',
      false,
    );
    this.debug = this.configService.get<boolean>('graphql.debug', false);
    this.autoSchemaFile =
      this.configService.get<string>('graphql.autoSchemaFile') ||
      join(process.cwd(), 'src/schema.gql');
  }

  createGqlOptions(): ApolloDriverConfig {
    console.log('this.autoSchemaFile :>> ', this.autoSchemaFile);
    const isProduction = this.env === ENUM_APP_ENVIRONMENT.PRODUCTION;

    const options: ApolloDriverConfig = {
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: !isProduction && this.playground,
      debug: !isProduction && this.debug,
      sortSchema: true,
      csrfPrevention: false,
    };

    return options;
  }
}
