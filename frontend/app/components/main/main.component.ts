import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
    selector: 'main-component',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    @Input() faqDetail: any;
    menuStatus = "Ocultar";
    loggedUser = "usuario@surveybot.com"
    constructor() { }

    ngOnInit() {
    }

    collapseMenu() {
        let menu = $('#sidebar')
        menu.toggleClass('active');
        if(menu.attr('class') != "active"){
            this.menuStatus = "Ocultar"
        }else {
            this.menuStatus = "Mostrar"
        } 

       

    }

}
