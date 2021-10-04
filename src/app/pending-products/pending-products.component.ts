import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pending-products',
  templateUrl: './pending-products.component.html',
  styleUrls: ['./pending-products.component.css']
})
export class PendingProductsComponent implements OnInit {

  constructor(private AdminService:AdminService, private router:Router) { }
  ProductList : any =[] ;
  ProductsLists : any = [];
  name : string="";
  adminlogged:boolean=false;
  admin:null|string="";
  status:any;
  result:any;
  ngOnInit(): void {
    this.admin = sessionStorage.getItem('admin');
    if(this.admin != null ){
      this.adminlogged=true;
    this.name=this.admin}
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
      }
    );
      //cons
  }

  
  ApproveProduct(productid:number){
    this.status = this.AdminService.ApproveProduct(productid)
    .subscribe(
      data=>{
        this.result = data;
        if(this.result == "accepted"){
          alert("Product approved Successfully")
          window.location.reload();

         
        }
      }
    )  
  }

  RejectProduct(productid:number){
    this.status = this.AdminService.RejectProduct(productid)
    .subscribe(
      data=>{
        this.result = data;
        if(this.result.status == "rejected"){
          console.log()
          window.location.reload();
        }
      }
    )  
  }
 
    LogOff(){
      this.adminlogged=false;
        alert("Successfully logged off");
        sessionStorage.clear();
       
      }

}
