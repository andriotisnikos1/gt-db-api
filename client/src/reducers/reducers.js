import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes.js'
const reducers = (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
           return action.payload; 
        case CREATE:
            return state;
        case UPDATE:
            return state;
        case DELETE:
            return state;
        default:
            return state;
    }
}

export default reducers