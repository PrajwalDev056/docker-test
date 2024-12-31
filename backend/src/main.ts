import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = new ConfigService();
  const PORT = configService.get<string>('PORT');

  await app.listen(PORT);

  console.log(`Server is running on: ${PORT}`);
}
bootstrap();
