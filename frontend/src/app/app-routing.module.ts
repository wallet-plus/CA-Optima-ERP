import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'auth',
    pathMatch : 'full'
  },
  {
    path : 'auth',
    loadChildren : () => import('./authentication/authentication.module').then(m =>m.AuthenticationModule)
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
        path : 'user',
        loadChildren : () => import('./user/user.module').then(m =>m.UserModule)
      },
      {
        path : 'finance',
        loadChildren : () => import('./finance/finance.module').then(m =>m.FinanceModule)
      },
      {
        path : 'clients',
        loadChildren : () => import('./client/client.module').then(m =>m.ClientModule)
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
