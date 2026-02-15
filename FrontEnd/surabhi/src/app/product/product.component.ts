import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productList : any;
  SearchKey:string="";
  totalwishlist : number = 0;  
  searchTerm : any='';
  constructor(private service : ServiceService, private wishlistService: WishlistService, private router:Router ) { }

  ngOnInit(): void {
    this.service.getProduct()
    .subscribe(res=>{
      this.productList=res;
    });
    this.wishlistService.search.subscribe((val:any)=>{
      this.SearchKey=val;
    });
    this.wishlistService.getProducts()
    .subscribe(res =>{
      this.totalwishlist=res.length;
    })
  }
  addtoWishlist(item : any){
    this.wishlistService.addtoWishList(item);
  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.wishlistService.search.next(this.searchTerm);
  }
  logout() {    
      this.router.navigate(['/login']);   
    
  }
}
