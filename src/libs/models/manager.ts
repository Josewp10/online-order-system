import { Authenticator } from "./authenticator";
import { IpFailedRequest } from "./ipFailedRequest";
import { User } from "./user";
import { IVerificator } from "./IVerificator";

export class Manager{
    private authentication: IVerificator;
    private ipFailedRequest: IVerificator;
    private user: object;
    
    constructor(user:object,request?:object){
        this.user=user;
        this.authentication = new Authenticator;
        this.ipFailedRequest = new IpFailedRequest;
    }

    authenticate() : this{
        this.authentication.verify(this.user);
        return this;
    }

    ipValidate():this {
        this.ipFailedRequest.verify();
        return this;
    }
    


}