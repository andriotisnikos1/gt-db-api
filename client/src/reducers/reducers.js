const reducers =  (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
           return state; 
        case 'CREATE':
            return state;
        case 'UPDATE':
            return state;
        default:
            return state;
    }
}

export default reducers;