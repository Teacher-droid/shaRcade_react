import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { Nav, NavDropdown} from 'react-bootstrap'
import LogoTopDelireMegaGroove from '../../assets/images/logo/logo.png'
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-container retro">
            <div className="footer-links">
                <div className="footer-logo-container">
                    <img className="footer-logo" alt='ShaRcade logo' src={LogoTopDelireMegaGroove} />
                </div>
                <div className="footer-copyrights-container">
                    <p className="website-rights">&copy;  2022 Damian, Jean-Baptiste &amp; Lois</p>
                    <p className="website-rights">Made with love and sweat for THP Developer W'22</p>
                </div>
                <div className="footer-social-media-container">
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
            </div>
            <div className="footer-dropdowns">
                <Nav className="footer-dropdowns-nav">
                    <NavDropdown title="Games" drop="up" id="connection-nav-dropdown">
                        <NavDropdown.Item href="/signup">Submit Game</NavDropdown.Item>
                        <NavDropdown.Item href="/signup">Ambassadors</NavDropdown.Item>
                        <NavDropdown.Item href="/signup">Game Studios</NavDropdown.Item>
                        <NavDropdown.Item href="/signup">Pro Gamers</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="About Us" drop="up" id="account-nav-dropdown">
                        <NavDropdown.Item href="/about">How it works</NavDropdown.Item>
                        <NavDropdown.Item href="/about">Testimonials</NavDropdown.Item>
                        <NavDropdown.Item href="/about">Careers</NavDropdown.Item>
                        <NavDropdown.Item href="/about">Investors</NavDropdown.Item>
                        <NavDropdown.Item href="/about">Terms of Service</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Contact Us" drop="up" id="contact-nav-dropdown">
                        <NavDropdown.Item href="/https://github.com/LoisKOUNINEF">Lois' Github</NavDropdown.Item>
                        <NavDropdown.Item href="/https://github.com/Teacher-droid">Damian's Github</NavDropdown.Item>
                        <NavDropdown.Item href="/https://github.com/GibbZ-78t">JB's Github</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </div>
        </footer >
    )
}

export default Footer;