//Import dependencies
import express from 'express';
import cors from 'cors';
//Rutas
import authentication from './libs/routes/authentication'
import orders from './libs/routes/orders'

const app = express();
//Cors

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//app.use(express.json());
app.use((err:Error, req:express.Request, res:express.Response, next:express.NextFunction)=>{
    res.status(400).json({message:err.message});
});

//app.use()


//Endpoint
app.get('/', async (req,res) =>{
    res.send('SERVIDOR SERVICIO DE ORDENES');
});

//routes
const port=3003;
//Levantamiento
 app.listen(port || 5000, () => {
    console.log(`Escuchando API en http://localhost:${port}`);
 });

//Begining of development elements
process.on('unhandledRejection', function(reason, promise) {
    console.log(promise);
});
//End of development elements