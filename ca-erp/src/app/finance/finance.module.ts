import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceComponent } from './finance.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { InvoicingComponent } from './components/invoicing/invoicing.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path : '',
      component : FinanceComponent,
      children : [
        {
          path : '',
          redirectTo : 'accounts',
          pathMatch : 'full'
        },
        {
          path : 'accounts',
          component : AccountsComponent 
        },
        {
          path : 'invoice',
          component : InvoicingComponent 
        },
        {
          path : 'payments',
          component : PaymentsComponent 
        }
      ]
    }
];

@NgModule({
  declarations: [
    FinanceComponent,
    AccountsComponent,
    InvoicingComponent,
    PaymentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FinanceModule { }
