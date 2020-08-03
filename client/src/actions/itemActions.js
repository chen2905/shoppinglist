
import {GET_ITEMS, ADD_ITEM,DELETE_ITEM,ITEMS_LOADING} from './types'
import axios from 'axios'


export const getItems = () => (dispatch) => {
    dispatch(setItemsLoading());
    axios
      .get('/api/items')//this where we query the server to return the data for front end
      .then(res =>
        dispatch({
          type: GET_ITEMS,
          payload: res.data
        })
      )
      
  };
  export const addItem = item =>(dispatch) =>{
      axios
      .post('/api/items',item)//post to server, add the data
      .then(res=>
        dispatch(//use dispatch to change client side state
            {
                type:ADD_ITEM,
                payload:res.data
            }
        )
        )
  
}

export const deleteItem = (id) => dispatch =>{
    axios
    .delete(`/api/items/${id}`)
    .then(res=>
        dispatch(
            {
                type:DELETE_ITEM,
                payload:id
            }
        )
        )
}

export const setItemsLoading = () =>{
    return {
        type: ITEMS_LOADING
}
}
