import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { RegisterRequest } from './register.model';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  appName: string = environment.appName;
  registerForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private fb: FormBuilder, private registerService: RegisterService) {
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
          if(response){
            this.router.navigate(['/dashboard'], { queryParams: { usertype: 'newUser', accountType: this.registerForm.get('accountType')?.value } });
          }
        },
        error: (error) => {
          console.error('Registration error:', error);
          
          if (error.status === 422 && error.error.errors) {
            const validationErrors = error.error.errors;
            Object.keys(validationErrors).forEach((field) => {
              const formControl = this.registerForm.get(field);
              if (formControl) {
                formControl.setErrors({ serverError: validationErrors[field][0] });
              }
            });
          }
        }
      });
    }
  }
  
}
