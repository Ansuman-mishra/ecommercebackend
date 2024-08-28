import { registerAs } from '@nestjs/config';

export default registerAs(
  'database',
  (): Record<string, any> => ({
    host: process.env?.DATABASE_HOST ?? '127.0.0.1',
    name: process.env?.DATABASE_NAME ?? 'nest',
    user: process.env?.DATABASE_USER,
    port: process.env?.DATABASE_PORT ?? '5432',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    password: process?.env.DATABASE_PASSWORD,
    debug: process.env.DATABASE_DEBUG === 'true',
    synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
    logging: process.env.LOGGING === 'true',
  }),
);
