import React from 'react'
import { Container, Form, } from 'react-bootstrap'
import { FaGithubSquare, FaLinkedin, FaAngleDoubleUp } from "react-icons/fa";
import './About.css';


const About = () => {
    return (
        <div className="retro">
            <Container>
                <div className="container p-5">
                    <div className="row">
                        <div className="col-md-5 p-4">
                            <img className="about-img" alt='about' src="https://i.imgur.com/HyFFQbG.png" />
                        </div>
                        <div className="col-md-7 pl-3">
                            <div className="card-body p-5">
                                <h1 className="title">What is <span className="text-secondary"><b>ShaRcade</b></span>?</h1>
                                <p className="card-text">THE social platform to centralize video games,<br />casual and  party games scores !
                                    Our goal is to offer a friendly platform for players to exchange their best scores and a space for programmers and small publishers to showcase their video-game achievements.
                                    <br />To do so, publishers/coders can register and record their games; in exchange, they are provided with an API key to allow each of their creations to connect to our API and record the scores of players who wish to do so, whether they are members of ShaRcade or not.
                                    <br />On their side, registered players can manage, share and comment on their hi-score, exchange about other players' hi-scores and, thus, meet other enthusiasts of the same games as them!</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-7 pl-3">
                            <div className="card-body p-3">
                                <h1 className="title">How it's work</h1>
                                <p className="card-text">By signing in on ShaRcade you become a member of our community and get access to a huge amount of retro oriented games and indie made by other members and classified by category. Games can be edited by their owner to ensure  permanent update. Each member also has access to his personal DashBoard, which summarizes his created, favorite, followed and completed games.
                                    <br />Members can also review and suggest means of improvement.</p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img className="about-img" alt='how' src="https://i.imgur.com/oyhETZS.png" />

                        </div>
                    </div>
                </div>
            </Container >


            <div className="mt-2 team">
                <Container>
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center">
                            <h1 className="title">The Team</h1>
                        </div>
                    </div>
                    <br />
                    <div className="d-flex row justify-content-center">
                        <div className="col-md-3">
                            <div className="col-md-12">
                                <img className="team-img" alt='how' src="https://i.imgur.com/c4qay3D.jpg" />

                                <div className="">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a href="https://github.com/WilfriedPaillot">
                                                <FaGithubSquare />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="https://www.linkedin.com/in/wilfried-paillot/">
                                                <FaLinkedin />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="pt-3">
                                    <h5 className="title font-medium">Lois Kouninef</h5>
                                    <h6 className="subtitle"><b>The Codinator</b></h6>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, dolorum quam? Optio quae id, sunt odit obcaecati earum, explicabo laudantium aspernatur voluptatum ipsa itaque sequi iure magnam consequuntur! Nesciunt, excepturi, dolor sit amet consectetur adipisicing elit Nisi, dolorum quam.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 m-b-30">
                            <div className="row">
                                <div className="col-md-12">
                                    <img className="team-img" alt='how' src="https://i.imgur.com/QiCihRE.jpg" />

                                    <div className="">
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <a href="https://github.com/YAROS31">
                                                    <FaGithubSquare />
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="https://www.linkedin.com/in/yassinerochd/">
                                                    <FaLinkedin />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-12">

                                    <div className="pt-3">
                                        <h5 className="title font-medium">Jean-Baptiste Vidal</h5>
                                        <h6 className="subtitle"><b>The Pacifier</b></h6>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, dolorum quam? Optio quae id, sunt odit obcaecati earum, explicabo laudantium aspernatur voluptatum ipsa itaque sequi iure magnam consequuntur! Nesciunt, excepturi, dolor sit amet consectetur adipisicing elit Nisi, dolorum quam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3  m-b-30">
                            <div className="row no-gutters">
                                <div className="col-md-12 pro-pic">
                                    <img className="team-img" alt='how' src="https://i.imgur.com/wiaNqIy.jpg" />

                                    <div className="">
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <a href="https://github.com/Vix00">
                                                    <FaGithubSquare />
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="https://www.linkedin.com/in/victoria-fely-050587105/">
                                                    <FaLinkedin />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-12">

                                    <div className="pt-3">
                                        <h5 className="title font-medium">Damian Pierre-Louis</h5>
                                        <h6 className="subtitle"><b>The IT Eater</b></h6>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, dolorum quam? Optio quae id, sunt odit obcaecati earum, explicabo laudantium aspernatur voluptatum ipsa itaque sequi iure magnam consequuntur! Nesciunt, excepturi, dolor sit amet consectetur adipisicing elit Nisi, dolorum quam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3  m-b-30">
                            <div className="row no-gutters">
                                <div className="col-md-12 pro-pic">
                                    <img className="team-img" alt='how' src="https://i.imgur.com/lFjcbGc.png" />

                                    <div className="">
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <a href="https://github.com/GibbZ-78">
                                                    <FaGithubSquare />
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="https://www.linkedin.com/in/jeanbaptistevidal/">
                                                    <FaLinkedin />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="pt-3">
                                        <h5 className="title font-medium">Zaratan</h5>
                                        <h6 className="subtitle"><b>The Zaratan</b></h6>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, dolorum quam? Optio quae id, sunt odit obcaecati earum, explicabo laudantium aspernatur voluptatum ipsa itaque sequi iure magnam consequuntur! Nesciunt, excepturi, dolor sit amet consectetur adipisicing elit Nisi, dolorum quam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="col-3 mx-5">
                <a href="#" data-bs-toggle="tooltip" title="Some tooltip text!">
                    Top <FaAngleDoubleUp />
                </a>
                <div className="tooltip" role="tooltip">
                    <div className="tooltip-arrow">
                    </div>
                    <div className="tooltip-inner">
                        Eyes up!
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About