import { IVerificator } from "./IVerificator";

export class Cache implements IVerificator{

    private static instance: Cache | null = null;
    private requests: { [request: string]: object } = {};

    private constructor(){
        this.requests[`GET-/order-5`] ={data:'Data already stored'}
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
        
        if(this.requests[request]==undefined){
            console.log('Logic to make request to the order system');            
        }else{
            //return 'this.requests[request]'
        }
        
    }
}