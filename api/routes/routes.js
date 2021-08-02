import express from 'express';
import { getData, updateDataAdd, updateDataRemove, newItem} from '../db-related/fetchData.js'
const router = express.Router();

router.get('/:id', getData)
router.patch('/:id/:quantity/true', updateDataAdd)
router.patch('/:_id/:quantity/false', updateDataRemove)
router.post('/:quantity/:name', newItem)


export default router;