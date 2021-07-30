import express from 'express';
import mongoose from 'mongoose';
import newProductSchema from '../models-schemas/newProduct.js';
const app = express();
const db = mongoose.connection;

export const getData = app.get('/', async (req, res) => {
    try {
        const products = await db.useDb('main').collection('products').listIndexes()

        res.send(products).statusCode(200)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})
    

