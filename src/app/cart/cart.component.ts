import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { ProductsService } from '../Services/products.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  useremail:any = sessionStorage.getItem('user');
  status : any;
  statusObj : any = {};
  usercart : any = [];
  subtotal : any = 0;
  grandtotal : any; 
  public id : number =0;
  orderstatus:any;
  constructor(private cartService :CartService, private productService:ProductsService) { }

  ngOnInit(): void {
    

    this.status = this.cartService.GetCart(this.useremail)
    .subscribe(
      data => {
        this.usercart = data;
      }
    )

    this.GetTotal(this.useremail);
  }

  incr(pid:number){
    this.cartService.QuantityIncr(this.useremail,pid).subscribe();
    window.location.reload();

  }
  decr(pid:number){
    this.cartService.QuantityDecr(this.useremail,pid).subscribe();
    window.location.reload();
  }


  Removefromcart(cartid:number){
    this.cartService.RemoveProductCart(cartid)
    .subscribe(data => {
      this.statusObj = data;
      if(this.statusObj.status == "successful")
       {
        alert("Removed Successfully");
        window.location.reload();
       }
      
      });
  }

  GetTotal(useremail: string){
    this.cartService.GetTotal(useremail)
    .subscribe(
      data =>{
        
        this.subtotal = data;
        this.grandtotal = this.subtotal;
      }
    )
    
   }

   CheckOut(){
     this.cartService.PurchaseAllProducts(this.useremail).subscribe((data:any)=>{
      this.orderstatus = data;
      if(this.orderstatus.status == "Success")
      {
        alert("Order Placed Successfully");
        window.location.reload();
      }
      else{
        alert("Unable to Place Order");
      }
     })
   }
   
}
