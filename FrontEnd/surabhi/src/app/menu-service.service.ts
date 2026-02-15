import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import {map}from 'rxjs/operators'
import { Food } from './food';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MenuServiceService {


  constructor(private http:HttpClient) { }


  id!:number;

  postFood(food:Food):Observable<object>{
    return this.http.post<any>('http://localhost:8080/api/f1/save-foods',food)
    .pipe(map((res:any)=>{
      return res;      
    }))
  }
  getFood():Observable<Food[]>{
    return this.http.get<Food>('http://localhost:8080/api/f1/foods')
    .pipe(map((res:any)=>{
      return res;     
    }))
  }
  updateFood(id:number,food:Food):Observable<Object>{
    return this.http.put<Food>('http://localhost:8080/api/f1/foods/'+id,food)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteFood(id:number):Observable<Object>{
    return this.http.delete<any>('http://localhost:8080/api/f1/foods/'+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getFoodById(id:number):Observable<Food>{
    return this.http.get<Food>('http://localhost:8080/api/f1/foods/'+id)
  }
}
