import express from 'express';
import { getData, updateData} from '../db-related/fetchData.js'
const router = express.Router();

router.get('/:id', getData)
router.patch('/:id/:quantity', updateData)


export default router;