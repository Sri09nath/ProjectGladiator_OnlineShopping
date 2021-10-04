import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from 'src/app/Services/filter.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  Products:any;
  search: string = "";
  searchdetails:any;
  searchstatus : boolean = false;
  filterbycategory : any;
  categories : any;
  brands:any;
  categoryname : string ="";
  brandname : string ="";
  sortbyatoz:any;
  sortbyztoa:any;
  sortbypricehl:any;
  sortbypricelh:any;
  filterbycategorystatus:boolean = false;
  filterbycategoryandbrand:any;
  filterbypricecategorybrand:any;
  filterbycategoryandbrandstatus:boolean=false;
  filterbypricecategorybrandstatus:boolean=false;
  sortstatus:boolean=false;
  
  constructor(private productService:ProductsService,private router :Router, private filterService:FilterService) { }

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(
      data => {
        this.Products = data;
      }
    )
  }

  GetCategory(){
    this.productService.getallcategories().subscribe((data : any) => {
      this.categories = data;
      console.log(this.categories)
    }
      )
  }

  FetchSearchResults()
  {
    console.log(this.search)
    this.productService.searchallProducts(this.search)
    .subscribe((data: any)=>
    {this.searchdetails=data;
      console.log(this.searchdetails);
      this.searchstatus = true;
      this.filterbycategorystatus = false;
    }
      )
  }
  GetBrands()
  {
    this.filterService.FilterByCategoryOnBrand(this.categoryname).subscribe((data:any) => {
      this.brands = data;
    });
  }

  ByCategory(catname:string)
  {
    this.categoryname = catname;
    
    this.filterService.FilterByCategory(catname).subscribe((data:any) => {
      this.filterbycategory = data;
      this.filterbycategorystatus = true;
      this.searchstatus = false;
      this.filterbycategoryandbrandstatus=false;
      this.filterbypricecategorybrandstatus=false;
      this.sortstatus=false;
    });
  }
 
  ByBrands(bname:string)
  {
    this.brandname = bname;
    this.filterService.FilterByCategoryAndBrand(this.categoryname,bname).subscribe((data:any)=>{
      this.filterbycategoryandbrand=data;
      this.filterbycategoryandbrandstatus=true;
      this.filterbypricecategorybrandstatus=false;
      this.filterbycategorystatus = false;
      this.searchstatus = false;
      this.sortstatus=false;
    })
  }

  ByPrice(price:string)
  {
    this.filterService.FilterByPriceCategoryBrand(price, this.categoryname, this.brandname).subscribe((data:any)=>{
    this.filterbypricecategorybrand=data;
    this.filterbypricecategorybrandstatus=true;
    this.filterbycategoryandbrandstatus=false;
    this.filterbycategorystatus = false;
    this.searchstatus = false;
    this.sortstatus=false;
    })
  }

  SortByAtoZ()
  {
    this.sortbyatoz=null;
    this.filterService.SortByProduct().subscribe((data)=>{
      this.sortbyatoz = data;
      this.sortstatus=true;
    })
  }

  SortByZtoA()
  {
    this.sortbyatoz=null;
    this.filterService.SortByProductDesc().subscribe((data)=>{
      this.sortbyatoz = data;
      this.sortstatus=true;
    })
  }

  SortByPriceHL()
  {
    this.sortbyatoz=null;
    this.filterService.SortByPriceDesc().subscribe((data:any)=>{
      this.sortbyatoz=data;
      this.sortstatus=true;
    })
  }

  SortByPriceLH()
  {
    this.sortbyatoz=null;
    this.filterService.SortByPrice().subscribe((data:any)=>{
      this.sortbyatoz=data;
      this.sortstatus=true;
    })
  }

  
}
