import express from 'express';
const router = express.Router();

router.post('/login', (req,res)=>{
    try {
        res.send('Authorized')
    } catch (error) {
        //Here is 
        res.send(error)
    }
})

export default router