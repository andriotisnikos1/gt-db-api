import axios from 'axios'
import dotenv from 'dotenv';
dotenv.config();


const url = process.env.CONNECTION_URL

export const getItems = (id) => {
    try{
        axios.get(`${url}/${id}`)
    } catch(err) {
        console.log(err);
    }
    
}

export const editItem = (id, quantity) => {
    try {
        axios.post(`${url}/${id}/${quantity}`)
    } catch (err) {
        console.log(err);
    }
}