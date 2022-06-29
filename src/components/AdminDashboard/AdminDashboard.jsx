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
    const [usersLoading, setUsersLoading] = useState(true);
    const [gamesLoading, setGamesLoading] = useState(true);

    // Managing User authorization / access to admin dashboard
    useEffect(() => {
        if (Cookies.get("fulluser")) {
            setMyUser(JSON.parse(Cookies.get("fulluser")));
            if (myUser.role !== "admin") {
                /* "/" entry replacing the "/admindashboard" entry to avoid use of browser "Back" button */
                console.log("Connected but no Admin role...");
                // redirectUnauthorized('/', { replace: true });
            } else {
                console.log("Welcome to the Admin dashboard!");
            }
        } else {
            /* "/" entry replacing the "/admindashboard" entry to avoid use of browser "Back" button */
            console.log("You're not even connected... Come on!");
            // redirectUnauthorized('/', { replace: true });
        }
    },[]);

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

    return (
        <div className='admin-dashboard-container'>
            <div className="admin-dashboard-welcome-banner">
                <h2>Welcome to your ShaRcade Admin dashboard, {myUser.nickname ? myUser.nickname : "Stranger"}!</h2>
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