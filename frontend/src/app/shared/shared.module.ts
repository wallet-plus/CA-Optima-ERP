import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    LayoutComponent,
    SideMenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule 
  ],
  exports : [
    LayoutComponent,
    SideMenuComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
