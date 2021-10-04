import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-forgot-pswd',
  templateUrl: './user-forgot-pswd.component.html',
  styleUrls: ['./user-forgot-pswd.component.css']
})
export class UserForgotPswdComponent implements OnInit {

  constructor() { }
  Registerform:FormGroup=new FormGroup({
    Email:new FormControl("",[Validators.required,Validators.pattern("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")])

  });
  get Email()
  {
    return this.Registerform.get('Email');
  }
  ngOnInit(): void {
  }
  Submitregister()
  {
    
  }

}
