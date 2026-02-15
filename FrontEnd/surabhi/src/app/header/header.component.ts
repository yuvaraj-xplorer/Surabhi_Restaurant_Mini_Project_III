import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  totalwishlist : number = 0;  
  searchTerm : any='';

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.wishlistService.getProducts()
    .subscribe(res =>{
      this.totalwishlist=res.length;
    })
  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.wishlistService.search.next(this.searchTerm);
  }

}
