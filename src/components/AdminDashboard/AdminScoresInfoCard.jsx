import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminScoresInfoCard = () => {

  const [stillLoading, setStillLoading] = useState(true);
  const [scoresCount, setScoresCount] = useState();
  const [topGamesWithHiScore, setTopGameWithHiScore] = useState({});
  const [playerWithMostHiScore, setPlayerWithMostHiScore] = useState({});

  useEffect(() => {
    // Initialiser les différents KPIs liées aux "Scores" via des fetchs + calculs + set*Count
    setScoresCount(666);
    setPlayerWithMostHiScore({firstname: "Loïs", lastname: "KOUNINEF"});
    setTopGameWithHiScore({first: {game: "Flappy Bird", hiscores: "99"}, second: {game: "Candy Crush", hiscores: "66"}, third: {game: "Crazy Pinball",hiscores: "33"}});
    setStillLoading(false);
  }, []);

  return (
    <div className="admin-info-card">
      <div className="admin-info-card-header">
        <p>HI-SCORES</p>
      </div>
      <div className="admin-info-card-body">
        <h5>Scores information:</h5>
        <ul>
          <li>{stillLoading ? "*loading*" : scoresCount} registered {stillLoading ? "*loading*" : (scoresCount > 1 ? "scores" : "score")}</li>
          <li>Greatest hi-scorer of all time: {stillLoading ? "*loading*" : playerWithMostHiScore.firstname} {stillLoading ? "*loading*" : playerWithMostHiScore.lastname}</li>
          <li>Top 3 games with most hi-scores:
            <ul>
              <li>Title: {stillLoading ? "*loading*" : topGamesWithHiScore.first.game} - Hi-SCore: {stillLoading ? "*loading*" : topGamesWithHiScore.first.hiscores}</li>
              <li>Title: {stillLoading ? "*loading*" : topGamesWithHiScore.second.game} - Hi-SCore: {stillLoading ? "*loading*" : topGamesWithHiScore.second.hiscores}</li>
              <li>Title: {stillLoading ? "*loading*" : topGamesWithHiScore.third.game} - Hi-SCore: {stillLoading ? "*loading*" : topGamesWithHiScore.third.hiscores}</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="admin-info-card-footer">
        <Link className="admin-info-link" to="/scores">&gt; Manage scores &lt;</Link>
      </div>
    </div>
  );
}

export default AdminScoresInfoCard;