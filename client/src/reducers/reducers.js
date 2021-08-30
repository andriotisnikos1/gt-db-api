import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes.js'
const reducers = (products = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
           return action.payload
        case CREATE:
            return products;
        case UPDATE:
            return products;
        case DELETE:
            return products;
        default:
            return products;
    }
}
export default reducers