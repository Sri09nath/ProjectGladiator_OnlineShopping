import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RetailerService } from 'src/app/Services/retailer.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private RetailerService: RetailerService, private router: Router) { }
  RetailerRegisterform:FormGroup=new FormGroup({
    retailername:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
    retaileremail:new FormControl("",[Validators.required,Validators.pattern("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")]),
    
    retailermobile:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{10}$")]),
    retailerpassword: new FormControl("",[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")])
  });
  get retailername()
  {
    return this.RetailerRegisterform.get('retailername');
  }
  get  retaileremail()
  {
    return this.RetailerRegisterform.get('retaileremail');
  }
  get retailermobile()
  {
    return this.RetailerRegisterform.get('retailermobile');
  }
  get retailerpassword()
  {
    return this.RetailerRegisterform.get('retailerpassword');
  }

  ngOnInit(): void {
  }
 

}
