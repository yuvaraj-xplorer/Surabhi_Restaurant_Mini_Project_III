import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { Userlogin } from 'src/app/userlogin';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public loginform !: FormGroup

  user: Userlogin = new Userlogin();

  constructor( private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private loginService: LoginService) { }

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      userEmail: [''],
      password: ['']
    });
  }

  get f() { return this.loginform.controls; }

  login() {
    console.log(this.user);

    this.loginService.userLogin(this.user).subscribe(data=>{
      alert("Login Successfully")
      this.router.navigate(['/product'])
    },error=>alert("Please enter valid credentials"));
  }
}