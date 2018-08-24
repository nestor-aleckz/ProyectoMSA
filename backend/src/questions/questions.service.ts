import { Injectable, Inject, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
const Datastore = require('@google-cloud/datastore');
@Injectable()
export class QuestionsService {
   
    ds = new Datastore();
    //private ds :any;
    public readonly ENTITY_NAME: string = 'Question';
    constructor(private readonly httpService: HttpService) {
      //  this.ds = DATASTORE.Datastore();
    } 

    getQuestions() {
    let  query =   this.ds.createQuery(this.ENTITY_NAME)
    .order('questionIndex', { descending: false });

  return this.ds.runQuery(query)
    .then((results) => {
      const entities = results[0];
        entities.forEach(element => {
            element.id = element[this.ds.KEY].id;
        });
      return entities;
    });
       /* return [{label:"Pregunta 1?", idQuestion:2, idPoll:1, questionIndex:1}
        ,{label:"Pregunta 2?", idQuestion:3, idPoll:1, questionIndex:2}
        ,{label:"Pregunta 3?", idQuestion:4, idPoll:1, questionIndex:3}
        ,{label:"Pregunta 4?", idQuestion:5, idPoll:1, questionIndex:4}];*/
    }

    createQuestion(question){
     return this.ds.save({
               key: this.ds.key(this.ENTITY_NAME)
               , data: question
           }
       );
    }

}