import { Injectable, Inject, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';


@Injectable()
export class FAQService {
    constructor(private readonly httpService: HttpService) {} 

    getQuestions() {
        return this.httpService.get('https://saac-api.mybluemix.net/help-topics?lang=es');
    }
}