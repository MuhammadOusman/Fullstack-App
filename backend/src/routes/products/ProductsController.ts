import { Request, Response } from 'express';

export function listProducts(req:Request,res:Response){
    res.send('listProducts');
};

export function getProductById(req:Request,res:Response){
    res.send('getProductById');
    console.log(req.params.id);
};

export function createProduct(req:Request,res:Response){
    res.send('createProduct');
    console.log(req.body);
};

export function updateProduct(req:Request,res:Response){
    res.send('updateProduct');
    console.log(req.params.id);
};

export function deleteProduct(req:Request,res:Response){
    res.send('deleteProduct');
    console.log(req.params.id);
};