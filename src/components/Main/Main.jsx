import React from 'react'
import Hero from '../Hero/Hero'
import GamesIndex from '../GamesIndex/GamesIndex'
import './Main.css'

const Main = () => {
    return (
        <main className='main-container'>
            <Hero/>
            <GamesIndex/>
        </main>
    )
}

export default Main