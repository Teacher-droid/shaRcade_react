import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
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
                    <div className="footer-link-items">
                        <h4>Games</h4>
                        <Link to="/">Submit Game</Link>

                    </div>
                    <div className="footer-link-items">
                        <h4>About Us</h4>
                        <Link to="/">About</Link>
                    </div>
                    <div className="footer-link-items">
                        <h4>Contact Us</h4>
                        <Link to="https://github.com/LoisKOUNINEF">Loïs' Github</Link>
                        <Link to="https://github.com/Teacher-droid">Damian's Github</Link>
                        <Link to="https://github.com/GibbZ-78">JB's Github</Link>
                    </div>

                </div>
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
        </footer >
    )
}

export default Footer;
