import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';

import { useContainer } from 'class-validator';
import { Logger, VersioningType } from '@nestjs/common';
async function bootstrap() {
  const app: NestApplication = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const databaseUri: string = configService.get<string>('database.host');
  const env: string = configService.get<string>('app.env');
  const host: string = configService.get<string>('app.http.host');
  const port: number = configService.get<number>('app.http.port');
  const globalPrefix: string = configService.get<string>('app.globalPrefix');
  const verPrefix: string = configService.get<string>('app.versioning.prefix');
  const version: string = configService.get<string>('app.versioning.version');
  const versionEnable: string = configService.get<string>(
    'app.versioning.enable',
  );
  const logger = new Logger();
  process.env.NODE_ENV = env;
  app.setGlobalPrefix(globalPrefix);
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  if (versionEnable) {
    app.enableVersioning({
      type: VersioningType.URI,
      defaultVersion: version,
      prefix: verPrefix,
    });
  }
  await app.listen(port, host);
  // logger.log('ecommerce', JSON.parse(JSON.stringify(process.env)));
  logger.log(`Database uri ${databaseUri}:${port}`);
}
bootstrap();
