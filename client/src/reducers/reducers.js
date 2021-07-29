import { CREATE, UPDATE, DELETE, FETCH_ALL } from '../constants/actionTypes'

const reducers =  (items = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
           return action.payload 
        case CREATE:
            return
        case 'UPDATE':
            return 
        default:
            return 
    }
}

export default reducers;