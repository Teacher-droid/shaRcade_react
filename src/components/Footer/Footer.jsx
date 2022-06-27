import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import LogoTopDelireMegaGroove from '../../assets/images/logo/logo.png'
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Games</h2>
                        <Link to="/">Submit Game</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Studios</Link>
                        <Link to="/">Pro Gamers</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Locations</Link>
                        <Link to="/">Sponsorships</Link>
                        <Link to="https://github.com/LoisKOUNINEF">Loïs' Github</Link>
                        <Link to="https://github.com/Teacher-droid">Damian's Github</Link>
                        <Link to="https://github.com/GibbZ-78">JB's Github</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo-container">
                        <img className="footer-logo" alt='ShaRcade logo' src={LogoTopDelireMegaGroove} />
                    </div>
                    <small className="website-rights">
                        &copy;  2022 Damian, Jean-Baptiste & Loïs for THP Developer W'22
                    </small>
                    <div className="social-icons">
                        <Link className="social-icon-link" to="/" target="_blank" aria-label="Facebook">
                            <FaFacebookSquare/>
                        </Link>
                        <Link className="social-icon-link" to="/" target="_blank" aria-label="Instagram">
                            <FaInstagramSquare/>
                        </Link>
                        <Link className="social-icon-link" to="/" target="_blank" aria-label="Youtube">
                            <FaYoutubeSquare/>
                        </Link>
                        <Link className="social-icon-link" to="/" target="_blank" aria-label="Twitter">
                            <FaTwitterSquare />
                        </Link>
                        <Link className="social-icon-link" to="/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin/>
                        </Link>
                    </div>
                </div>
            </section>
        </footer >
    )
}

export default Footer;