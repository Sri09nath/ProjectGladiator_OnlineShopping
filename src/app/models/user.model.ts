export class User{
    useremail:string; 
    username:string; 
    userphone:string;
    userpassword :string;
   
    constructor(useremail:string="", username:string="", userphone:string="", userpassword :string=""
        )
                {
                    this.username= username;
                    this.userpassword=userpassword;
                    
                    this.userphone=userphone;
                    this.useremail=useremail;
                    
                }
}