import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-product-des',
  templateUrl: './product-des.component.html',
  styleUrls: ['./product-des.component.css']
})
export class ProductDesComponent implements OnInit {

  public id:number=0;
  Products : any;
  statusObj : any = {};
  useremail = sessionStorage.getItem('user') ;
  quanity : number = 1;
  constructor(private route:ActivatedRoute, private userService: UserService, private productService:ProductsService, private addToCartService:CartService ) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['productid']

    this.productService.getAllProducts().subscribe(
      data => {
        this.Products = data;
      });
  }

  addToCart()
  {
    var cartobj = {
      useremail : this.useremail,
      productid : this.id,
      cartquantity :this.quanity 
    }
    
    if(this.useremail != null){
      this.addToCartService.AddtoCart(cartobj)
      .subscribe(data => {
        this.statusObj = data;
        if(this.statusObj.status == "successful")
         {
          alert("Product added successfully");
         }
         else {
           alert("Not added")
         }
        });
   
    }
    else{
      alert("Please login to buy products");
    
     }
                           
  }
}
