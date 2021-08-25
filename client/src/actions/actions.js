import * as api from '../client-api/api'
import { useDispatch } from 'react-redux'
import * as cn from '../constants/actionTypes'
export const fetchItem = (id) => async(dispatch) => {
        try {
            const { data }  = await api.getItem(id)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
}


export const getAll = () => async (dispatch) => {
    try {
      const { data } = await api.getAll;
  
      dispatch({ type: cn.FETCH_ALL , payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const updateQuantityRemove = async(id, quantity) => {
    await api.updateQuantityRemove(id, quantity)
    .catch(console.error())
    
}


export const updateQuantityAdd = async(id, quantity) => {
    await api.updateQuantityAdd(id, quantity)
    .catch(console.error())
    
}

export const createItem = async(id, quantity, name) => {    
    await api.createItem(id, quantity, name)
    .catch(console.error())
    

} 
export const deleteItem = async(id) => {    
    await api.deleteItem(id)
    .catch(console.error())

} 
