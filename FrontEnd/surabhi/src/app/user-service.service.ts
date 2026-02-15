import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import {map}from 'rxjs/operators'
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  
  constructor(private http:HttpClient) { }
  id!:number;
  postUser(user :User):Observable<Object>{
    return this.http.post<any>("http://localhost:8080/api/v1/save-users",user)
    .pipe(map((res:any)=>{
      return res;      
    }))
  }
  getUser():Observable<User[]>{
    return this.http.get<User>('http://localhost:8080/api/v1/users')
    .pipe(map((res:any)=>{
      return res;     
    }))
  }
  updateUser(id:number,user:User):Observable<Object> {
    return this.http.put<User>('http://localhost:8080/api/v1/users/'+id,user)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteUser(id:number):Observable<Object> {
    return this.http.delete('http://localhost:8080/api/v1/users/'+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getUserById(id:number):Observable<User>{
    return this.http.get<User>('http://localhost:8080/api/v1/users/'+id)
  }
  
}
