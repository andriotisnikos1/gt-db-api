import express from 'express';
import { getData, updateDataAdd, updateDataRemove, dtb, newItem} from '../db-related/fetchData.js'
const router = express.Router();

router.get('/:id', getData)
router.patch('/:id/:quantity/true', updateDataAdd)
router.patch('/:_id/:quantity/false', updateDataRemove)
router.post('/:_id/:quantity/:name', newItem)




export default router;