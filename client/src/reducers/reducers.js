import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes.js'
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
           return null
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
