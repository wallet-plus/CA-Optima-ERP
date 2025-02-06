import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ClientComponent } from './client.component';
import { LeadsComponent } from './components/leads/leads.component';
import { ClientsComponent } from './components/clients/clients.component';
import { Routes } from '@angular/router';

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
        path: 'leads',
        component: LeadsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    LeadsComponent,
    ClientsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
