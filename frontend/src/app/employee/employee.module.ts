import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path : '',
      component : EmployeeComponent,
      children : [
        {
          path : '',
          redirectTo : 'list',
          pathMatch : 'full'
        },
        {
          path : 'list',
          component : EmployeeListComponent 
        },
        {
          path : 'details',
          component : EmployeeDetailsComponent 
        }
      ]
    }
];

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeeModule { }
