import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


const routes: Routes = [
  {
    path : '',
    component : AuthenticationComponent,
    children : [
      {
        path : '',
        redirectTo : 'login',
        pathMatch: 'full'
      },
      {
        path : 'login',
        component : LoginComponent
      },
      {
        path : 'forgot-password',
        component : ForgotPasswordComponent
      },
      {
        path : 'reset-password',
        component : ResetPasswordComponent
      }
    ]
  },
];

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class AuthenticationModule { }
