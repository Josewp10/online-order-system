import express from 'express';
const router = express.Router();
import { Manager } from '../models/manager';
import { Order } from '../models/order';
import { orders } from '../database/orders';

router.get('/order', (req,res)=>{
    try {
        let _manager = new Manager({username:req.query.username},req);
        let resp:any = _manager.authorize().cache()
        console.log(resp);
        
        const allOrders = Object.values(orders); 

        res.status(200).send({ok:true,data:resp})
    } catch (error) {
        res.status(409).send({ok:false,error:error})
    }
})

router.post('/order',(req,res)=>{
    try {
        let _manager = new Manager({username:req.query.username},req);
        _manager.authorize()
        const order = req.body.order;

        const user = req.body.user;

        //const _manager = new Manager(user);
        //let a = _manager.authenticate().ipValidate();
        
        const _order = new Order(order.id,order.product,order.quantity,order.totalPrice,order.customer);
        //_order.createOrder(order.id,order.product,order.quantity,order.totalPrice,order.customer)
        _order.createOrder(_order)

        res.status(200).send({ok:true,message:"Order saved."})

    } catch (error) {
        res.status(409).send({ok:false,error:error})
    }
})

export default router;