import { RouterModule, Routes } from '@angular/router';

import { FaqComponent } from './components/faq/faq.component'
import { MainComponent } from './components/main/main.component';
import { SurveyComponent } from './components/survey/survey.component';


const app_routes: Routes = [
    { path: 'faq', component: FaqComponent },
    { path: 'home', component: MainComponent },
    { path: 'survey', component: SurveyComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'index' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);

