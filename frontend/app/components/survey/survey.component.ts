import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  @Input() idPoll : any;
  surveys : any[];

  constructor() { }

  ngOnInit() {
    $('#surveysFormModal').modal({show:false});
    this.getSurveys();
  }

  getSurveys(){
    this.surveys=
    [
        {surveyIndex: 1, nameSurvey: "Eyespops", benefitSurvey: "Ingreso gratis el 30 de Agosto eyespopland", providerSurvey: "Eyespop S.A." },
        {surveyIndex: 2, nameSurvey: "Grupo Hame 50%", benefitSurvey: "50% de descuento en productos de la marca.", providerSurvey: "Grupo Hame S.A." },
        {surveyIndex: 3, nameSurvey: "Genba está de feria!", benefitSurvey: "2x1 en tu próxima compra.", providerSurvey: "Genba" }
    ]
  }

  crear(){
    console.log("Solicita crear una nueva encuesta");
    $('#surveysFormModal').modal("toggle");

  }
}
