import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'register',
    pathMatch : 'full'
  },
  {
    path : 'register',
    loadChildren : () => import('./register/register.module').then(m =>m.RegisterModule)
  },
  // {
  //   path : 'auth',
  //   loadChildren : () => import('./authentication/authentication.module').then(m =>m.AuthenticationModule)
  // },
  {
    path : '',
    component : LayoutComponent,
    children : [
      {
        path : 'dashboard',
        loadChildren : () => import('./dashboard/dashboard.module').then(m =>m.DashboardModule)
      },
      {
        path : 'employee',
        loadChildren : () => import('./employee/employee.module').then(m =>m.EmployeeModule)
      },
      {
        path : 'company',
        loadChildren : () => import('./company/company.module').then(m =>m.CompanyModule)
      },
      {
        path : 'user',
        loadChildren : () => import('./user/user.module').then(m =>m.UserModule)
      },
      {
        path : 'finance',
        loadChildren : () => import('./finance/finance.module').then(m =>m.FinanceModule)
      },
      {
        path : 'erp',
        loadChildren : () => import('./erp/erp.module').then(m =>m.ErpModule)
      },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
