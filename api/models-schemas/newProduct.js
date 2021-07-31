import mongoose from 'mongoose'

const newProduct = new mongoose.Schema({
    name: String,
    id: String,
    availability: {
        type: Number,
        default: 0
    }
});

var newProductSchema = mongoose.model('newProductSchema', newProduct);
export default newProductSchema;