import { NgModule } from "@angular/core";

//ngModel solo funciona con esta importacion
import {FormsModule}from "@angular/forms";

import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

//importacion de graficas npm install ng2-charts@2.3.2 --save
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

import { AccountSettingsComponent } from './account-settings/account-settings.component';



@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,

        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent ,
        
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    imports:[
        SharedModule,
        //las rutas del modulo de pages
        FormsModule,
        ChartsModule,
        PAGES_ROUTES
    ]
})

export class PagesModule{}