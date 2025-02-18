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
    loadChildren : () => import('./authentication/register/register.module').then(m =>m.RegisterModule)
  },
  {
    path : 'login',
    loadChildren : () => import('./authentication/login/login.module').then(m =>m.LoginModule)
  },
  {
    path : 'forgot-password',
    loadChildren : () => import('./authentication/forgot-password/forgot-password.module').then(m =>m.ForgotPasswordModule)
  },
  {
    path : 'reset-password',
    loadChildren : () => import('./authentication/reset-password/reset-password.module').then(m =>m.ResetPasswordModule)
  },
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
