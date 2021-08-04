import * as api from '../client-api/api'
import { CREATE, UPDATE, DELETE, FETCH_ALL, FETCH } from '../constants/actionTypes'
import { useDispatch } from 'react-redux'
const dispatch = useDispatch() 

export const fetchItems = (id) => async() => {

        try {
            const { data }  = await api.getItem(id)

            dispatch({type: FETCH, payload: data })
            console.log(data)
        } catch (error) {
            console.log(error)
        }


}


export const fetchAll = () => {
    const {data} = await api.getAll()
    .catch(console.error())
    dispatch({type: FETCH_ALL, payload: data})
}

export const updateQuantityRemove = async(id, quantity) => {
    await api.updateQuantityRemove(id, quantity)
    .catch(console.error())
    dispatch({type: UPDATE})
    location.reload()
}


export const updateQuantityAdd = async(id, quantity) => {
    await api.updateQuantityAdd(id, quantity)
    .catch(console.error())
    dispatch({type: UPDATE})
    location.reload()
}

//TODO: REST OF FUNCTIONS

