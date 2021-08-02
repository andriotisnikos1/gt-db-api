import express from 'express';
import mongoose from 'mongoose';
import newProductSchema from '../models-schemas/newProduct.js';
import { newId } from './custom-scripts.js';
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
    
export const updateDataAdd = app.patch('/:_id/:quantity/true', async(req, res) => {

    const id = Number(req.params._id)
    const quantity = Number(req.params.quantity)

    try {
            const session = await db.startSession()
            await session.withTransaction(async() => {
                let product = await db.useDb('main').collection('products').findOneAndUpdate({_id: id},{$inc:{quantity: +quantity}})
            product.quantity = quantity;
               return res.send('success').status(200)
            })
        
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
})

export const updateDataRemove = app.patch('/:_id/:quantity/false', async(req, res) => {

    const id = Number(req.params._id)
    const quantity = Number(req.params.quantity)

    try {
            const session = await db.startSession()
            await session.withTransaction(async() => {
                let product = await db.useDb('main').collection('products').findOneAndUpdate({_id: id},{$inc:{quantity: -quantity}})
            product.quantity = quantity;
               return res.send('success').status(200)
            })
        
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
})

export const newItem = () => app.post('/:quantity/:name', async(req, res) => {
    const quantity = Number(req.params.quantity)
    const name = req.params.name;

    try {
        
            let product = await db.useDb('main').collection('products').insert({
                _id: 0,
                name: "le",
                quantity: 5
            },)
            res.send('success').status(200)
            
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
})