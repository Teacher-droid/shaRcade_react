import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminGamesInfoCard = (props) => {

  const [gamesCount, setGamesCount] = useState();
  const [gameTypesCount, setGameTypesCount] = useState();
  const [lastRegisteredGame, setLastRegisteredGame] = useState([]);
  const [scoresPerGame, setScoresPerGame] = useState();

  useEffect(() => {
    // Initialiser les différents KPIs liées aux "Games" via des fetchs + calculs + set*Count
    setGamesCount(props.gamesinfo.length);
    setGameTypesCount(28);
    setLastRegisteredGame(["SnaKouninef","2022/06/23"]);
    setScoresPerGame(8);
  }, [props.gamesinfo]);

  return (
    <div className="admin-info-card">
      <div className="admin-info-card-header">
        <p>GAMES</p>
      </div>
      <div className="admin-info-card-body">
        <h5>Games statistics</h5>
        <ul>
          <li>{gamesCount} registered {gamesCount > 1 ? "games" : "game"}</li>
          <li>{scoresPerGame} {scoresPerGame > 1 ? "scores" : "score"} shared per game</li>
          <li>{gameTypesCount} {gameTypesCount > 1 ? "different game genres" : "game genre"}</li>
          <li>Last game registered:
            <ul>
              <li>Title: {lastRegisteredGame[0]}</li>
              <li>Registered: {lastRegisteredGame[1]}</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="admin-info-card-footer">
        <Link className="admin-info-link" to="/games">&gt; Manage games &lt;</Link>
      </div>
    </div>
  );
}

export default AdminGamesInfoCard;