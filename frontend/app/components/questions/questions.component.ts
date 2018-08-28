import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @Input() idPoll : any;
  questions : any[];

  constructor() { }

  ngOnInit() {
    $('#questionsFormModal').modal({show:false});
    this.getQuestions();
  }

  getQuestions(){
    //trear preguntas por idPoll
    this.questions=[{label:"Pregunta 1?", idQuestion:2, idPoll:1, questionIndex:1}
    ,{label:"Pregunta 2?", idQuestion:3, idPoll:1, questionIndex:2}
    ,{label:"Pregunta 3?", idQuestion:4, idPoll:1, questionIndex:3}
    ,{label:"Pregunta 4?", idQuestion:5, idPoll:1, questionIndex:4}]
  }

  crear(){
    console.log("crear una pregunta");
    $('#questionsFormModal').modal("toggle");

  }
}
