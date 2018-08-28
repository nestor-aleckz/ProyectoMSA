import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

declare var $: any;

@Component({
    selector: 'main-component',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    @Input() selected: string;

    menuStatus = "Ocultar";
    loggedUser = "usuario@surveybot.com";
    thenBlock: TemplateRef <any> | null = null;
    show: boolean = true;
    benefits:any[] = [];
    constructor() { }

    @ViewChild('pollList')
    pollList: TemplateRef<any> | null = null;
    @ViewChild('benefitList')
    benefitList: TemplateRef<any> | null = null;
    @ViewChild('questionList')
    questionList: TemplateRef<any> | null = null;

    switchPrimary(element) {
        
        switch (element.target.id) {
            case 'pollList':
            this.thenBlock = this.pollList;
            break
            case 'benefitList' :
            this.thenBlock = this.benefitList;
            break
            case 'questionList' :
            this.thenBlock = this.questionList;
            break
        }

    }

    ngOnInit() { 

        this.benefits = [{label:"Beneficio 1?", idQuestion:2, idPoll:1, questionIndex:1}
        ,{label:"Beneficio 2?", idQuestion:3, idPoll:1, questionIndex:2}
        ,{label:"Beneficio 3?", idQuestion:4, idPoll:1, questionIndex:3}
        ,{label:"Beneficio 4?", idQuestion:5, idPoll:1, questionIndex:4}]
     }

    collapseMenu() {
        let menu = $('#sidebar')
        menu.toggleClass('active');
        if (menu.attr('class') != "active") {
            this.menuStatus = "Ocultar"
        } else {
            this.menuStatus = "Mostrar"
        }



    }

}
