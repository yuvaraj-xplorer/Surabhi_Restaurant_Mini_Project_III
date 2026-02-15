import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private useSer:UserServiceService,private route:ActivatedRoute,private router:Router) { }
  id!:number;
  user:User=new User()


  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.useSer.getUserById(this.id).subscribe(data =>{
      this.user=data;
    },err=>console.log(err));
  }
  onSubmit(){
    this.useSer.updateUser(this.id,this.user).subscribe(data =>{
      alert("Updated Successfully!!!..")
      this.goToUserList();
    })
  }
  goToUserList(){
    this.router.navigate(['/userop']);
  }
}
