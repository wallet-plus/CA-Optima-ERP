import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { RolesComponent } from './components/roles/roles.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path : '',
      component : UserComponent,
      children : [
        {
          path : '',
          redirectTo : 'permissions',
          pathMatch : 'full'
        },
        {
          path : 'permissions',
          component : PermissionsComponent 
        },
        {
          path : 'roles',
          component : RolesComponent 
        }
      ]
    }
];

@NgModule({
  declarations: [
    UserComponent,
    PermissionsComponent,
    RolesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
