import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  signupForm !: FormGroup;
  

  constructor(private formBuilder:FormBuilder,private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      
      userName:[''],
      userEmail:[''],
      password:[''],
      mobile:['']
    })
  }
  signUp(){
    this.http.post<any>('http://localhost:8080/api/v1/save-users',this.signupForm.value)
    .subscribe(res =>{
      alert("Sign up succuessfully");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Something went to wrong");
    }) 
  }

}
