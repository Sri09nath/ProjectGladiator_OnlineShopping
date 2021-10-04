import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/Services/user.service';



@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  
  constructor(private UserService:UserService,private router:Router) { }
  Registerform:FormGroup=new FormGroup({
   
    
    useremail:new FormControl("",[Validators.required,Validators.pattern("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")]),
    username:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
   
    userphone:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{10}$")]),
    
    userpassword: new FormControl("", [Validators.required]),
    checkpassword: new FormControl("", [Validators.required])
  });
  get username()
  {
    return this.Registerform.get('username');
  }
  get userpassword()
  {
    return this.Registerform.get('userpassword');
  }
  get useremail()
  {
    return this.Registerform.get('useremail');
  }
  get userphone()
  {
    return this.Registerform.get('userphone');
  }
  

  ngOnInit(): void {
    
  }
  
  
  submitted:boolean=false;
  check:boolean=false;
  checkpassword:any;
  status:any;
  statusObj: any = {};
  
  
  register() {
    console.log(this.Registerform.value);
    this.UserService.AddUser(this.Registerform.value).subscribe(data => {
      this.statusObj = data;
      //let jdata = JSON.parse(data.toString());
      console.log(this.statusObj);
      if(this.statusObj.status == "successful") {
        alert("Registered successfully...");
        this.router.navigateByUrl(" ");
      }
      else {
        this.status = "User Already Exist";
      }
    });

  }

      get f() { 
        return this.Registerform.controls; 
      }
    
  
    }
