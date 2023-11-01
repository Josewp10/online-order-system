import { orders } from "../database/orders";

export class Order {
    public id:number ;
    public product: string ;
    public quantity: number  ;
    public totalPrice: number  ;
    public customer: string  ;

    constructor(id:number,product:string,quantity:number,totalPrice:number,customer:string){
        this.id = id
        this.product=product
        this.quantity =quantity
        this.totalPrice =totalPrice
        this.customer =customer
    }

    //createOrder(id:number,product:string,quantity:number,totalPrice:number,customer:string) {
    //    const newOrder = new Order(id, product, quantity, totalPrice, customer);
    createOrder(order:Order) {
        const newOrder = order;
        //console.log(order);
        orders[newOrder.id] = newOrder;
        console.log(orders)
        return newOrder;
    }

}