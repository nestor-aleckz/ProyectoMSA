import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { userProviders } from './users.provider';
import { DatabaseModule } from '../common/database/database.module';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, ...userProviders],
})
export class UsersModule {}