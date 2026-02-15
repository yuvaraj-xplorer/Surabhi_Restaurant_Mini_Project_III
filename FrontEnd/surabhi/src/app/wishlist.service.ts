import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  public wishList: any =[];
  totalPrice !: number;
  public productList = new BehaviorSubject<any>([]);
  public search=new BehaviorSubject<string>("");

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product:any){
    this.wishList.push(...product);
    this.productList.next(product);
  }
  addtoWishList(product:any){
    this.wishList.push(product);
    this.productList.next(this.wishList);
    alert("Added Successfully");
    this.grandTotal();
    console.log(this.wishList)
  }
  grandTotal():number{
    let totalPrice=0;
    this.wishList.map((a:any)=>{
      totalPrice=totalPrice + parseInt(a.price);
      console.log(a.price);
    })
    return totalPrice;

  }
  removeWishlist(product:any){
    this.wishList.map((a:any, index:any)=>{
      if(product.id===a.id){
        this.wishList.splice(index,1);
      }
    })
    this.productList.next(this.wishList);
  }
  removeAllWishlist(){
    this.wishList=[]
    this.productList.next(this.wishList);
  }  
  updateBill(totalPrice:number,date:any){
    return this.http.post("http://localhost:3000/Orders",totalPrice,date).pipe(map((res:any)=>{
      return res;      
    }))
  }
 getBill(){
    return this.http.get<any>("http://localhost:3000/Orders")
    .pipe(map((res:any)=>{
      return res;     
    }))
  }
}
