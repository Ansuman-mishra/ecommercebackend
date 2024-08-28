import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ENUM_APP_ENVIRONMENT } from 'src/app/constants/app.enum.constant';

@Injectable()
export class DatabaseOptionsService {
  private readonly host: string;
  private readonly port: number;
  private readonly database: string;
  private readonly username: string;
  private readonly password: string;
  private readonly synchronize: boolean;
  private readonly logging: boolean;
  private readonly env: string;

  constructor(private readonly configService: ConfigService) {
    this.env = this.configService.get<string>('app.env');
    this.host = this.configService.get<string>('database.host');
    this.port = this.configService.get<number>('database.port');
    this.database = this.configService.get<string>('database.name');
    this.username = this.configService.get<string>('database.user');
    this.password = this.configService.get<string>('database.password');
    this.synchronize = this.configService.get<boolean>(
      'database.synchronize',
      false,
    );
    this.logging = this.configService.get<boolean>('database.logging', false);
  }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    console.log('first', this.host,this.port,this.username,this.password,this.database)
    const options: TypeOrmModuleOptions = {
      type: 'postgres',
      host: this.host,
      port: Number(this.port),
      username: this.username,
      password: this.password,
      database: this.database,
      synchronize: this.synchronize,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      logging:
        this.env !== ENUM_APP_ENVIRONMENT.PRODUCTION ? this.logging : false,
      autoLoadEntities: true,
    };
    // console.log('options :>> ', options);
    return options;
  }
}
