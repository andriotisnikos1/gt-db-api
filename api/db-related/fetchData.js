import express from 'express';
import mongoose from 'mongoose';
import newProductSchema from '../models-schemas/newProduct.js';
const router = express.Router();
const test = 5;
export const getData = async (req, res) => {
    try {
        const products = await newProductSchema.find()
    } catch (err) {
        console.log('db error')
    }
}
