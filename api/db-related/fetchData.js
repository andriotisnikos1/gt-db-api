import express from 'express';
import mongoose from 'mongoose';
import newProductSchema from '../models-schemas/newProduct.js';
const app = express();
const db = mongoose.connection;

export const getData = app.get('/:_id', async(req, res) => {

    const id = Number(req.params._id)
    try {
            const products = await db.useDb('main').collection('products').findOne({_id: id})
            res.send(products).status(200)
        

    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})
    
export const updateData = app.patch('/:_id/:quantity', async(req, res) => {

    const id = Number(req.params._id)
    const quantity = Number(req.params.quantity)

    try {
            await db.useDb('main').collection('products').updateOne({_id: id})
        res.send('success').status(200)
        
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
})

