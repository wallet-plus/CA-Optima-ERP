import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SampleDialogComponent } from './sample-dialog/sample-dialog.component';

const routes : Routes  = [
  {
    path : '',
    component  : DashboardComponent
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    SampleDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class DashboardModule { }
