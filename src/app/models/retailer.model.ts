export class Retailer{
    retaileremail:string; 
    retailername:string; 
    MobNo:any;
    retailerpassword :string;
    Aadhar:string="";
    Pan:string="";
    UserTypeID="";
    CompanyDetails="";
    GST="";
   
    constructor(retaileremail:string="", retailername:string="", MobNo:any, retailerpassword :string="",GST:string="",
    Aadhar:string="",Pan:string="",CompanyDetails:string="",UserTypeID:string=""
        )
                {
                   this.retaileremail=retaileremail;
                   this.retailername=retailername;
                   this.retailerpassword=retailerpassword;
                   this.MobNo=MobNo;
                   this.Aadhar=Aadhar;
                   this.GST=GST;
                   this.Pan=Pan;
                   this.UserTypeID=UserTypeID;
                    this.CompanyDetails=CompanyDetails;
                }
}