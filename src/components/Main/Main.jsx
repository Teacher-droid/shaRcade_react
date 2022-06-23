import React from 'react'
import Hero from './components/Hero/Hero';
import GamesIndex from './components/GamesIndex/GamesIndex';
import HookCanva from './components/HookCanva/HookCanva';
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