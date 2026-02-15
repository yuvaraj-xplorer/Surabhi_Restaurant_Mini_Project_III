import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WishlistService } from '../wishlist.service';
import { billUpload } from './wishlist.module';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  product: any = [];
  formValue !: FormGroup;
  totalPrice !: number;
  date = new Date();
  bill: billUpload = new billUpload();
 
  constructor(private wishlistService: WishlistService, private http: HttpClient, private route: Router, private formbuilder: FormBuilder) { }

  ngOnInit(): number {
    this.wishlistService.getProducts().subscribe(res => {
      this.product = res;
      this.totalPrice = this.wishlistService.grandTotal();
    })
    return this.totalPrice;    
  }
  removeOneWishlist(item: any) {
    this.wishlistService.removeWishlist(item);
  }
  removeallwishlist() {
    this.wishlistService.removeAllWishlist();
  }
  placeorder() {    
        alert("Order placed successfully");
        this.route.navigate(['/product']);      
  }

}
