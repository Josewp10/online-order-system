import { Authenticator } from "./authenticator";
import { IpFailedRequest } from "./ipFailedRequest";
import { Authorizer } from "./authorizer";
import { DataValidator } from "./dataValidator";
import { Cache } from "./cache";
import { IVerificator } from "./IVerificator";

export class Manager{
    private authentication: IVerificator;
    private ipFailedRequest: IVerificator;
    private authorizer: IVerificator;
    private dataValidator : IVerificator;
    private cache : IVerificator;

    private ipDetails : any;
    private user: object;
    
    constructor(user:object,request?:object){
        this.user=user;
        this.authentication = new Authenticator;
        this.authorizer = new Authorizer;
        this.ipFailedRequest = IpFailedRequest.getInstance();
        this.dataValidator = new DataValidator;
        this.cache = Cache.getInstance();
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
    
    authorize():this{
        this.authorizer.verify({});
        return this
    }

}