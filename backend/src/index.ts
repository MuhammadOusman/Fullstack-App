import express  from 'express';
import productRouter from './routes/products/index';
const port=3000;

const app=express();
app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.use('/products',productRouter);

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});