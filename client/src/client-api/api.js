import axios from 'axios'
import dotenv from 'dotenv';
dotenv.config();


const url = process.env.CONNECTION_URL

export const getItem = async(i) => {
    const id = Number(i)
    try{
        await axios.get(`${url}/${id}`)
    } catch(err) {
        console.log(err);
    }
    
}

export const editItem = async(i, q) => {
    const quantity = Number(q)
    const id = Number(i)
    try {
        await axios.post(`${url}/${id}/${quantity}`)
    } catch (err) {
        console.log(err);
    }
}

export const getAll = async() => {
    try {
        await axios.get(`${url}/all/true`)
    } catch (error) {
        console.log(error);
    }
}

export const updateQuantityAdd = async(i, q) => {
    const quantity = Number(q)
    const id = Number(i)
    try {
        await axios.patch(`${url}/${id}/${quantity}/true`)
    } catch (error) {
        console.log(error);
    }
}

export const updateQuantityRemove = async(i, q) => {
    const quantity = Number(q)
    const id = Number(i)
    try {
        await axios.patch(`${url}/${id}/${quantity}/false`)
    } catch (error) {
        console.log(error);
    }
}

export const createItem = async(i, q, nam) => {
    const id = Number(i)
    const name = String(nam)
    const quantity = Number(q)
    try {
        await axios.post(`${url}/${id}/${quantity}/${name}`)
    } catch (error) {
        console.log(error);
    }
}

export const deleteItem = async(i) => {
    const id = Number(i)
    await axios.delete(`${url}/${id}`)
}