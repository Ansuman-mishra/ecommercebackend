import { registerAs } from '@nestjs/config';

export default registerAs(
  'graphql',
  (): Record<string, any> => ({
    autoSchemaFile: true,
    playground: process.env?.PLAYGROUND ?? false,
    debug: process.env?.DEBUG,
  }),
);
