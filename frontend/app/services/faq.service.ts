import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { API_FAQ_URL} from '../config/endpoints'

@Injectable()
export class FaqService {

  constructor(private  http:Http) {}

  getFAQs(){
    return this.http.get(API_FAQ_URL).pipe().toPromise().then(res => res.json());
  }
}
