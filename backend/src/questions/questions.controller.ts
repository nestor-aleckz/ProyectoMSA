import { Controller,Get,Post, Body , Res, Param, HttpException, HttpStatus, Delete} from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Controller()
export class QuestionsController {
    constructor (private readonly questionsService:QuestionsService){
 
    }
    @Get('/api/question/:idQuestion')
    getQuestion(@Param('idQuestion') idQ, @Res() res){
            this.questionsService.getQuestion(idQ).then(
               (response) => {
                    
                    if( response === null  || response === undefined ){
                        res.status(HttpStatus.NOT_FOUND).send();
                        res.end();
                    }else{
                        
                        res.end(JSON.stringify(response)); 
                    }
                }
            );
    }
    @Get('/api/questions/:idPoll')
    getQuestions(@Param('idPoll') idPoll ,  @Res() res) {
       this.questionsService.getQuestions(idPoll).then(response => {
            console.log(response);
            res.end(JSON.stringify(response));
          })
       //   res.end(JSON.stringify(this.questionsService.getQuestions()));
    }

    @Post('/api/questions')
    postQuestion(@Body() newQuestion, @Res() res){
        this.questionsService.createQuestion(newQuestion).then((e)=>{
            let newId = Number(e[0]['mutationResults'][0].key.path.id);
            console.log("number: ", newId);
            this.questionsService.getQuestions(newQuestion.idPoll).then(response => {
                console.log(response);
                res.end(JSON.stringify(response));
              });   
        })
    }

    @Delete('/api/question/:idQuestion')
    removeQuestion(@Param('idQuestion') idQ,  @Res() res){
      
            this.questionsService.deleteQuestion(idQ).then(
               (response) => {
                    
                    if( response === null  || response === undefined ){
                        res.status(HttpStatus.NOT_FOUND).send();
                        res.end();
                    }else{
                        res.end(); 
                    }
                }
            );

    }


}