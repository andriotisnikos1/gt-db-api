import express from 'express';
import { getData } from '../db-related/fetchData.js'
const router = express.Router();

router.get('/:id', getData)


export default router;