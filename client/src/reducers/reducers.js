<<<<<<< HEAD


const reducers =  (items = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
           return action;
        case 'CREATE':
            return action;
=======
const reducers =  (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
           return state; 
        case 'CREATE':
            return state;
>>>>>>> parent of 8334742 (z)
        case 'UPDATE':
            return state;
        default:
            return state;
    }
}

export default reducers;