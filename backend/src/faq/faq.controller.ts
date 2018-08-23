import { Controller,Get,Post, Body , Res} from '@nestjs/common';
import { FAQService } from './faq.service'

@Controller()
export class TasksController {
    constructor (private readonly faqService:FAQService){}

    @Get('/api/faq')
    getQuestions(@Res() res) {
        this.faqService.getQuestions().pipe().toPromise().then(response => {
            //console.log(response.data);
            res.end(JSON.stringify(response.data));
          })
        
    }


}