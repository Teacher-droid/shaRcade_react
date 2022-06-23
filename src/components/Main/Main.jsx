import React from 'react'
import Hero from '../Hero/Hero';
import GamesIndex from '../GamesIndex/GamesIndex';
import HookCanva from '../HookCanva/HookCanva';
import './Main.css';

const Main = () => {
    return (
        <main>
            <Hero />
            <GamesIndex />
            <HookCanva />
        </main>
    )
}

export default Main