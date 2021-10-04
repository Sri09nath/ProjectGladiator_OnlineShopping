import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private userService:UserService) { }

  name : string="";
  userlogged:boolean=false;
  user:null|string="";
  userdetails:any
  ngOnInit(): void {
    this.user = sessionStorage.getItem('user');
    if(this.user != null ){
      this.userlogged=true;
    this.name=this.user}

    this.userService.UserDetails(this.name).subscribe((data:any)=>{
      this.userdetails = data;
     
    })
  }
  LogOff(){
      this.userlogged=false;
      alert("Successfully logged off");
      sessionStorage.clear();
   
    }

    


}
