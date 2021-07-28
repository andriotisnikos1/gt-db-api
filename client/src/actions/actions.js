import * as api from '../client-api/api'

const fetchItems = () => async(dispatch) => {

        try {
            const { data } = await api.getItems()

            dispatch({type: 'FETCH_ALL', payload: data })
        } catch (error) {
            console.log(error)
        }


}

export default fetchItems;