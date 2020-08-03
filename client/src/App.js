import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ShoppingList from './components/ShoppingList'
import ItemModal from './components/ItemModal'
import {Container} from 'reactstrap'//{} enable you just import what the component(s) from components set
import { Provider} from 'react-redux'
import store from  './store'
class App extends Component   {

  render(){
    return (
      <Provider store={store}>
      <div className="App">
       <AppNavbar/>
       <Container>
       <ItemModal/>
       <ShoppingList/>
       </Container>
      </div>
      </Provider>
    )
  }

}

export default App;
