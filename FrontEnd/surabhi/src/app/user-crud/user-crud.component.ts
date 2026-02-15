import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ActivatedRoute, CanActivate, Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {

  formValue !:FormGroup;
  addbutton:boolean=false;
  updatebutton:boolean=false;

  user:User=new User();

  users!:User[];
  id!:number;

  constructor(private useSer:UserServiceService,private router:Router,private formBuilder:FormBuilder,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      userName:[''],
      userEmail:[''],
      mobile:[''],
      password:['']
    })
    this.getAllUser(); 
    
  }
  clickadduser(){
    this.formValue.reset();
    this.addbutton=true;
    this.updatebutton=false;
  }
  postUserDetails(){    
    this.user.userName=this.formValue.value.userName;
    this.user.userEmail=this.formValue.value.userEmail;
    this.user.mobile=this.formValue.value.mobile;
    this.user.password=this.formValue.value.password;

    this.useSer.postUser(this.user)
    .subscribe(res =>{
      console.log(res);
      alert("Added Successfully");
      let ref=document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllUser();
    },err=>{
      alert("Something went to wrong");
    })
  }
  getAllUser(){
    this.useSer.getUser().subscribe(res =>{
      this.users=res;
    })
  }
  deleteUserlist(id:number){
    this.useSer.deleteUser(id)
    .subscribe(res =>{
      alert("User deletd Successfully");
      this.getAllUser();
    })
  }
  onEdit(id:number){
      this.router.navigate(['user-update', id]);
    }  
  }
