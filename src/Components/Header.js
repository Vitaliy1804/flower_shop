import React, {Component} from 'react'
import { 
    Container, 
    FormControl, 
    Nav, 
    Navbar, 
    Button,
    Form 
} from 'react-bootstrap'
import logo from './logo192.png'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';
import { MDBIcon } from 'mdb-react-ui-kit';

export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
                <Container >
                    <Navbar.Brand href="/">
                        <img
                        src={logo}
                        height="30"
                        width="30"
                        className="d-inline-block align-top"
                        alt="Logo"
                        /> Flower shop
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                       
                        <Form inline>
                            <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                            />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                        <Nav className="ml-auto">
                            
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contacts">Contacts</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link> 
                        
                            
                         
                        
                        
                         <MDBIcon className='d-none d-sm-block mr-5' icon='map-marker-alt' size='3x' />
                         <MDBIcon className='d-none d-sm-block mr-5' icon='user' size='3x' />
                         <MDBIcon className='ms-1' icon='shopping-cart' size='3x' />
                         </Nav>
                        
                        
                    </Navbar.Collapse>
                        
                    
                </Container>
            </Navbar>

            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/blog" component={Blog} />
                </Switch>
            </Router>
            </>
       )
    }
}