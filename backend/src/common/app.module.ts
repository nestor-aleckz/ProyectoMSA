import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from '../users/user.module';
import { FAQModule } from '../faq/faq.module';
import { QuestionsModule } from '../questions/questions.module';

@Module({
  imports: [FAQModule, QuestionsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
