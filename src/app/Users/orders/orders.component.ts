import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private userService:UserService) { }
  usermail:any = sessionStorage.getItem('user');
  orders:any;
  ngOnInit(): void {
    this.userService.GetUserOrders(this.usermail).subscribe((data:any)=>{
      this.orders =data;
    })

  }

}
