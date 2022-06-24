import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer-container">
            <section className="footer-subscription">
            </section>
            <div class="footer-links">
                <div className="footer-link-wrapper">
                    <div class="footer-link-items">
                        <h2>Games</h2>
                        <Link to="/">Submit Game</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Studio</Link>
                        <Link to="/">Pro Gamer</Link>
                    </div>
                    <div class="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div class="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Locations</Link>
                        <Link to="/">Sponsorships</Link>
                        <a href="https://github.com/LoisKOUNINEF">git</a>
                        <a href="https://github.com/GibbZ-78">git</a>
                        <a href="https://github.com/Teacher-droid">git</a>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div class="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
            <section class="social-media">
                <div class="social-media-wrap">
                    <div class="footer-logo ww">
                        Call to action ??
                    </div>
                    <small class="website-rights">
                        copyright   &copy;  2022 Damian, Jean-Baptiste & Loïs for THP Developer W'22
                    </small>
                    <div class="social-icons">
                        <Link
                            class="social-icon-link facebook"
                            to="/"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <i class="fab fa-facebook-f" />
                        </Link>
                        <Link
                            class="social-icon-link instagram"
                            to="/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i class="fab fa-instagram" />
                        </Link>
                        <Link
                            class="social-icon-link youtube"
                            to="/"
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <i class="fab fa-youtube" />
                        </Link>
                        <Link
                            class="social-icon-link twitter"
                            to="/"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <i class="fab fa-twitter" />
                        </Link>
                        <Link
                            class="social-icon-link twitter"
                            to="/"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <i class="fab fa-linkedin" />
                        </Link>
                    </div>
                </div>
            </section>
        </footer >
    )
}

export default Footer