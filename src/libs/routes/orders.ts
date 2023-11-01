import express from 'express';
const router = express.Router();

import { Manager } from '../models/manager';

router.get('/order', (req,res)=>{
    try {
        let _manager = new Manager({username:req.query.username},req);
        _manager.authorize()
        //Hace la request 
        res.status(200).send({ok:true,message:'order'})
    } catch (error) {
        res.status(409).send(error)
    }
})

router.post('/order',(req,res)=>{
    try {
        let _manager = new Manager({username:req.query.username},req);
        _manager.authorize()
        res.status(200).send({ok:true,message:'order saved'})
    } catch (error) {
        res.status(409).send(error)
    }
})

export default router;