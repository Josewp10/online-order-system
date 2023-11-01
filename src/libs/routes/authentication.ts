import express from 'express';
const router = express.Router();
import { Manager } from '../models/manager';


router.post('/login', (req,res)=>{
    try {
        const user = req.body;
        const _manager = new Manager(user);
        _manager.authenticate().ipValidate();
        res.send('Authorized')
    } catch (error) {
        //Here is 
        res.send(error)
    }
})

export default router