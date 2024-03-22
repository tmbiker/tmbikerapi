import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('tmbikerapi');
  const configService = app.get(ConfigService);
  const port = configService.getOrThrow('PORT');
  await app.listen(3000);
}
bootstrap();
