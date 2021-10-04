export class Product{
    productid?:number;
    productname:string;
    productprice: number;
    productquantity: number;
    productdescription: string;
    productbrand: string;
    
    
    categoryid: number;
    constructor( 
        productname:string,
        productprice: number,
        productquantity: number,
        productdescription: string,
        productbrand: string,
        
       
        categoryid: number,
        productid?:number)
        
    {
        
       this.productname= productname,
        this.productprice=productprice,
        this.productquantity=productquantity,
        this.productdescription=productdescription,
        this.productbrand=productbrand,
        
        
        this.categoryid=categoryid,
        this.productid=productid
    }
}