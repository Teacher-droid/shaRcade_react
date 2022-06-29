import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import LogoTopDelireMegaGroove from '../../assets/images/logo/logo.png'
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-container retro">
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-logo-container">
                        <img className="footer-logo" alt='ShaRcade logo' src={LogoTopDelireMegaGroove} />
                    </div>
                    <section className="social-media">
                        <div className="social-media-wrap">

                            <small className="website-rights">
                                &copy;  2022 Damian, Jean-Baptiste & Lois for THP Developer W'22
                            </small>

                            <Link className="social-icon-link" to="/" target="_blank" aria-label="Facebook">
                                <FaFacebookSquare />
                            </Link>
                            <Link className="social-icon-link" to="/" target="_blank" aria-label="Instagram">
                                <FaInstagramSquare />
                            </Link>
                            <Link className="social-icon-link" to="/" target="_blank" aria-label="Youtube">
                                <FaYoutubeSquare />
                            </Link>
                            <Link className="social-icon-link" to="/" target="_blank" aria-label="Twitter">
                                <FaTwitterSquare />
                            </Link>
                            <Link className="social-icon-link" to="/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </Link>
                        </div>
                    </section>


                </div>
            </div>
            <Nav>
                <NavDropdown title="Games" id="connection-nav-dropdown">
                    <NavDropdown.Item href="/login">Submit Game</NavDropdown.Item>
                    <NavDropdown.Item href="/signup">Ambassadors</NavDropdown.Item>
                    <NavDropdown.Item href="/signup">Studios</NavDropdown.Item>
                    <NavDropdown.Item href="/signup">Pro Gamers</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="About Us" id="account-nav-dropdown">
                    <NavDropdown.Item href="/user">How it works</NavDropdown.Item>
                    <NavDropdown.Item href="/logout">Testimonials</NavDropdown.Item>
                    <NavDropdown.Item href="/logout">Careers</NavDropdown.Item>
                    <NavDropdown.Item href="/logout">Investors</NavDropdown.Item>
                    <NavDropdown.Item href="/logout">Terms of Service</NavDropdown.Item>

                </NavDropdown>
                <NavDropdown title="Contact Us" id="account-nav-dropdown">
                    <NavDropdown.Item href="/https://github.com/LoisKOUNINEF">Lois' Github</NavDropdown.Item>
                    <NavDropdown.Item href="/https://github.com/Teacher-droid">Damian's Github</NavDropdown.Item>
                    <NavDropdown.Item href="/https://github.com/GibbZ-78t">JB's Github</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </footer >
    )
}

export default Footer;