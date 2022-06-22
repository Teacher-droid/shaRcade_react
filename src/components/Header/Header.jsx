import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import LogoTopDelireMegaGroove from '../../assets/images/logo/logo.png'

const Header = () => {
    return (
        <header>
            <Navbar>
                <Container>
                    <Navbar.Brand href="/"> <img className="logo" alt='logo' src={LogoTopDelireMegaGroove} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/games">Games</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav>
                            <NavDropdown title="Connection" id="connection-nav-dropdown">
                                <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
                                <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Account" id="account-nav-dropdown">
                                <NavDropdown.Item href="/user">My profile</NavDropdown.Item>
                                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header