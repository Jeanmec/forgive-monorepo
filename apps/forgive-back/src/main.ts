/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = process.env.ALLOW_ORIGINS?.split(',');
  if (allowedOrigins) {
    app.enableCors({
      origin: allowedOrigins,
      methods: 'GET,POST',
      credentials: false,
    });

    Logger.log(`Enabled for origins: ${allowedOrigins.join(', ')}`, 'CORS');
  } else {
    Logger.warn(
      'Not configured. The ALLOW_ORIGINS variable is missing or empty in the .env file.',
      'CORS'
    );
  }

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
