import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RetailerService } from 'src/app/Services/retailer.service';

@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.component.html',
  styleUrls: ['./register-details.component.css']
})
export class RegisterDetailsComponent implements OnInit {
  clicked:boolean=false;
  constructor(private RetailerService:RetailerService,private router:Router) { }
  submitted:boolean=false;
  status:any;
  ngOnInit(): void {
  }
  RegisterDetsform:FormGroup=new FormGroup({GST:new FormControl("",[Validators.required]),
  Pan:new FormControl("",[Validators.required]),
  Aadhar:new FormControl("",[Validators.required]),
  CompanyDetails:new FormControl("",[Validators.required]),
  retailername:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
  retaileremail:new FormControl("",[Validators.required,Validators.pattern("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")]),
    
  MobNo:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{10}$")]),
  retailerpassword: new FormControl("",[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")])

 });
 Approval(){
   alert("Request has been sent to admin,please check confirmation mail for your approval status");
   this.clicked=true;
 }
 get Pan()
  {
    return this.RegisterDetsform.get('Pan');
  }
  get Aadhar()
  {
    return this.RegisterDetsform.get('Aadhar');
  }
  get CompanyDetails()
  {
    return this.RegisterDetsform.get('CompanyDetails');
  }
  get GST()
  {
    return this.RegisterDetsform.get('GST');
  }
  get retailername()
  {
    return this.RegisterDetsform.get('retailername');
  }
  get  retaileremail()
  {
    return this.RegisterDetsform.get('retaileremail');
  }
  get MobNo()
  {
    return this.RegisterDetsform.get('MobNo');
  }
  get retailerpassword()
  {
    return this.RegisterDetsform.get('retailerpassword');
  }
 
  statusObj: any = {};
 Submitregister(){
 console.log(this.RegisterDetsform.value);
 this.RetailerService.RetailerRegister(this.RegisterDetsform.value).subscribe(data => {
   this.statusObj = data;
   //let jdata = JSON.parse(data.toString());
   console.log(this.statusObj);
   if(this.statusObj.status == "successful") {
     alert("Registered successfully...");
     this.router.navigateByUrl(" ");
   }
   else {
     this.status = "Retailer Already Exist";
   }
 });

}
    

}
