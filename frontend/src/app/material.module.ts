import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTabsModule
  ],
  exports : [
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
