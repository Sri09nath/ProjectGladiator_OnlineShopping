import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { AdminService } from 'src/app/Services/admin.service';
import { ProductsService } from 'src/app/Services/products.service';
import { RetailerService } from 'src/app/Services/retailer.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private AdminService:AdminService,
    private ProductService:ProductsService,private router:Router,
    private RetailerService:RetailerService, private myRoute:ActivatedRoute,private http:HttpClient) {
      
      }
  retaileremail:null|string="";
  categories:any;
 categoryList : any =[] ;
  categoriesLists : any = [];
  ProductList : any =[] ;
  ProductsLists : any = [];

 
  retailerlogged:boolean=false;
  submitted=false;
  check:boolean=false;
  checkpassword:any;
  status:any;
  name:any;
  id:any;

  product?:Product
  
  ngOnInit(): void {
    
    
    this.retaileremail = sessionStorage.getItem('retailer');
    if(this.retaileremail != null ){
      this.retailerlogged=true;
    this.name=this.retaileremail}
  
    this.AdminService.GetCategories()
    .subscribe(
      data=>{this.categoriesLists = data;
        console.log("successful");
       
        console.log(this.categoriesLists.length)
        for (let index = 0; index <this.categoriesLists.length; index++) {
          console.log(this.categoriesLists[index])
          this.categoryList[index]=this.categoriesLists[index]
          //console.log(this.retailerList[index].approved)
          
          
        }
      //ceseonsole.log(data)
      
    }
    );
    this.RetailerService.RetailerProducts(this.retaileremail)
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
    );
  }
 
  Register1form:FormGroup=new FormGroup({
    productname:new FormControl(""),
    productprice: new FormControl(""),
    productquantity:new FormControl(""),
    productdescription:new FormControl(""),
    productbrand:new FormControl(""),
    categoryid:new FormControl("")
  });
  get productname()
  {
    return this.Register1form.get('productname');
  }
  get productquantity()
  {
    return this.Register1form.get('productquantity');
  }
  get productdescription()
  {
    return this.Register1form.get('productdescription');
  }
  get productbrand()
  {
    return this.Register1form.get('productbrand');
  }
  
  get productprice()
  {
    return this.Register1form.get('productprice');
  }  
 
  get categoryid()
  {
    return this.Register1form.get('categoryid');
  }  

  
  statusObj:any;
  
  OnSubmit(){
    //console.log(Retaileremail.value)
   this.ProductService.AddProduct(this.retaileremail,this.Register1form.value)
   .subscribe(data => {
    this.statusObj = data;
    console.log("hii");
    console.log(data);
     window.location.reload();
    //let jdata = JSON.parse(data.toString());
    console.log(this.statusObj);
    if(this.statusObj.status == "successful") {
      alert("Product Uploaded");
      this.router.navigateByUrl(" ");
    }
    else {
      this.status = "Product  not Uploaded";
      alert(this.status);
    }
  });
  }  

  Register2form:FormGroup=new FormGroup({
    
    productprice: new FormControl(""),
    productquantity:new FormControl(""),
    productdescription:new FormControl(""),
    productbrand:new FormControl("")
    
  });
  get product1quantity()
  {
    return this.Register2form.get('productquantity');
  }
  get product1description()
  {
    return this.Register2form.get('productdescription');
  }
  get product1brand()
  {
    return this.Register2form.get('productbrand');
  }
  
  get product1price()
  {
    return this.Register2form.get('productprice');
  }  

  Updateproduct(){
    this.status = this.ProductService.UpdateProduct(this.myRoute.snapshot.params['productid'],this.Register2form.value).subscribe(
      data =>{ 
        console.log(data);
        if(data!="invalid"){
            console.log("updated");
            console.log(data);
            alert('Product Updated Successfuly');
           
        }else{
          alert('Product Update Unsuccessful..try again');
          console.log("not updated");
        }
      })
  }
  RemoveProduct(){
    this.status = this.RetailerService.RemoveProduct(this.myRoute.snapshot.params['productid']).subscribe(
      data =>{ 
        console.log(data);
        if(data!="invalid"){
            console.log("remove");
            console.log(data);
            alert('remove notification sent to admin');
           
        }else{
          alert('Product Removing Unsuccessful..try again');
          console.log("not removed");
        }
      })
  }
  
  LogOff(){
    this.retailerlogged=false;
    alert("Logout successful");
    sessionStorage.clear();
  }


}
