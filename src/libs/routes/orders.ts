import express from 'express';
const router = express.Router();

router.get('/order',(req,res)=>{
    try {
        res.send('order')
    } catch (error) {
        res.send(error)
    }
})

router.post('/order',(req,res)=>{
    try {
        res.send('order saved')
    } catch (error) {
        res.send(error)
    }
})

export default router;