import express from "express";
import mongoose from 'mongoose';
import 'dotenv';
import router from './routes/routes.js';
const app = express();
const PORT = app.listen(process.env.PORT || 5000);


app.get('/', (req, res) => {
    console.log('app is running')
})