import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../Services/admin.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private AdminService:AdminService,private router:Router) { }
  name : string="";
  adminlogged:boolean=false;
  admin:null|string="";
  retailerList : any =[] ;
  retailerLists : any = [];
  ProductList : any =[] ;
  ProductsLists : any = [];
  pendingList:any=[];
  acceptedList:any=[];
  status : any
  result :any;

  ngOnInit(): void {
    this.admin = sessionStorage.getItem('admin');
    if(this.admin != null ){
      this.adminlogged=true;
    this.name=this.admin}


    this.AdminService.GetAllRetailers()
    .subscribe(
      data=>{this.retailerLists = data;
        console.log("successful");
        console.log(this.retailerLists.length)
        for (let index = 0; index <this.retailerLists.length; index++) {
          console.log(this.retailerLists[index])
          this.retailerList[index]=this.retailerLists[index]
          //console.log(this.retailerList[index].approved)
          
          
        }
      //console.log(data)
    }
    );
  }

  ApproveRetailers(retailerid :number){
    this.status = this.AdminService.ApproveRetailers(retailerid)
    .subscribe(
      data=>{
        this.result = data;
        if(this.result == "Accepted"){
          console.log("approved")
         
        }
      }
    )  
  }

  RemoveRetailer(retailerid :any){
    this.status = this.AdminService.RemoveRetailer(retailerid)
    .subscribe(
      data=>{
        this.result = data;
        if(this.result == "successful"){
          console.log("removed")
        
        }
      }
    )  
  }
  

  PendingProducts(){
  this.AdminService.GetPendingProducts()
  .subscribe(
    data=>{this.ProductsLists = data;
      console.log("successful");
      console.log(this.ProductsLists.length)
      for (let index = 0; index <this.ProductsLists.length; index++) {
        console.log(this.ProductsLists[index])
        this.ProductList[index]=this.ProductsLists[index]
        //console.log(this.retailerList[index].approved)
      }
    //console.log(data)
  }
  ); }

LogOff(){
    this.adminlogged=false;
      alert("Successfully logged off");
      sessionStorage.clear();
     
    }
   
  }

