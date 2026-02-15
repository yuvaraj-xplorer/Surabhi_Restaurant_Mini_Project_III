import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public loginform !:FormGroup 
  admin:Admin=new Admin();

  constructor(private formBuilder:FormBuilder,private http:HttpClient, private router:Router, private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginform=this.formBuilder.group({
      adminEmail:[''],
      adminpassword:['']
    })
  }
  login(){
    console.log(this.admin);
    
    this.loginService.adminLogin(this.admin).subscribe(data=>{
      alert("Login Successfully")
      this.router.navigate(['/adminpage'])
    },error=>alert("Please enter valid credentials"));
  }
}
