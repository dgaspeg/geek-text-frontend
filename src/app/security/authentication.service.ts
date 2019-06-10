import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  signup(signupData: any) {
    return this.http.post(`${environment.apiAddress}/oauth/signup`, { newUser: signupData  });
  }
}
