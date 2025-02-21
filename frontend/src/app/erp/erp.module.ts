import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LeadsComponent } from './components/leads/leads.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'clients',
        pathMatch: 'full'
      },
      {
        path: 'clients',
        component: ClientsComponent
      },
      {
        path: 'client-details',
        component: ClientDetailsComponent
      },
      {
        path: 'leads',
        component: LeadsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [ClientsComponent, LeadsComponent, ClientDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)  
  ]
})
export class ErpModule { }
