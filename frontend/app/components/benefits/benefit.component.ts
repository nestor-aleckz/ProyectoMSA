import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
    selector: 'benefit-list',
    templateUrl: './benefit.component.html',
    styleUrls: ['./benefit.component.css']

})

export class BenefitComponent implements OnInit {

    items: any[] = []
    selectedCategory: any = {};
    selectedBenefit: any = {};
    showBenefitDetail: boolean = false;

    constructor() { }

    ngOnInit() {

        this.items = [
            {
                id: 1,
                name: "Beneficio 1",
                description: "Esta es la descripción del Beneficio 1, Un cupón de descuento en algun restaurante o cafetería."
            },
            {
                id: 2,
                name: "Beneficio 2",
                description: "Esta es la descripción del Beneficio 2, Dos días y una noche en los hostales del IRTRA"
            }, {
                id: 3,
                name: "Beneficio 3",
                description: "Esta es la descripción del Beneficio 3, 30% de descuento en compra de accesorios de computación."
            }, {
                id: 4,
                name: "Beneficio 4",
                description: "Esta es la descripción del Beneficio 1, Vale por Q100.00 de combustible."
            }
        ];

    }

    toogleBenefit(item) {
        $('#' + item.id).collapse('toggle');
    }

    selectBenefit(benefit) {
        console.log(benefit);
        this.selectedBenefit = benefit;
        this.showBenefitDetail = true;
    }

    crear() {
        $('#benefitsFormModal').modal("toggle");

    }

    saveBenefit(event){
        let name = $('#name').val();
        let description = $('#description').val();
        let id = this.items.length + 1;

        let newBenefit = {
            id: id,
            name: name,
            description: description

        }

        this.items.push(newBenefit);
        $('#name').val('');
        $('#description').val('');

    }
}
