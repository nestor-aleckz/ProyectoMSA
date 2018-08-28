import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'survey-component',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  @Input() idPoll : any;
  surveys : any[];

  constructor() { }

  ngOnInit() {
    $('#surveysSeeFormModal').modal({show:false});
    $('#surveysEditFormModal').modal({show:false});
    this.getSurveys();
  }

  getSurveys(){
    this.surveys=
    [
        {surveyIndex: 1, nameSurvey: "Eyespops", benefitSurvey: "Ingreso gratis el 30 de Agosto eyespopland", providerSurvey: "Eyespop S.A." },
        {surveyIndex: 2, nameSurvey: "Grupo Hame 50%", benefitSurvey: "50% de descuento en productos de la marca.", providerSurvey: "Grupo Hame S.A." },
        {surveyIndex: 3, nameSurvey: "Genba está de feria!", benefitSurvey: "2x1 en tu próxima compra.", providerSurvey: "Genba" },
        {surveyIndex: 4, nameSurvey: "Querido, Santa! Navidad Azul", benefitSurvey: "10% de Reintegro en tu proxima compra.", providerSurvey: "Samsung L.A." },
        {surveyIndex: 5, nameSurvey: "Fecha? Soy Luna en Vivo!", benefitSurvey: "Parqueo gratis en Oakland Mall durante un mes.", providerSurvey: "Diseny Latinoamérica" }
    ]
  }

  see(){    
    console.log("Solicita ver detalle de una nueva encuesta");
    $('#surveysSeeFormModal').modal("toggle");
  }

  edit(){    
    console.log("Solicita editar la encuesta no.-");
    $('#surveysEditFormModal').modal("toggle");
  }

  hide(){
    $('#surveysSeeFormModal').modal({show:false});
    $('#surveysEditFormModal').modal({show:false});
  }
}
