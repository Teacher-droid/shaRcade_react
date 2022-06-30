import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import LogoTopDelireMegaGroove from '../../assets/images/logo/logo.png'
import './Header.css';

const Header = () => {

    const adminDropDown = (
            <NavDropdown title="Account" id="account-nav-dropdown">
                <NavDropdown.Item href="/admindashboard">Admin Dashboard</NavDropdown.Item>
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>);

    const editorDropDown = (
            <NavDropdown title="Account" id="account-nav-dropdown">
                <NavDropdown.Item href="/editordashboard">Editor Profile</NavDropdown.Item>
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown> );

    const playerDropDown = (
            <NavDropdown title="Account" id="account-nav-dropdown">
                <NavDropdown.Item href="/playerdashboard">Player Profile</NavDropdown.Item>
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown> );

    const connexionDropDown = ( 
            <NavDropdown title="Connection" id="connection-nav-dropdown">
                <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
                <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
            </NavDropdown> );

    const [myUser, setMyUser] = useState();
    const [selectedDropDown, setSelectedDropDown] = useState(connexionDropDown);

    useEffect(() => {
        
        if (Cookies.get('fulluser')) {
            setMyUser(JSON.parse(Cookies.get("fulluser")));
        }

    }, []);

    useEffect (() => {
        
        if (myUser) {
            switch (myUser.role) {
                case "admin":
                    setSelectedDropDown(adminDropDown);
                    break;
                case "editor":
                    setSelectedDropDown(editorDropDown);
                    break;
                default:
                    setSelectedDropDown(playerDropDown);
                    break;
            }
        } else {
            setSelectedDropDown(connexionDropDown);
        }

    }, [myUser]);
    
    return (
        <header className='header-container retro'>
            <Navbar>
                <Container>
                    <Navbar.Brand href="/">
                        <img className="header-logo" alt='ShaRcade logo' src={LogoTopDelireMegaGroove} />
                    </Navbar.Brand>
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
                            <Button className="search-btn" variant="outline-success">Search</Button>
                        </Form>
                        <Nav>
                            {selectedDropDown}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
