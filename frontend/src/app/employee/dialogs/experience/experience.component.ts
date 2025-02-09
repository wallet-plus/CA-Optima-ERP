import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experienceForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.experienceForm = this.fb.group({
      organization_name: ['', Validators.required],
      period_from: ['', Validators.required],
      period_to: [''],
      designation: ['', Validators.required],
      key_role_responsibility: [''],
      significant_achievement: [''],
      uan_no: [''],
      pf_no: [''],
      esi_no: [''],
      document: [null]
    });
  }

  saveChanges(): void {
    if (this.experienceForm.valid) {
      console.log('Form Data:', this.experienceForm.value);
      // Perform API call or further processing here
    } else {
      console.log('Form is invalid');
    }
  }

  closeDialog(): void {
    // Logic to close modal/dialog
    console.log('Dialog closed');
  }
}