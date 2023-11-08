import { Authenticator } from "./authenticator";
import { IpFailedRequest } from "./ipFailedRequest";
import { Authorizer } from "./authorizer";
import { DataValidator } from "./dataValidator";
import { Cache } from "./cache";
import { IVerificator } from "./IVerificator";
import { getOrder } from "../database/orders";

export class Manager{
    private authentication: IVerificator;
    private ipFailedRequest: IVerificator;
    private authorizer: IVerificator;
    private dataValidator : IVerificator;
    private cacheV : IVerificator;

    private ipDetails : any;
    private user: object;
    private request : object | undefined;
    
    constructor(user:object,request?:object){
        this.user=user;
        this.request=request;
        this.authentication = new Authenticator;
        this.authorizer = new Authorizer;
        this.ipFailedRequest = IpFailedRequest.getInstance();
        this.dataValidator = new DataValidator;
        this.cacheV = Cache.getInstance();
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
    
    melo(){
        return this.request
        
    }
    authorize():this{                    
        this.authorizer.verify({user:this.user, request:this.request});
        return this
    }

    
    cache():this{                
        let resp =  this.cacheV.verify({request:this.request}); 
        
        if(resp!=undefined){    
            console.log('RETORNADO DESDE LA CACHE');
            return resp
        }else if(resp ==undefined){            
            const order:any = getOrder({request:this.request});
            resp = this.cacheV.verify({request:this.request, response:order})
            console.log('RETORNADO DESDE EL REGISTRO DE ORDENES');
            return order
        }else{
            return this
        }
           
    }

    
  
    

}