import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {
  profileForm: FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PersonalDetailsComponent>
  ) {
    this.profileForm = this.fb.group({
      name: ['Mr. Mohammad Abdul Fareed'],
      gender: ['Male'],
      dob: ['24-Aug-1991'],
      bloodGroup: ['O +ve'],
      maritalStatus: ['Married'],
      anniversaryDate: ['25-Feb-2016'],
      guardianName: ['-'],
      nationality: ['Indian'],
      religion: ['Muslim'],
      signature: ['No signature attached']
    });
  }

  saveChanges() {
    console.log(this.profileForm.value);
  }

  closeDialog() {
    this.dialogRef.close(); // Closes without returning data
  }
}
