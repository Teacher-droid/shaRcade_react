import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminUsersInfoCard = () => {

  const [usersCount, setUsersCount] = useState(99);
  const [playersCount, setPlayersCount] = useState(55);
  const [editorsCount, setEditorsCount] = useState(33);
  const [adminsCount, setAdminsCount] = useState(11);

  useEffect(() => {
    // Initialiser les différents KPIs via des fetchs + calculs + set*Count
  });

  return (
    <div className="admin-info-card">
      <div className="admin-info-card-header">
        <h4>Users</h4>
      </div>
      <div className="admin-info-card-body">
        <h5>{usersCount} total users including:</h5>
        <ul>
          <li>{playersCount} {playersCount > 1 ? "players" : "player"}</li>
          <li>{editorsCount} game {editorsCount > 1 ? "editors" : "editor"}</li>
          <li>{adminsCount} {adminsCount > 1 ? "administrators" : "administrator"}</li>
        </ul>
      </div>
      <div className="admin-info-card-footer">
        <Link className="admin-info-link" to="#">Manage SharCade users &gt;&gt;</Link>
      </div>
    </div>
  );
}

export default AdminUsersInfoCard;