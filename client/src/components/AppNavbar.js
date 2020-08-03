import React,{ Component } from 'react'
import {
 Collapse,
 Navbar,
 NavbarToggler,
 NavbarBrand,
 Nav,
 NavItem,
 NavLink,
 Container   
} from 'reactstrap'


class AppNavbar extends Component{
   state ={
       isOpen:false
   }
    toggle =() =>{
        console.log("toggling")
        this.setState(
            {
                isOpen:!this.state.isOpen
            }
        )
    }
    
    render(){
        return(
            <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand hre="/">ShoppingList</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/chen2905">
                                    GitHub
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        )
       
    }

} 

export default AppNavbar