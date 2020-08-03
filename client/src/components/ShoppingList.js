import React, { Component} from 'react' 
/*React is an open-source JavaScript library for building user interfaces. It is maintained by Facebook 
and a community of individual developers and companies. React can be used as a base in the development 
of single-page or mobile applications. */
import {Container,ListGroup,ListGroupItem,Button} from 'reactstrap'
/*
What is reactstrap? It provides prebuilt Bootstrap 4 components that allow a great deal of flexibility 
and prebuilt validation. This allows us to quickly build beautiful forms that are guaranteed to impress 
and provide an intuitive user experience. */
import {CSSTransition,TransitionGroup} from 'react-transition-group'
/*
React Transition Group is not an animation library like React-Motion, it does not animate styles by itself.
 Instead it exposes transition stages, manages classes and group elements and manipulates the DOM in useful ways, 
 making the implementation of actual visual transitions much easier.
*/
import { connect } from 'react-redux'
/* 
Redux itself is a standalone library that can be used with any UI layer or framework, including React, Angular, 
Vue, Ember, and vanilla JS. Although Redux and React are commonly used together, they are independent of each other.

If you are using Redux with any kind of UI framework, you will normally use a "UI binding" library to tie Redux together 
with your UI framework, rather than directly interacting with the store from your UI code.

React Redux is the official Redux UI binding library for React. If you are using Redux and React together, 
you should also use React Redux to bind these two libraries.*/
import { getItems,deleteItem } from  '../actions/itemActions'
import PropTypes from 'prop-types'
class ShoppingList extends Component{
    componentDidMount() {
        /*componentDidMount() is a hook that gets invoked right after a React component has been mounted aka after the first render() lifecycle.
         class App extends React. Component { componentDidMount() { // Runs after the first render() lifecycle } render() { console. */
        this.props.getItems()//now getItems() is a property of shoppinglist component, it is getting items when the shoppinglist inital rendered
    }
    /*“Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another. 
    But the important part here is that data with props are being passed in a uni-directional flow. ( one way from parent to child)Oct 7, 2019 */
onDeleteClick =(id)=>{
    this.props.deleteItem(id)
    console.log(`deleting ${id}` )
}
render(){
    const {items}= this.props.item //this.props.item is mapped to state.item which defined below
    return(
        <Container>
       

        <ListGroup>
        <TransitionGroup className="shopping-list">
           {items.map(({_id,name})=>(
               <CSSTransition key={_id} timeout={500} classNames="fade">
                   <ListGroupItem>
                    <Button
                    className="remove-btn"
                    color="danger"
                    size ="sm"
                    onClick={this.onDeleteClick.bind(this,_id)}
                    >&times;</Button>
                   {name}
                   </ListGroupItem>
             </CSSTransition>
           )
           )}
        </TransitionGroup>
        </ListGroup>
         </Container>)
   /*
   The bind() method creates a new function that, when called, has its this keyword set to the provided value,
    with a given sequence of arguments preceding any provided when the new function is called.
   */
}

}
/*
PropTypes is a library that helps in minimizing this problem in React by checking the types passed in the props object 
against a specification we set beforehand and to raise a warning if the types passed don't match the types expected.
*/
ShoppingList.propTypes ={
    getItems: PropTypes.func.isRequired, //is a funciton
    item:PropTypes.object.isRequired
}
const mapStateToProps =(state)=>({
   item:state.item
})
export default connect(
    mapStateToProps,
   {getItems,deleteItem}
   ) (ShoppingList); 