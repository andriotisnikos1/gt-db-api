import axios from 'axios'
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.CONNECTION_URL

export const getItems = (id) => {axios.get(`${url}/${id}`)
    .then(err => console.log(err));
}