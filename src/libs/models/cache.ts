import { IVerificator } from "./IVerificator";

export class Cache implements IVerificator{

    private static instance: Cache | null = null;
    private requests: { [request: string]: object } = {};

    private constructor(){       
    }

    public static getInstance(): Cache {
        if (!Cache.instance) {
            Cache.instance = new Cache();
        }
        return Cache.instance;
    }

    verify(data:any) {                       
        let request = `${data.request.method}-${data.request.path}-${data.request.query.id}`
        console.log(request);
        
        if(this.requests[request]!=undefined){            
            return this.requests[request]
        }else if(this.requests[request]==undefined && data.response){
            this.requests[request]=data.response;
        }       
    }
}