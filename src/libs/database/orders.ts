import { Order } from "../models/order";

const orders: { [id: string]: Order } = {};

const createOrder=(order:Order)=> {
    orders[order.id] = order;
}

const getOrder = (req:any)=>{    
    let id = req.request.query.id;
    
    if (id==undefined) {
        return orders; 
    }else{
        return orders[id]  
    }
}
export { getOrder,createOrder, orders };