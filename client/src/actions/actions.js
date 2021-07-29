import * as api from '../client-api/api'
import { CREATE, UPDATE, DELETE, FETCH_ALL } from '..//constants/actionTypes'

const fetchItems = () => async(dispatch) => {

        try {
            const { data }  = await api.getItems()

            dispatch({type: FETCH_ALL, payload: data })
            console.log('success')
        } catch (error) {
            console.log(error)
        }


}

export default fetchItems;