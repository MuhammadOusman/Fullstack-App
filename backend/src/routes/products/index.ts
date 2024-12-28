import { Router } from "express";

const router = Router();

router.get('/',(req,res)=>{
    res.send('list of products');
});

router.get('/:id',(req,res)=>{
    res.send('product details');
    console.log(req.params.id);
});

router.post('/',(req,res)=>{
    res.send('product added');
});

export default router;