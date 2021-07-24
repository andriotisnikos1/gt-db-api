import express from "express";
import mongoose from 'mongoose';
const app = express();
app.listen(process.env.PORT || 5000);

app.get('/', (req, res) => {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser : true, useUnifiedTopology : true });
    res.send('App is running')
})