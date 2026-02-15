import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../food';
import { MenuServiceService } from '../menu-service.service';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent implements OnInit {

  constructor(private route:ActivatedRoute,private menuser:MenuServiceService,private router:Router) { }
  food: Food=new Food();
  id!:number;
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    
    this.menuser.getFoodById(this.id).subscribe(data=>{
      this.food=data;
    })
  }
  onSubmit(){
    this.menuser.updateFood(this.id,this.food).subscribe(data =>{
      alert("Updated Successfully!!!..")
      this.goToFoodList();
    })
  }
  goToFoodList(){
    this.router.navigate(['/menuop']);
  }

}
