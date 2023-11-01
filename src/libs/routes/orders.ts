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
        res.status(409).send({ok:false,error:error})
    }
})

router.post('/order',(req,res)=>{
    try {
        let _manager = new Manager({username:req.query.username},req);

        _manager.authorize()
        const order = req.body.order;
        function generateUUID() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0,
                    v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
        
        const uuid = generateUUID();
        
        const _order = new Order(uuid,order.product,order.quantity,order.totalPrice,order.customer);
        _order.createOrder(_order)

        res.status(200).send({ok:true,message:"Order saved."})

    } catch (error) {
        res.status(409).send({ok:false,error:error})
    }
})

export default router;