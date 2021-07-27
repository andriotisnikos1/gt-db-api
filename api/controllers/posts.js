import express from "express";
import mongoose from 'mongoose';
import 'dotenv';
const app = express();

export const getItem = (req, res) => {
    res.send('Get item success')
}