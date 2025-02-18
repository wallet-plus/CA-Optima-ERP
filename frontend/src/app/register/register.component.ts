import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  appName: string = environment.appName;
  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      accountType: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      terms: [false, Validators.requiredTrue],
      companyName: ['']
    });

    this.registerForm.get('accountType')!.valueChanges.subscribe(val => {
      if (val === 'organization') {
        this.registerForm.get('companyName')!.setValidators(Validators.required);
      } else {
        this.registerForm.get('companyName')!.clearValidators();
        this.registerForm.get('companyName')!.setValue('');
      }
      this.registerForm.get('companyName')!.updateValueAndValidity();
    });

  }

  onSubmit(): void {
    this.registerForm.markAllAsTouched();

    if (this.registerForm.valid) {
      console.log('Form Submitted!', this.registerForm.value);
    }
  }
}
