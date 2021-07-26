import express from "express";
import mongoose from 'mongoose';
import 'dotenv';
import router from '../routes/products.js';
const app = express();
const PORT = app.listen(process.env.PORT || 5000);


// Setup and connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser : true, useUnifiedTopology : true })
    .then(() => app.listen(PORT, () => console.log('Successful login to the db')))
    .catch((err) => console.log(err));
mongoose.set('useFindAndModify', false);
