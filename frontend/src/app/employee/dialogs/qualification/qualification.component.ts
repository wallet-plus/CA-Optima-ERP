import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent {
  qualificationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<QualificationComponent>
  ) {
    this.qualificationForm = this.fb.group({
      qualification: ['', Validators.required],
      specialization: [''],
      college: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      starting_date: [''],
      completion_date: [''],
      marks: ['', [Validators.min(0), Validators.max(100)]],
      grade: [''],
      is_highest_qualification: [false]
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  saveChanges(): void {
    if (this.qualificationForm.valid) {
      this.dialogRef.close(this.qualificationForm.value);
    }
  }
}
