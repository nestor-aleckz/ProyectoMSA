import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../services/faq.service';
import { QuestionService } from '../../services/questions.service';
declare var $: any;

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']

})

export class FaqComponent implements OnInit {
  
  items:any[] = []
  selectedCategory:any = {};
  selectedFaq:any = {};
  showFaqDetail:boolean = false;

  constructor(private faqService:FaqService, private questionService : QuestionService ) {  

   }

  ngOnInit() {
    this.faqService.getFAQs().then((res) => {
      console.log(res);
      this.items = res;
    });
    this.questionService.getQuestions(1).then(res =>{
      console.log('Preguntas: ',res);
    });
    this.questionService.getQuestionById(5631986051842048).then(res =>{
      console.log('Pregunta: ',res);
    });
    let newQ =  {"questionIndex":7,"label":"Pregunta 7?","idPoll":2}
    this.questionService.createQuestion(newQ).then(res => {
      console.log("after create", res);
    });
   this.questionService.deleteQuestion(5707702298738688).then(()=>{
      console.log("success");
   })   
  }

  toogleFAQ(item) {
    $('#'+item.id).collapse('toggle');
  }

  selectFaq(faq) {
    console.log(faq);
    this.selectedFaq = faq;
    this.showFaqDetail = true;
  }
}