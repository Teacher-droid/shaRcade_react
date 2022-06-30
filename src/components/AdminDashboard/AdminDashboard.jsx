import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
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
    
    const [myUser, setMyUser] = useState({});
    const [usersList, setUsersList] = useState([]);
    const [gamesList, setGamesList] = useState([]);
    const [gameTypesList, setGameTypesList] = useState([]);
    
    const [myUserLoading, setMyUserLoading] = useState(true);
    const [usersLoading, setUsersLoading] = useState(true);
    const [gamesLoading, setGamesLoading] = useState(true);
    const [gameTypesLoading, setGameTypesLoading] = useState(true);

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
    },[]);

    // Authorizing access to admin dashboard
    useEffect (() => {
        if (myUser.role !== "admin") {
            /* "/" entry replacing the "/admindashboard" entry to avoid use of browser "Back" button */
            console.log("Connected but no Admin role...");
            // redirectUnauthorized('/', { replace: true });
        } else {
            console.log("Welcome to the Admin dashboard!");
        }
    }, []);

    // Fetching ALL users data
    useEffect(() => {
        fetch(API_URL + 'users/actions', {method: 'get', headers: {'Content-Type': 'application/json','Accept': 'application/json'}})
        .then((response_user) => response_user.json())
        .then((data_user) => {
            setUsersList(data_user);
            console.log("usersList >>");
            console.log(usersList);
            setUsersLoading(data_user.length <= 0);
        })
        .catch((error) => console.log(error));
    },[usersLoading]);

    // Fetching ALL games data
    useEffect(() => {
        fetch(API_URL + 'games', {method: 'get', headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
        .then((response_game) => response_game.json())
        .then((data_game) => {
            setGamesList(data_game);
            console.log("gamesList >>");
            console.log(gamesList);
            setGamesLoading(data_game.length <= 0);
        })
        .catch((error) => console.log(error));
    },[gamesLoading]);

    // Fetching ALL game types data
    useEffect(() => {
        fetch(API_URL + 'game_types', {method: 'get', headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
        .then((response_game_type) => response_game_type.json())
        .then((data_game_type) => {
            setGameTypesList(data_game_type);
            console.log("gameTypesList >>");
            console.log(gameTypesList);
            setGameTypesLoading(data_game_type.length <= 0);
        })
        .catch((error) => console.log(error));
    },[gameTypesLoading]);

    return (
        <section className="admin-dashboard-container">
            <section className="admin-dashboard-welcome-banner">
                <h2>Welcome to your Admin dashboard "{myUser.nickname ? myUser.nickname : "Stranger"}"!</h2>
            </section>
            <section className="admin-dashboard-info-cards-container">
                {usersLoading ? "-- Users info loading --" : <AdminUsersInfoCard usersinfo={usersList}/>}
                {gamesLoading ? "-- Games info loading --" : <AdminGamesInfoCard gamesinfo={gamesList}/>}
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