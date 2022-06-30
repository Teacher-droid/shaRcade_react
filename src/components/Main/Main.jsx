import React from 'react'
import Hero from '../Hero/Hero';
import Slider from '../Slider/Slider'
import GamesIndex from '../GamesIndex/GamesIndex';
import HookCanva from '../HookCanva/HookCanva';
import './Main.css';

const Main = () => {
    return (
        <main className='main-container'>
            <Hero />
            <Slider />
            <GamesIndex />
            <HookCanva />
        </main>
    )
}

export default Main
