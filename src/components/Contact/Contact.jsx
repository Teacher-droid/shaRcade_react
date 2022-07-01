import React from 'react'
import { Container, Form, } from 'react-bootstrap'
import { FaRegEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import LocationMark from '../../assets/images/icons/location.png'
import MailCard from '../../assets/images/icons/mail.png'
import './Contact.css';


const Contact = () => {
    return (


        <section className="row justify-content-between mb-5 p-3 m-3 retro">

            <Container>
                <div className="spacer">
                    <div className="row justify-content-center">
                        <div className="text-center">
                            <h1 className="title font-bold">Contact Us</h1>
                            <h6 className="subtitle">Get in touch with us using the form below</h6>
                        </div>
                    </div>
                </div>
            </Container>

            <Container>
                <div className="row">
                    <div className="col-md-7">
                        <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10491.793210016685!2d2.3861548!3d48.8973224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42dbe434c3e93484!2sThe%20Hacking%20Project!5e0!3m2!1sfr!2sfr!4v1648162323383!5m2!1sfr!2sfr' width='100%' height='450' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>" }} />
                    </div>
                    <div className="col-md-5">

                        <Form action="" method="">
                            <div>
                                <div className="form-group mb-2">
                                    <label className="form-label">First-name: </label>
                                    <input className="form-control" name="first_name" id="first_name" type="text" placeholder="Insert a valid first-name" />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Last-name: </label>
                                    <input className="form-control" name="last_name" id="last_name" type="text" placeholder="Insert a valid last-name" />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">E-mail: </label>
                                    <input className="form-control" name="email" id="email" type="text" placeholder="Insert a valid e-mail" />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Subject: </label>
                                    <input className="form-control" name="subject" id="subject" type="text" placeholder="Add subject here" />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Your message: </label>
                                    <input className="form-control" name="message" id="message" type="text" placeholder="Type your message" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-outline-secondary solid">Send</button>
                                    <button type="reset" className="btn btn-outline-primary solid">Cancel</button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </Container >

            <Container className="bg-contact">
                <div className="spacer">
                    <div className="align-content-between p-4">
                        <h2 className="text-center">ShaRcade</h2>
                    </div>
                    <Container>
                        <div className="row text-center m-2 mb-4">
                            <div className="col-sm-12 col-lg-6 p-1">
                                <p><a href=""><img className="contact-icons" alt='location' src={LocationMark} /></a></p>
                                <span className="lead">83, Boulevard Macdonald 75019 - Paris</span>
                            </div>
                            <div className="col-sm-12 col-lg-6 p-1">
                                <p><a href=""><img className="contact-icons" alt='mail' src={MailCard} /></a></p>
                                <p><a href="mailto:bonjour@thehackingproject.org?subject=Prise de contact via le site web ShaRcade&body=Nous serons ravis de répondre à toutes vos questions et réclamations dans les plus brefs délais !" className="lead">bonjour@thehackingproject.org</a></p>
                            </div>
                        </div>
                    </Container>
                </div>
            </Container>
        </section >

    )
}

export default Contact