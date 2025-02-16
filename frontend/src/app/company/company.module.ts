import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path : '',
      component : CompanyComponent,
      children : [
        // {
        //   path : '',
        //   redirectTo : 'list',
        //   pathMatch : 'full'
        // },
        // {
        //   path : 'list',
        //   component : EmployeeListComponent 
        // },
        
      ]
    }
];

@NgModule({
  declarations: [
    CompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    RouterModule.forChild(routes),
    
  ]
})
export class CompanyModule { }
