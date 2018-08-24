import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from  '@angular/http';
import { APP_ROUTING } from  './app.routes';

import { AppComponent } from './app.component';
import { FaqComponent } from './components/faq/faq.component';
import { FaqDetailComponent } from './components/faq-detail/faq-detail.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';

import { FaqService } from './services/faq.service';
import { MainComponent } from './components/main/main.component';

import {QuestionsComponent}from './components/questions/questions.component'

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    FaqDetailComponent,
    NavbarComponent,
    MainComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING 
  ],
  providers: [
    FaqService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
