import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'faq-detail',
  templateUrl: './faq-detail.component.html',
  styleUrls: ['./faq-detail.component.css']
})
export class FaqDetailComponent implements OnInit {
  @Input() faqDetail:any;

  constructor() { }

  ngOnInit() {
  }

}
