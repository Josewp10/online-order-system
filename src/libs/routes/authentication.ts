import express from 'express';
const router = express.Router();
import { Manager } from '../models/manager';


router.post('/login', (req,res)=>{
    try { 
        const user = req.body;
        const _manager = new Manager(user);
        _manager.authenticate().ipValidate();
        res.status(201).send('User authorized')
    } catch (error) {
        res.status(409).send(error)
    }
})

export default router