import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SampleDialogComponent } from './sample-dialog/sample-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private dialog: MatDialog) {}
  viewBadges(){
    this.dialog.open(SampleDialogComponent, {
      width: '600px',
      height: '330px',  // Add height here
      data: { message: 'Hello from the dialog!' }
    });
  }
}
