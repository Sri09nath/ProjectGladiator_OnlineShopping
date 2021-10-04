import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetailerService } from '../Services/retailer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private RetailerService:RetailerService) { }

  
    name : string="";
    retailerlogged:boolean=false;
    retailer:null|string="";
    RetailerDetails : any = [];
    Retailer:any=[];
    
    ngOnInit(): void {
      this.retailer = sessionStorage.getItem('retailer');
      if(this.retailer != null ){
        this.retailerlogged=true;
      this.name=this.retailer}
      this.RetailerService.RetailerDetails(this.retailer)
  .subscribe(
    data=>{this.RetailerDetails = data;
      console.log("successful");
      console.log(this.RetailerDetails.length)
      for (let index = 0; index <this.RetailerDetails.length; index++) {
        console.log(this.RetailerDetails[index])
        this.Retailer[index]=this.RetailerDetails[index]
        //console.log(this.retailerList[index].approved)
      }
    //console.log(data)
  }
  ); }
  
  
LogOff(){
  this.retailerlogged=false;
  alert("Logout successful");
  sessionStorage.clear();
}
}
