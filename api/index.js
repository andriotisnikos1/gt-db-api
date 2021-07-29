import express from "express";
import mongoose from 'mongoose';
import dotenv from'dotenv';
import routes from './routes/routes.js';
import './db-related/connection.js'
import cors from 'cors'
dotenv.config()
const app = express();
app.listen(process.env.PORT)
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send(console.log('app is running'))
})