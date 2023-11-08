import { orders } from "../database/orders";

export class Order {
    public id:string ;
    public product: string ;
    public quantity: number  ;
    public totalPrice: number  ;
    public customer: string  ;

    constructor(id:string,product:string,quantity:number,totalPrice:number,customer:string){
        this.id = id
        this.product=product
        this.quantity =quantity
        this.totalPrice =totalPrice
        this.customer =customer
    }

}