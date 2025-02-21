import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  appName : string  = environment.appName;
  constructor(private router :Router){}

  login(){
    this.router.navigateByUrl('/dashboard')
  }
}
