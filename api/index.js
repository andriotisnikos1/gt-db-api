import express from "express";
import mongoose from 'mongoose';
import 'dotenv';
import products from './routes/products.js';
import './db-related/connection.js'
const app = express();
const PORT = app.listen(process.env.PORT || 5001);

app.use('/', products)

app.get('/', (req, res) => {
    console.log('app is running')
})