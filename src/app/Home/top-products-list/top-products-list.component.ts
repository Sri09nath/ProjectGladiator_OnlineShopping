import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-top-products-list',
  templateUrl: './top-products-list.component.html',
  styleUrls: ['./top-products-list.component.css']
})
export class TopProductsListComponent implements OnInit {
   Products:any;

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(
      data => {
        this.Products = data;
      }
    )
  }

  
}
