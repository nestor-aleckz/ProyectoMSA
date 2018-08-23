import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from '../users/user.module';
import { FAQModule } from '../faq/faq.module';

@Module({
  imports: [FAQModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
