import { Authenticator } from "./authenticator";
import { IpFailedRequest } from "./ipFailedRequest";
import { User } from "./user";
import { IVerificator } from "./IVerificator";

export class Manager{
    private authentication: IVerificator;
    private ipFailedRequest: IVerificator;
    private ipDetails : any;
    private user: object;
    
    constructor(user:object,request?:object){
        this.user=user;
        this.authentication = new Authenticator;
        this.ipFailedRequest = IpFailedRequest.getInstance();
    }

    authenticate() : this{        
        this.ipDetails = this.authentication.verify(this.user);
        this.ipDetails = this.ipDetails.loginDetails
        return this;
    }

    ipValidate():this {      
        this.ipFailedRequest.verify(this.ipDetails);
        return this;
    }
    


}