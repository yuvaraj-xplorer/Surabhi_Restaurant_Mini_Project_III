import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { Userlogin } from './userlogin';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  adminLogin(admin:Admin):Observable<Object>{
    return this.http.post('http://localhost:8080/api/a1/login',admin)
  }
  userLogin(user:Userlogin):Observable<object>{
    return this.http.post('http://localhost:8080/api/v1/login',user)
  }
}
