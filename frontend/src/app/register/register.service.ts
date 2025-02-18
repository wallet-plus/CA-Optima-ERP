import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterRequest, RegisterResponse } from './register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'https://your-api-url.com/register'; // Update with your actual endpoint

  constructor(private http: HttpClient) {}

  register(data: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.apiUrl, data);
  }
}
