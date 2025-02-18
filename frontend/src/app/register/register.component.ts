import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { RegisterRequest } from './register.model';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  appName: string = environment.appName;
  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private registerService: RegisterService) {
    this.registerForm = this.fb.group({
      accountType: ['individual', Validators.required],
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
    // Mark all controls as touched so validation errors display if any.
    this.registerForm.markAllAsTouched();

    if (this.registerForm.valid) {
      const model: RegisterRequest = this.registerForm.value;
      this.registerService.register(model).subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
          // Handle successful registration (e.g., navigate to another page, show a success message, etc.)
        },
        error: (error) => {
          console.error('Registration error:', error);
          // Handle errors (e.g., display an error message)
        }
      });
    }
  }
}
