import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
const Header = () => {
    return (
        <Navbar bg="dark" expand="lg" variant='dark' className='navbar' stickey='top'>
            <LinkContainer to="/">
                <Navbar.Brand>Furtados</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="me-auto">
                    <LinkContainer to="/products">
                        <Nav.Link>Products</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/cart">
                        <Nav.Link >Cart</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="dark">Search</Button>
                </Form>
            </Navbar.Collapse>
            <Navbar.Collapse className='justify-content-end'>
                <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                </LinkContainer>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header