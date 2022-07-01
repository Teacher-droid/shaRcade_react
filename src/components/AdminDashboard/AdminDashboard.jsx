import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { useAtom } from 'jotai';
import { authorizationAtom } from '../../stores/cookies';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../stores/api_url'
import AdminUsersInfoCard from './AdminUsersInfoCard';
import AdminGamesInfoCard from './AdminGamesInfoCard';
import AdminScoresInfoCard from './AdminScoresInfoCard';
import AdminFavoritesInfoCard from './AdminFavoritesInfoCard';
import AdminFeedbacksInfoCard from './AdminFeedbacksInfoCard';
import AdminUsersList from './AdminUsersList';
import AdminGameTypesList from './AdminGameTypesList';
import './AdminDashboard.css';

const AdminDashboard = () => {

    let redirectUnauthorized = useNavigate();
    const [myAuthorization, setAuthorization] = useAtom(authorizationAtom);

    const [myUser, setMyUser] = useState(JSON.parse(Cookies.get("fulluser")));
    const [usersList, setUsersList] = useState([]);
    const [gamesList, setGamesList] = useState([]);
    const [gameTypesList, setGameTypesList] = useState([]);
    const [scoresList, setScoresList] = useState([]);
    const [favoritesList, setFavoritesList] = useState([]);
    const [feedbacksList, setFeedbacksList] = useState([]);
    
    const [myUserLoading, setMyUserLoading] = useState(true);
    const [usersLoading, setUsersLoading] = useState(true);
    const [gamesLoading, setGamesLoading] = useState(true);
    const [gameTypesLoading, setGameTypesLoading] = useState(true);
    const [scoresLoading, setScoresLoading] = useState(true);
    const [favoritesLoading, setFavoritesLoading] = useState(true);
    const [feedbacksLoading, setFeedbacksLoading] = useState(true);

    // Verifying User existence
    useEffect(() => {
        if (Cookies.get("fulluser")) {
            setMyUser(JSON.parse(Cookies.get("fulluser")));
            console.log(myUser);
        } else {
            /* "/" entry replacing the "/admindashboard" entry to avoid use of browser "Back" button */
            console.log("You're not even connected... Come on!");
            redirectUnauthorized('/', { replace: true });
        }
    },[myUserLoading]);

    // Authorizing access to admin dashboard
    useEffect (() => {
        if (myUser) {
            setMyUserLoading(false);
            if (myUser.role !== "admin") {
                /* "/" entry replacing the "/admindashboard" entry to avoid use of browser "Back" button */
                console.log("Connected but no Admin role...");
                redirectUnauthorized('/', { replace: true });
            } else {
                console.log("You're authorized to enter the Admin dashboard: welcome!");
            }
        } else {
            setMyUserLoading(true);
        }
    }, [myUser]);

    // Fetching USERS data
    useEffect(() => {
        fetch(`${API_URL}users/actions`, {
            method: 'get', 
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': myAuthorization}
        })
        .then((response_user) => response_user.json())
        .then((data_user) => {
            setUsersList(data_user);
            console.log("usersList >>");
            console.log(usersList);
            setUsersLoading(data_user.length <= 0);
        })
        .catch((error) => console.log(error));
    },[usersLoading]);

    // Fetching ALL GAMES data
    useEffect(() => {
        fetch(`${API_URL}games`, {
            method: 'get', 
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': myAuthorization}
        })
        .then((response_game) => response_game.json())
        .then((data_game) => {
            setGamesList(data_game);
            console.log("gamesList >>");
            console.log(gamesList);
            setGamesLoading(data_game.length <= 0);
        })
        .catch((error) => console.log(error));
    },[gamesLoading]);

    // Fetching GAME TYPES data
    useEffect(() => {
        fetch(`${API_URL}game_types`, {
            method: 'get', 
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': myAuthorization}
        })
        .then((response_game_type) => response_game_type.json())
        .then((data_game_type) => {
            setGameTypesList(data_game_type);
            console.log("gameTypesList >>");
            console.log(gameTypesList);
            setGameTypesLoading(data_game_type.length <= 0);
        })
        .catch((error) => console.log(error));
    },[gameTypesLoading]);

    // Fetching SCORES data
    useEffect(() => {
        fetch(`${API_URL}scores`, {
            method: 'get', 
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': myAuthorization}
        })
        .then((response_score) => {
            console.log(response_score);
            return response_score.json();
        })
        .then((data_score) => {
            setScoresList(data_score);
            console.log("scoresList >>");
            console.log(scoresList);
            setScoresLoading(data_score.length <= 0);
        })
        .catch((error) => console.log(error));
    },[scoresLoading]);

    // Fetching FAVORITES data
    useEffect(() => {
        fetch(`${API_URL}favorites`, {
            method: 'get', 
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': myAuthorization}
        })
        .then((response_favorite) => {
            console.log(response_favorite);
            return response_favorite.json();
        })
        .then((data_favorite) => {
            setFavoritesList(data_favorite);
            console.log("favoritesList >>");
            console.log(favoritesList);
            setFavoritesLoading(data_favorite.length <= 0);
        })
        .catch((error) => console.log(error));
    },[favoritesLoading]);

    // Fetching FEEDBACKS data
    useEffect(() => {
        fetch(`${API_URL}feedbacks`, {
            method: 'get', 
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': myAuthorization}
        })
        .then((response_feedback) => {
            console.log(response_feedback);
            return response_feedback.json();
        })
        .then((data_feedback) => {
            setFeedbacksList(data_feedback);
            console.log("feedbacksList >>");
            console.log(feedbacksList);
            setFeedbacksLoading(data_feedback.length <= 0);
        })
        .catch((error) => console.log(error));
    },[feedbacksLoading]);
    
    return (
        <section className="admin-dashboard-container">
            <section className="admin-dashboard-welcome-banner">
                <h2>Welcome to your Admin dashboard "{myUser.nickname ? myUser.nickname : "Stranger"}"!</h2>
            </section>
            <section className="admin-dashboard-info-cards-container">
                {usersLoading ? "-- Users info loading --" : <AdminUsersInfoCard usersinfo={usersList}/>}
                {gamesLoading ? "-- Games info loading --" : <AdminGamesInfoCard gamesinfo={gamesList} scoresinfo={scoresList} gametypesinfo={gameTypesList} feedbacksinfo={feedbacksList}/>}
                <AdminScoresInfoCard/>
                <AdminFavoritesInfoCard/>
                <AdminFeedbacksInfoCard/>
            </section>
            <section className="admin-dashboard-middle-container">
                {usersLoading ? "-- Users list loading --" : <AdminUsersList usersindex={usersList}/>}
                {gameTypesLoading ? "-- Game types info loading --" : <AdminGameTypesList gametypesindex={gameTypesList}/>}
            </section>
        </section>
    )
}

export default AdminDashboard;