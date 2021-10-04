import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.css']
})
export class TopProductsComponent implements OnInit {
  @Input() public product:any 
  
  constructor() { }

  ngOnInit(): void {
  }

}
