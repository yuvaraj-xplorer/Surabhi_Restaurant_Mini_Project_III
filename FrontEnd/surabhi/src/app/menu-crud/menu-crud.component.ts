import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../food';
import { MenuServiceService } from '../menu-service.service';

@Component({
  selector: 'app-menu-crud',
  templateUrl: './menu-crud.component.html',
  styleUrls: ['./menu-crud.component.css']
})
export class MenuCrudComponent implements OnInit {


  formValue !:FormGroup;
  menuObject: Food=new Food();
  foodData!:Food[];
  id!:number;
  addbutton:boolean=false;
  updatebutton:boolean=false;

  constructor(private formBuilder:FormBuilder,private menuser:MenuServiceService,private router:Router) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({      
    name:[''],
    description:[''],
    type: [''],
    cuisine_name: [''],
    price: ['']     
    }) 
    this.getAllfood();
    
  }
  clickaddFood(){
    this.formValue.reset();
    this.addbutton=true;
    this.updatebutton=false;
  }
  postAllfoods(){
    this.menuObject.name=this.formValue.value.name;
    this.menuObject.description=this.formValue.value.description;
    this.menuObject.type=this.formValue.value.type;
    this.menuObject.cuisine_name=this.formValue.value.cuisine_name;
    this.menuObject.price=this.formValue.value.price;

    this.menuser.postFood(this.menuObject)
    .subscribe(res=>{
      console.log(res);
      alert("Added Successfully");
      let ref=document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllfood();
    },err=>{
      alert("Something went to wrong");
    })
  }
  getAllfood(){
    this.menuser.getFood()
    .subscribe(res=>{
      this.foodData=res;
    })
  }
  deleteFoodlist(id:number){
    this.menuser.deleteFood(id)
    .subscribe(res=>{
      alert("Deleted Successfully..");
      this.getAllfood();
    })
  }
  onEditing(id:number){
    this.router.navigate(['food-update', id]);
  }
  
}