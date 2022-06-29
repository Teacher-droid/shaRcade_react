import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Called with "props.usersinfo"
const AdminUsersInfoCard = (props) => {

  const [usersCount, setUsersCount] = useState(0);
  const [playersCount, setPlayersCount] = useState(0);
  const [editorsCount, setEditorsCount] = useState(0);
  const [adminsCount, setAdminsCount] = useState(0);
  const [latestUser, setLatestUser] = useState(sortUsersByCreationDate(props.usersinfo));

  function countUsersByRole(my_role, my_users_tab) {
    return my_users_tab.map((my_user) => 
      my_user.role === my_role ? 1 : 0)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  }

  function sortUsersByCreationDate(my_users_tab) {
    return my_users_tab.sort((a,b) => {
      if (a.created_at < b.created_at)
        return 1;
      if (a.created_at > b.created_at)
        return -1;
      return 0;
    })[0];
  }

  useEffect(() => {
    if (props.usersinfo) {
      setUsersCount(props.usersinfo.length);
      setPlayersCount(countUsersByRole("player", props.usersinfo));
      setEditorsCount(countUsersByRole("editor", props.usersinfo));
      setAdminsCount(countUsersByRole("admin", props.usersinfo));
      setLatestUser(sortUsersByCreationDate(props.usersinfo));
    }
  }, [props.usersinfo]);

  return (
    <section className="admin-info-card">
      <div className="admin-info-card-header">
        <p>USERS</p>
      </div>
      <div className="admin-info-card-body">
        <h5>{usersCount} total {usersCount > 1 ? "users" : "user"}:</h5>
        <ul>
          <li>{playersCount} {playersCount > 1 ? "players" : "player"}</li>
          <li>{editorsCount} game {editorsCount > 1 ? "editors" : "editor"}</li>
          <li>{adminsCount} {adminsCount > 1 ? "administrators" : "administrator"}</li>
        </ul>
        <h5>Last signed-up user:</h5>
        <ul>
          <li>First Name: {latestUser ? latestUser.firstname || "/" : "?"}</li>
          <li>Last Name: {latestUser ? latestUser.lastname.toUpperCase() || "/" : "?"}</li>
          <li>Nickname: {latestUser ? latestUser.nickname : "?"}</li>
          <li>E-mail: <a href={`mailto:${latestUser.email}?subject=[ShaRcade] Message from your beloved admin`}>{latestUser ? latestUser.email : "?"}</a></li>
          <li>Gender: {latestUser ? latestUser.gender || "/" : "?"}</li>
          <li>Birth: {latestUser ? latestUser.birthdate || "/" : "?"}</li>
        </ul>
      </div>
      <div className="admin-info-card-footer">
        <Link className="admin-info-link" to="/users">&gt; Manage users &lt;</Link>
      </div>
    </section>
  );
}

export default AdminUsersInfoCard;