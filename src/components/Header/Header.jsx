import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import LogoTopDelireMegaGroove from '../../assets/images/logo/logo.png'
import './Header.css';

const Header = () => {
    return (
        <header className="retro" >
            <Navbar>
                <Container>
                    <Navbar.Brand href="/"> <img className="logo" alt='logo' src={LogoTopDelireMegaGroove} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto light">
                            <Nav.Link href="/games"><p className="dg">Games</p></Nav.Link>
                            <Nav.Link href="/about"><p className="dg">About</p></Nav.Link>
                            <Nav.Link href="/contact"><p className="dg">Contact</p></Nav.Link>
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
                            <NavDropdown title="Connection" id="connection-nav-dropdown" className="retro">
                                <NavDropdown.Item href="/login"><p className="">Log In</p></NavDropdown.Item>
                                <NavDropdown.Item href="/signup"><p className="dg">Sign Up</p></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Account" id="account-nav-dropdown" className="retro" >
                                <NavDropdown.Item href="/user"><p className="dg">My profile</p></NavDropdown.Item>
                                <NavDropdown.Item href="/logout"><p className="dg">Logout</p></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header