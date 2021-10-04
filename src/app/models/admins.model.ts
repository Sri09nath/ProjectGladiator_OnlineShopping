export class Admins{
    email:string; 
    name:string; 
    phone:string;
    password :string;
    userTypeID:string;
   
    constructor(email:string="", name:string="", phone:string="", password :string="",userTypeID:string=""
        )
                {
                    this.name= name;
                    this.password=password;
                    
                    this.phone=phone;
                    this.email=email;
                    this.userTypeID=userTypeID;
                    
                }
}