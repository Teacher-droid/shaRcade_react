import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { API_URL } from '../../stores/api_url'
import GameCard from '../GameCard/GameCard'
import './GamesIndex.css'

const GamesIndex = () => {

    const [gameList, setGameList] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [gameTypesList, setGameTypesList] = useState([]);
    const [scoresList, setScoresList] = useState([]);

    const [gamesLoading, setGamesLoading] = useState(true);
    const [gameTypesLoading, setGameTypesLoading] = useState(true);
    const [scoresLoading, setScoresLoading] = useState(true);
    const [favoritesLoading, setFavoritesLoading] = useState(true);
    const [feedbacksLoading, setFeedbacksLoading] = useState(true);

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
            setGamesLoading(response.length <= 0);
        })
        .catch((error) => console.log(error));
    }, [gamesLoading]);

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
            setFavoritesLoading(response.length <= 0);
        })
        .catch((error) => console.log(error));
    }, [favoritesLoading]);

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
            setFeedbacksLoading(response.length <= 0);
        })
        .catch((error) => console.log(error));
    }, [feedbacksLoading]);

    useEffect(() => {
        fetch(`${API_URL}game_types`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        .then((response) => response.json())
        .then((response) => {
            setGameTypesList(response);
            setGameTypesLoading(response.length <= 0);
        })
        .catch((error) => console.log(error));
    },[gameTypesLoading]);

    useEffect(() => {
        fetch(`${API_URL}scores`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        .then((response) => response.json())
        .then((response) => {
            setScoresList(response);
            setScoresLoading(response.length <= 0);
        })
        .catch((error) => console.log(error));
    },[scoresLoading]);


    const gameCards = gameList.map(game => {

        let favoritesCount = 0;
        let isFavorite = false;
        favorites.map(favorite => {
            if (favorite.game_id === game.id) {
                favoritesCount++;
                if (favorite.user_id === user.id) {
                    isFavorite = true;
                }
            }
            return isFavorite;
        })

        let feedbacksCount = 0;
        let feedbacksRatings = 0;
        let averageRating = 0;
        let userRating = 0;
        feedbacks.map(feedback => {
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

        let gameType;
        gameTypesList.map(gametype => {
            if (gametype.id === game.game_type_id) {
                gameType = gametype;
            }
            return gameType;
        })

        let scores = [];
        let lastScore;
        scoresList.map(score => {
            if (score.game_id === game.id) {
                scores.push(score.score);
                lastScore = [...scores].at(-1);
            }
            return lastScore;
        })

        return <GameCard game={game} fans={favoritesCount} feedbacks={averageRating} favorite={isFavorite} evaluation={userRating} gametype={gameType} lastscore={lastScore} key={game.id}/>
    })

    return (
        <div className="game-list">
        {gamesLoading || gameTypesLoading || scoresLoading || favoritesLoading || feedbacksLoading ? <p>"-- Games info loading --"</p> : gameCards}
        </div>
        )
}

export default GamesIndex
