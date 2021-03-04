import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

import MyLogger from '@config/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: MyLogger });

  await app.listen(3000, () => {
    Logger.log(`🚀 Server running on http://localhost:3000/`);
  });
}
bootstrap();
