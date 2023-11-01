import express from 'express';
const router = express.Router();
import { Manager } from '../models/manager';
import { Order } from '../models/order';
import { orders } from '../database/orders';

router.get('/order', (req,res)=>{
    try {
        let _manager = new Manager({username:req.query.username},req);
        _manager.authorize()
        const allOrders = Object.values(orders); 
        res.status(200).send({ok:true,message:allOrders})
    } catch (error) {
        res.status(409).send(error)
    }
})

router.get('/order/unit', (req,res)=>{
    try {
        let _manager = new Manager({username:req.query.username},req);
        _manager.authorize()
        let orderid: number | undefined;
        if (typeof req.query.orderid === 'string') {
            orderid = parseInt(req.query.orderid, 10);
        }
        else{
            orderid = 0;
        }
        const Order = orders[orderid]        
        if(Order === undefined ){
            res.status(404).send("Orden no encontrada")
        }else{
            res.status(200).send({ok:true,message:Order})
        }
    } catch (error) {
        res.status(409).send(error)
    }
})

router.post('/order',(req,res)=>{
    try {
        let _manager = new Manager({username:req.query.username},req);
        _manager.authorize()
        const order = req.body.order;

        const user = req.body.user;        
        
        const _order = new Order(order.id,order.product,order.quantity,order.totalPrice,order.customer);
        _order.createOrder(_order)

        res.status(200).send({ok:true,message:"Order saved."})

    } catch (error) {
        res.status(409).send(error)
    }
})

export default router;