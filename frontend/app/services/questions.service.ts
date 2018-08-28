import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';
import { API_QUESTIONS_URL } from '../config/endpoints'

@Injectable()
export class QuestionService {

  constructor(private  http:Http) {}

  getQuestions(idPoll){
    let requestUrl = API_QUESTIONS_URL + '/'+idPoll;
    return this.http.get(requestUrl).pipe().toPromise().then(res => res.json()).catch(res => null);
  }

  getQuestionById(idQuestion){
    let requestUrl = API_QUESTIONS_URL.substr(0,API_QUESTIONS_URL.length - 1) + '/' + idQuestion;
    return this.http.get(requestUrl).pipe().toPromise().then(res => res.json()).catch((res) =>{
        console.log(res);
        return null;
    });
  }
 createQuestion(newQuestion){   
        let options : RequestOptionsArgs = {headers : new Headers()};
        options.headers.append("Content-Type", "application/json;charset=UTF-8");
        return this.http.post(API_QUESTIONS_URL,newQuestion,options).pipe().toPromise().then(res => res.json()).catch(res=>null);
 };
  
 updateQuestion(idQuestion, question){
    let options : RequestOptionsArgs = {headers : new Headers()};
    options.headers.append("Content-Type", "application/json;charset=UTF-8");
    let requestUrl = API_QUESTIONS_URL + '/' + idQuestion ;
    return this.http.put(requestUrl ,question,options).pipe().toPromise().then(res => res.json()).catch(res=>null);
 }

 deleteQuestion(idQuestion){
     let requestUrl = API_QUESTIONS_URL+'/'+idQuestion;
     return this.http.delete(requestUrl).pipe().toPromise().then(() => {
         return "success"
     }).catch(res => null);
 }

}