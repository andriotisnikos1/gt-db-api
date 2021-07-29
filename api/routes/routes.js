import express from 'express';
import { getData } from '../db-related/fetchData.js'
const router = express.Router();

router.get('/', getData)


export default router;