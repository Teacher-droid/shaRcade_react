import React, { useEffect, useState } from 'react'
import { API_URL } from '../../stores/api_url'
import GameCard from '../GameCard/GameCard'
import './GamesIndex.css'

const GamesIndex = () => {

    const [gameList, setGameList] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);

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

    useEffect(() => {
        fetch(API_URL + 'favorites', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((response) => {
            setFavorites(response);
        })
        .catch((error) => console.log(error));
    }, [])

    useEffect(() => {
        fetch(API_URL + 'feedbacks', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((response) => {
            setFeedbacks(response);
        })
        .catch((error) => console.log(error));
    }, [])

    const gameCards = gameList.map(game => {
        let favoritesCount = 0;
        favorites.forEach(favorite => {
            if (favorite.game_id === game.id) {
                favoritesCount++
            }
        })
        let feedbacksCount = 0;
        let feedbacksRatings = 0;
        let averageRating = 0;
        feedbacks.forEach(feedback => {
            if(feedback.game_id === game.id) {
                feedbacksRatings += feedback.rating
                feedbacksCount++
            }
            if (feedbacksCount !== 0) {averageRating = Math.round(feedbacksRatings / feedbacksCount)};
        })
    return <GameCard game={game} fans={favoritesCount} feedbacks={averageRating} key={game.id}/>
})

    return (
        <div className="game-list">
        {gameCards}
        </div>
        )
}

export default GamesIndex
