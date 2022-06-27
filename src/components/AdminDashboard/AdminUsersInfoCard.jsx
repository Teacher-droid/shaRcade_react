import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminUsersInfoCard = () => {

  const [usersCount, setUsersCount] = useState();
  const [playersCount, setPlayersCount] = useState();
  const [editorsCount, setEditorsCount] = useState();
  const [adminsCount, setAdminsCount] = useState();

  useEffect(() => {
    // Initialiser les différents KPIs via des fetchs + calculs + set*Count
    setUsersCount(99);
    setPlayersCount(55);
    setEditorsCount(33);
    setAdminsCount(11);
  }, []);

  return (
    <div className="admin-info-card">
      <div className="admin-info-card-header">
        <p>USERS</p>
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
        <Link className="admin-info-link" to="/users">&gt; Manage users &lt;</Link>
      </div>
    </div>
  );
}

export default AdminUsersInfoCard;