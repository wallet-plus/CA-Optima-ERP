import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonalDetailsComponent } from '../../dialogs/personal-details/personal-details.component';
import { QualificationComponent } from '../../dialogs/qualification/qualification.component';
import { ExperienceComponent } from '../../dialogs/experience/experience.component';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent {
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    // PersonalDetailsComponent
    // QualificationComponent
    // ExperienceComponent

    this.dialog.open(ExperienceComponent, {
      // width: '600px',
      // height: '330px',  // Add height here
      panelClass: 'custom-dialog',
      data: { message: 'Hello from the dialog!' }
    });
  }
}
