import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from './food';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }

  getProduct():Observable<Food[]>{
    return this.http.get<any>('http://localhost:8080/api/f1/foods')
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
