import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../services/faq.service';
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

  constructor(private faqService:FaqService ) {   }

  ngOnInit() {
    this.faqService.getFAQs().then((res) => {
      console.log(res);
      this.items = res;
    });
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
