import React from 'react'
import './Hero.css';

const Hero = () => {
    return (
        <section className='hero-container retro'>
            <h1 className="App">Just shaRcade it!</h1>
            <p className="App">For now, only <a href="https://loiskouninef.github.io/Snake_JSVanilla/"><strong>snaKouninef</strong></a> is playable and linked to shaRcade. Try it out !</p>
            <p className="App"><small><a href="https://loiskouninef.github.io/Tetris_React">Tetrois</a> is playable too, not shaRcade ready though.</small></p>
        </section>
    )
}

export default Hero
