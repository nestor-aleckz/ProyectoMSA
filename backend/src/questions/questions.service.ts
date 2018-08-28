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

    getQuestion(idQuestion){
  
        idQuestion = parseInt(idQuestion);
        let key = this.ds.key([this.ENTITY_NAME,idQuestion]);
        return this.ds.get(key).then(
            (entity) =>{
                  if(entity[0] != null){
                    entity = entity[0];
                    entity.id = idQuestion;
                  }
                  else{
                      entity = null ; 
                  }
                return entity;
            }
        )
    }
    getQuestions(idPoll) {
    
    idPoll= new Number(idPoll);

    let  query =   this.ds.createQuery(this.ENTITY_NAME)
    .filter('idPoll','=',idPoll)
    .order('questionIndex', { descending: false });

  return this.ds.runQuery(query)
    .then((results) => {
      const entities = results[0];
        entities.forEach(element => {
            element.id = new Number(element[this.ds.KEY].id);
        });
      return entities;
    });

    }

    createQuestion(question){
     return this.ds.save({
               key: this.ds.key(this.ENTITY_NAME)
               , data: question
           }
       );
    }
    updateQuestion(idQuestion,question){
        if(question.id){
            delete question['id'];
        }
        idQuestion = Number(idQuestion);
        return this.ds.update({
                  key: this.ds.key([this.ENTITY_NAME, idQuestion])
                  , data: question
              }
          );
       }
    

    deleteQuestion(idQuestion){
        console.log("before: ",idQuestion);
        idQuestion = parseInt(idQuestion);
        console.log("After: ",idQuestion);
        let key = this.ds.key([this.ENTITY_NAME,idQuestion]);
        return this.ds.delete(key).then(
            (entity) =>{
                return entity;
            }
        )
    }

}