import { RouterModule, Routes } from '@angular/router';

import { FaqComponent } from './components/faq/faq.component'
import { MainComponent } from './components/main/main.component';


const app_routes: Routes = [
    { path: 'faq', component: FaqComponent },
    { path: 'home', component: MainComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'index' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);

