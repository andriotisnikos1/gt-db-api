import express from "express";
import mongoose from 'mongoose';
import 'dotenv';
import  dotenv from 'dotenv';
import router from '../routes/routes.js';
dotenv.config()
const app = express();


// Setup and connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser : true, useUnifiedTopology : true })
    .then(() => console.log('Successful login to the db'))
    .catch((err) => console.log(err));
mongoose.set('useFindAndModify', false);
