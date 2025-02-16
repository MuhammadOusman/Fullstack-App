import { Request, Response } from 'express';
import {db} from '../../db/index';
import { productstable } from '../../db/productsSchema';
import { eq } from 'drizzle-orm';

export async function listProducts(req:Request,res:Response){
    try{
      const products=await db.select().from(productstable);
      res.json(products);
    }catch(e){res.status(500).send(e);}
};

export async function getProductById(req:Request,res:Response){
    try{
        const id = Number(req.params.id);
        const [product]=await db.select().from(productstable).where(eq(productstable.id, id));
        if(!product) res.status(404).send('Product not found');
        else{res.json(product);}
    }catch(e){res.status(500).send(e);}
};

export async function createProduct(req:Request,res:Response){
    try{
    const [product] = await db.insert(productstable).values(req.body).returning();
res.status(201).json(product);}
    catch(e){
        res.status(500).send(e);
    }
};

export async function updateProduct(req:Request,res:Response){
    try{
        const id = Number(req.params.id);
        const updatedfields= req.body;
        const [product]= await db.update(productstable).set(updatedfields).where(eq(productstable.id, id)).returning();
        
        if(product) res.json(product);
        else res.status(404).send('Product not found');

    }catch(e){res.status(500).send(e);}
};

export async function deleteProduct(req:Request,res:Response){
    try{
        const id = Number(req.params.id);
        const [deletedproduct]=await db.delete(productstable).where(eq(productstable.id,id)).returning();
        if(deletedproduct) res.status(204).send();
        else res.status(404).send('Product not found');

    }catch(e){res.status(500).send(e);}
};