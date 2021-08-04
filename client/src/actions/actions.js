import * as api from '../client-api/api'
import { CREATE, UPDATE, DELETE, FETCH_ALL } from '../constants/actionTypes'
import { useDispatch } from 'react-redux'
const dispatch = useDispatch() 

export const fetchItems = (id) => async() => {

        try {
            const { data }  = await api.getItems(id)

            dispatch({type: FETCH_ALL, payload: data })
            console.log(data)
        } catch (error) {
            console.log(error)
        }


}

export const updateItems = async(id, quantity) => {
    try {
        await api.editItem(id, quantity)
        dispatch({type: UPDATE})
        console.log('success');
    } catch (err) {
        console.log(err);
    }
}