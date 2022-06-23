import React, { useEffect, useState } from 'react'
import { API_URL } from '../../stores/api_url'
import GameCard from '../GameCard/GameCard'
import './GamesIndex.css'

const GamesIndex = () => {

    const [gameList, setGameList] = useState([]);

    // const [gameType, setGameType] = useState("")
    // const [gameTitle, setGameTitle] = useState("")
    // const [gameDescr, setGameDescr] = useState("")
    // const [gameFans, setGameFans] = useState("")
    // const [gameRatings, setGameRatings] = useState("")
    // const [gameImage, setGameImage] = useState("")

    useEffect(() => {
        fetch(API_URL + 'games', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((response) => {
            setGameList(response);
        })
        .catch((error) => console.log(error));
    }, [])

    return (
        <div>
        {gameList.map(game => <GameCard game={game} key={game.id}/>)}
        </div>
        )
}

export default GamesIndex
