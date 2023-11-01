import { IVerificator } from "./IVerificator";

export class Cache implements IVerificator{

    private static instance: Cache | null = null;
    private requests: { [request: string]: object } = {};

    private constructor(){
        this.requests[`GET-/order-5`] ={data:'Data already stored'}
        this.requests[`GET-/order-undefined`] ={
            "id": 3,
            "product": "pape",
            "quantity": 1,
            "totalPrice": 5000,
            "customer": "PACO"
        }
    }

    public static getInstance(): Cache {
        if (!Cache.instance) {
            Cache.instance = new Cache();
        }
        return Cache.instance;
    }

    verify(data:any) {
               
        let request = `${data.request.method}-${data.request.path}-${data.request.query.id}`
            
        if(this.requests[request]==undefined){
            return 'Logic to make request to the order system';            
        }else{
            return this.requests[request]
        }
        
    }
}