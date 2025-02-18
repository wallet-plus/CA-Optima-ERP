import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ContactDetailsComponent } from './dialogs/contact-details/contact-details.component';
import { PersonalDetailsComponent } from './dialogs/personal-details/personal-details.component';
import { FamilyDetailsComponent } from './dialogs/family-details/family-details.component';
import { QualificationComponent } from './dialogs/qualification/qualification.component';
import { LanguageComponent } from './dialogs/language/language.component';
import { ExperienceComponent } from './dialogs/experience/experience.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
          component : EmployeeDetailsComponent ,
          
        }
      ]
    }
];

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    ContactDetailsComponent,
    PersonalDetailsComponent,
    FamilyDetailsComponent,
    QualificationComponent,
    LanguageComponent,
    ExperienceComponent,
    PersonalInformationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule 
  ]
})
export class EmployeeModule { }
