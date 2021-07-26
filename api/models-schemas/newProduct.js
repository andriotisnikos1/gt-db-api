import mongoose from 'mongoose'

const newProduct = new mongoose.Schema({
    name: String,
    id: Number,
    availability: {
        type: Number,
        default: 0
    }
});

const newProductSchema = mongoose.model('newProductSchema', newProduct);
export default newProductSchema;