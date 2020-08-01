//reducer is the place where the logic sits to react to the action from the dispather
//in the reducer, we need check the aciton's type:  get/add/update/delete
import uuid from 'react-uuid'
import {GET_ITEMS, ADD_ITEM,DELETE_ITEM} from '../actions/types'

const initialState ={
    items:[
        {id:uuid(),name:'eggs'},
        {id:uuid(),name:'milks'},
        {id:uuid(),name:'steak'},
        {id:uuid(),name:'watermelon'}
    ]
} 

export default function (state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state // spread operator ... return all the objects stored in the states. in this case, will be the items 
            }
            default:
                return state
    }
}