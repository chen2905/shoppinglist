//reducer is the place where the logic sits to react to the action from the dispather
//in the reducer, we need check the aciton's type:  get/add/update/delete
//import uuid from 'react-uuid'
import {GET_ITEMS, ADD_ITEM,DELETE_ITEM,ITEMS_LOADING} from '../actions/types'

const initialState ={
    items:[],
    loading:false// when getting data we set it up to true
} 

export default function (state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state, // spread operator ... return all the objects stored in the states. in this case, will be the items 
                items:action.payload,
                loading:false
            }
        case DELETE_ITEM:
                console.log(`inside reducer delete Item action`)
                return {
                    ...state, // spread operator ... return all the objects stored in the states. in this case, will be the items 
                    items:state.items
                    .filter(item=> item._id!==action.payload)
                }
        case ADD_ITEM:
                    console.log(`inside reducer add Item action`)
                    return {
                        ...state, // spread operator ... return all the objects stored in the states. in this case, will be the items 
                        items:[action.payload,...state.items]
                    }
        case  ITEMS_LOADING:
                        return {
                            ...state, // spread operator ... return all the objects stored in the states. in this case, will be the items 
                            loading:true
                        }
            default:
                return state
    }
}