import React, { useEffect, useState } from 'react'
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

    const [usersList, setUsersList] = useState([]);
    const [gamesList, setGamesList] = useState([]);
    const [usersStillLoading, setUsersStillLoading] = useState(true);
    const [gamesStillLoading, setGamesStillLoading] = useState(true);

    useEffect(() => {
        // Fetching ALL users data
        fetch(API_URL + 'users/actions', {method: 'get', headers: {'Content-Type': 'application/json','Accept': 'application/json'}})
        .then((response_user) => response_user.json())
        .then((response_user) => {
            setUsersList(response_user);
            console.log(usersList);
            setUsersStillLoading(false);
        })
        .catch((error) => console.log(error));

        // Fetching ALL games datat
        fetch(API_URL + 'games', {method: 'get', headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
        .then((response_game) => response_game.json())
        .then((response_game) => {
            setGamesList(response_game);
            console.log(gamesList);
            setGamesStillLoading(false);
        })
        .catch((error) => console.log(error));
    }, [usersList, gamesList])

    return (
        <div className='admin-dashboard-container'>
            <div className="admin-dashboard-welcome-banner">
                <h1>Welcome to your ShaRcade Admin dashboard!</h1>
            </div>
            <div className="admin-dashboard-info-cards-container">
                <AdminUsersInfoCard/>
                {usersStillLoading ? <AdminGamesInfoCard gamesinfo={gamesList}/> : "** Still loading **"}
                <AdminScoresInfoCard/>
                <AdminFavoritesInfoCard/>
                <AdminFeedbacksInfoCard/>
            </div>
            <div className="admin-dashboard-middle-container">
                {usersStillLoading ? <AdminUsersList usersindex={usersList}/> : "** Still loading **"}
                <AdminGameTypesList/>
            </div>
        </div>
    )
}

export default AdminDashboard;