import express from 'express';
const router = express.Router();
import { Manager } from '../models/manager';
import { Order } from '../models/order';
import { orders } from '../database/orders';

router.get('/order', (req,res)=>{
    try {
        const allOrders = Object.values(orders); 
        //const _manager = new Manager(user);
        //_manager.authenticate().ipValidate().authorize();
        res.status(200).send({ok:true,message:allOrders})
    } catch (error) {
        res.send(error)
    }
})

router.post('/order',(req,res)=>{
    try {
        const order = req.body.order;

        const user = req.body.user;

        //const _manager = new Manager(user);
        //let a = _manager.authenticate().ipValidate();
        
        const _order = new Order(order.id,order.product,order.quantity,order.totalPrice,order.customer);
        //_order.createOrder(order.id,order.product,order.quantity,order.totalPrice,order.customer)
        _order.createOrder(_order)

        res.status(200).send({ok:true,message:"Order saved."})

    } catch (error) {
        res.send(error)
    }
})

export default router;