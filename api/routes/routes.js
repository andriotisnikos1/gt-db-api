import express from 'express';
import { getData, updateDataAdd, updateDataRemove, getAll, newItem, deleteItem} from '../db-related/fetchData.js'
const router = express.Router();

router.get('/:id', getData)
router.patch('/:id/:quantity/true', updateDataAdd)
router.patch('/:_id/:quantity/false', updateDataRemove)
router.post('/:_id/:quantity/:name', newItem)
router.get('/all/true', getAll)
router.delete('/:_id', deleteItem)




export default router;