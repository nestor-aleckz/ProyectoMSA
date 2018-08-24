import { Controller,Get,Post, Body , Res} from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Controller()
export class QuestionsController {
    constructor (private readonly questionsService:QuestionsService){
 
    }

    @Get('/api/questions')
    getQuestions(@Res() res) {
       /* this.questionsService.getQuestions().pipe().toPromise().then(response => {
            //console.log(response.data);
            res.end(JSON.stringify(response.data));
          })*/
          res.end(JSON.stringify(this.questionsService.getQuestions()));
    }

    @Post('/api/questions')
    postQuestion(@Body() newQuestion, @Res() res){
        this.questionsService.createQuestion(newQuestion).then(()=>{
            res.end(JSON.stringify(this.questionsService.getQuestions()));   
        })
    }


}