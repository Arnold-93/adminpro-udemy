
import { NgModule } from '@angular/core';

//importamos el Router module para poder utilizar el RouterLink
import { RouterModule } from '@angular/router';
//importamos para poder utilizar el *ngIF , *ngFOr
import { CommonModule } from '@angular/common';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';




@NgModule({
   
   imports:[
    RouterModule,
    CommonModule
   ],
   declarations:[
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
   ],
   exports:[
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
   ]
})

export class SharedModule{}