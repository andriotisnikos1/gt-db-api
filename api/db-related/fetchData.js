import express from 'express';
import mongoose from 'mongoose';
import newProductSchema from '../models-schemas/newProduct.js';
const app = express();
const db = mongoose.connection;
export const dtb = db.useDb('main').collection('products')

export const getData = app.get('/:_id', async(req, res) => {

    const id = Number(req.params._id)
    try {
            const products = await db.useDb('main').collection('products').findOne({_id: id})
            res.send(products).status(200)
        

    } catch (err) {
        console.log(err)
        res.send(`document with id of ${id} does not exist`).status(404)
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
        res.send(`document with id of ${id} does not exist`).status(404)
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
        res.send(`document with id of ${id} does not exist`).status(404)
    }
})


export const newItem = app.post('/:_id/:quantity/:name', async(req,res) => {
    const id = Number(req.params._id)
    const quantity = Number(req.params.quantity);
    const name = req.params.name;

    try {
        await dtb.insertOne({_id: id, quantity: quantity, name: name, fetch: "true"})
        res.send('success')
    } catch (err) {
        console.log(err);
        res.send(`item with id of ${id} already exists`).status(403)
    }


})

export const getAll = app.get('/all/true', async(req, res) => {

    try {
        const products = await dtb.find({}).toArray().catch(console.error())

    res.send(products)
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }


})

export const deleteItem = app.delete('/:_id', async(req, res) => {

    const id = Number(req.params._id)
    try {
        await dtb.deleteOne({_id: id})
        res.send('success').status(200)
    } catch (err) {
        console.log(err);
        res.send(`couldnt delete file with id of ${id}` ).status(500)
    }

})