import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
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

    const [myUser, setMyUser] = useState(Cookies.get("fulluser").json());
    
    const [usersList, setUsersList] = useState([]);
    const [gamesList, setGamesList] = useState([]);
    const [usersLoading, setUsersLoading] = useState(true);
    const [gamesLoading, setGamesLoading] = useState(true);

    useEffect(() => {
        // Fetching ALL users data
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

    useEffect(() => {
        // Fetching ALL games data
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

    return (
        <div className='admin-dashboard-container'>
            <div className="admin-dashboard-welcome-banner">
                <h1>Welcome to your ShaRcade Admin dashboard, {myUser.firstname}!</h1>
            </div>
            <div className="admin-dashboard-info-cards-container">
                <AdminUsersInfoCard/>
                {gamesLoading ? "-- Games info loading --" : <AdminGamesInfoCard gamesinfo={gamesList}/>}
                <AdminScoresInfoCard/>
                <AdminFavoritesInfoCard/>
                <AdminFeedbacksInfoCard/>
            </div>
            <div className="admin-dashboard-middle-container">
                {usersLoading ? "-- Users info loading --" : <AdminUsersList usersindex={usersList}/>}
                <AdminGameTypesList/>
            </div>
        </div>
    )
}

export default AdminDashboard;