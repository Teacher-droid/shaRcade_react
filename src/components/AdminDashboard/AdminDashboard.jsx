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
    const [stillLoading, setStillLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL + 'users/actions', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((response) => {
            setUsersList(response);
            setStillLoading(usersList !== []);
        })
        .catch((error) => console.log(error));
    }, [usersList, stillLoading])

    return (
        <div className='admin-dashboard-container'>
            <div className="admin-dashboard-welcome-banner">
                <h1>Welcome to your ShaRcade Admin dashboard!</h1>
            </div>
            <div className="admin-dashboard-info-cards-container">
                <AdminUsersInfoCard/>
                <AdminGamesInfoCard/>
                <AdminScoresInfoCard/>
                <AdminFavoritesInfoCard/>
                <AdminFeedbacksInfoCard/>
            </div>
            <div className="admin-dashboard-middle-container">
                {stillLoading ? <AdminUsersList usersindex={usersList}/> : null}
                <AdminGameTypesList/>
            </div>
        </div>
    )
}

export default AdminDashboard;