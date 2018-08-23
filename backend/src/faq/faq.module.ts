import { Module, HttpModule } from '@nestjs/common';
import { TasksController } from './faq.controller';
import { FAQService } from './faq.service';


@Module({
    imports: [HttpModule],
    controllers: [TasksController],
    providers: [FAQService]
})
export class FAQModule {}