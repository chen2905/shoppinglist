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
/*
A store is basically just a plain JavaScript object that allows components to share state. 
In a way, we can think of a store as a database. On the most fundamental level, both constructs 
allow us to store data in some form or another.
It's simple to get access to the store inside a React component – no need to pass the store as a prop or import it,
 just use the connect function from React Redux, and supply a mapStateToProps function that pulls out the data you need. 
 Then, inside the component, you can pass that data to a function that needs it.
 */