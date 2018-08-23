import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { frontend } from './middleware/frontend/frontend.middleware'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(frontend);
  await app.listen(8080);
}
bootstrap();
