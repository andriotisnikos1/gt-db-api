import express from "express";
import mongoose from 'mongoose';
import dotenv from'dotenv';
import {} from './routes/routes.js';
import './db-related/connection.js'
dotenv.config()
const app = express();
app.listen(process.env.PORT)


app.get('/', (req, res) => {
    console.log('app is running')
})