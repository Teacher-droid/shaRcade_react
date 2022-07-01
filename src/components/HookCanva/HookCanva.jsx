import React from 'react'
import PlayerBio from '../../assets/images/player.jpg'
import EditorBio from '../../assets/images/editor1.jpg'
import './HookCanva.css';

const HookCanva = () => {
    return (
        <section className="hook-canva-container">
            <div className="m-auto w-900 text-center padding-top">
                <h2>Hello I'm HookCanva</h2>
                <p>My goal is to lead small humans who got astray and didn't sign-up yet.</p>
                <p>Now that you are back to the straight path you know what you've to do...</p>
                <p>Sign-up for a ShaRcade&reg; membership!</p>
            </div>
            <div className="d-flex">
                <div className="side1">
                    <h3>What can I expect as a player?</h3>
                    <img className="padding-right" alt="prototype" src={PlayerBio} />
                    <p>Easily search new games by content, genres, ranks, etc.</p>
                    <p>Give marks and in-writing evaluations to promote your favorite games and editors.</p>
                    <p>Share your hi-score with your friends and... The world!</p>
                    <p>Easily connect with a community passionnate about video games.</p>
                </div>
                <div className="side2">
                    <h3>What can a coder/editor benefits from?</h3>
                    <img className="padding-right" alt="prototype" src={EditorBio} />
                    <p>Seamlessly register your game(s), making them visible and playable by the whole ShaRcade&reg; community!</p>
                    <p>Effortlessly promote your games, their upgrades and spin-off.</p>
                    <p>Build a long-terme solid community and after-sale relations with your games' fans</p>
                </div>
            </div>
        </section>
    )
}

export default HookCanva