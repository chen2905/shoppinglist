import {createStore, applyMiddleware, compose} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
 
const initialState ={}

const middleware = [thunk]

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
  ));

export default store
//this is a bit confuse, at this stage i don't really like redux!