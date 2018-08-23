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
    constructor() { }

    @ViewChild('surveyList')
    surveyList: TemplateRef<any> | null = null;
    @ViewChild('benefitList')
    benefitList: TemplateRef<any> | null = null;

    switchPrimary(element) {
        console.log("Selected ",element.target);
        switch (element.target.id) {
            case 'surveyList':
            this.thenBlock = this.surveyList;
            break
            case 'benefitList' :
            this.thenBlock = this.benefitList;
            break
        }

    }

    ngOnInit() {  }

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
