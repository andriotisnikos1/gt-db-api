import * as api from '../client-api/api'
export const fetchItem = (id) => async() => {
    


        try {
            const { data }  = await api.getItem(id)
            console.log(data)
        } catch (error) {
            console.log(error)
        }


}


export const fetchAll = async() => {
    const {data} = await api.getAll()
    .catch(console.error())
    console.log(data);
}

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
