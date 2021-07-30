import express from 'express';
import mongoose from 'mongoose';
import newProductSchema from '../models-schemas/newProduct.js';
const app = express();
const db = mongoose.connection;
var a = [
    1,2
]

var b = []
export const getData = app.get('/', async(req, res) => {
    try {
            await a.forEach(async id => {
            const products = await db.useDb('main').collection('products').findOne({_id: id})
            b.push(products)    
        })
        res.send(b)
        
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})
    

