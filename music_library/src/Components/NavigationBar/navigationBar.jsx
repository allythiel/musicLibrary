import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';


function NavBar(props) {
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Music Library</Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-1" /> 
            <Button variant="outline-primary">Go!</Button>
            </Form>
        </Navbar>
        </>
    )};

export default NavBar;

