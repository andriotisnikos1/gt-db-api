import express from "express";
import mongoose from 'mongoose';
import dotenv from'dotenv';
import { products } from './routes/products.js';
import './db-related/connection.js'
dotenv.config()
const app = express();
app.listen(process.env.PORT)

app.use('/', products)

app.get('/', (req, res) => {
    console.log('app is running')
})