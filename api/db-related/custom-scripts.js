import mongoose from 'mongoose';
export const newId = () => {
    const db = mongoose.connection;
    for (let newId = 1; newId> -1; newId++) {
        if (!db.useDb('main').collection('products').findOne({_id: newId})) {
            return newId
        } 
        
    }
}