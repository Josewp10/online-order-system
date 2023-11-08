import express from 'express';
const router = express.Router();
import { Manager } from '../models/manager';
import { Order } from '../models/order';
import { orders, createOrder } from '../database/orders';

router.get('/order', (req,res)=>{
    try {
        let _manager = new Manager({username:req.query.username},req);
        let resp:any = _manager.authorize().cache()

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
        function generateUUID() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0,
                    v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
        
        const uuid = generateUUID();
        
        const _order = new Order(uuid,order.product,order.quantity,order.totalPrice,order.customer);
        createOrder(_order)

        res.status(200).send({ok:true,message:"Order saved."})

    } catch (error) {
        res.status(409).send({ok:false,error:error})
    }
})

export default router;