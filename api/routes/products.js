import express from 'express';
import mongoose from 'mongoose';
import {} from '../controllers/posts.js'
const router = express.Router();

export const products = router.get('/', (req, res) => {
    res.status(200)
    .send('Success')
})

router.get('/gree', (req, res) => {
    res.status(200)
    .send('Gree Success')
})



export default router;