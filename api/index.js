import express from "express";
import mongoose from 'mongoose';
import 'dotenv';
import router from './routes/routes.js';
const app = express();
app.listen(process.env.PORT || 5000);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser : true, useUnifiedTopology : true });


app.get('/', (req, res) => {
    console.log('app is running')
})