import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { API_URL } from '../../stores/api_url'
import GameCard from '../GameCard/GameCard'
import './GamesIndex.css'

const GamesIndex = () => {

    const [gameList, setGameList] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const user = Cookies.get("fulluser") ? JSON.parse(Cookies.get("fulluser")) : "";

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
        let is_favorite = false;
        favorites.forEach(favorite => {
            if (favorite.game_id === game.id) {
                favoritesCount++
                if (favorite.user_id === user.id) {
                    is_favorite = true;
                }
            }
            return is_favorite
        })
        let feedbacksCount = 0;
        let feedbacksRatings = 0;
        let averageRating = 0;
        let userRating = 0;
        feedbacks.forEach(feedback => {
            if (feedback.game_id === game.id) {
                feedbacksRatings += feedback.rating
                feedbacksCount++
                if (feedback.user_id === user.id) {
                    userRating = feedback.rating;
                }
            }
            if (feedbacksCount !== 0) {averageRating = Math.round(feedbacksRatings / feedbacksCount)};
            return userRating;
        })

    return <GameCard game={game} fans={favoritesCount} feedbacks={averageRating} favorite={is_favorite} evaluation={userRating} key={game.id}/>
})

    return (
        <div className="game-list">
        {gameCards}
        </div>
        )
}

export default GamesIndex
