import React from 'react';
import './AdminDashboard.css';
import AdminUsersInfoCard from './AdminUsersInfoCard';
import AdminGamesInfoCard from './AdminGamesInfoCard';
import AdminScoresInfoCard from './AdminScoresInfoCard';
import AdminFavoritesInfoCard from './AdminFavoritesInfoCard';
import AdminFeedbacksInfoCard from './AdminFeedbacksInfoCard';
import AdminUsersList from './AdminUsersList';
import AdminGameTypesList from './AdminGameTypesList';

const AdminDashboard = () => {
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
                <AdminUsersList/>
                <AdminGameTypesList/>
            </div>
        </div>
    )
}

export default AdminDashboard;