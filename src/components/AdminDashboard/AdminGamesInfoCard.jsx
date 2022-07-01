import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Props: gamesinfo, scoresinfo, gametypesinfo, feedbacksinfo
const AdminGamesInfoCard = (props) => {

  const [gamesCount, setGamesCount] = useState();
  const [gameTypesCount, setGameTypesCount] = useState();
  const [lastRegisteredGame, setLastRegisteredGame] = useState([]);
  const [scoresPerGame, setScoresPerGame] = useState();
  const [feedbacksPerGame, setFeedbacksPerGame] = useState();

  function sortGamesByCreationDate(my_games_tab) {
    return my_games_tab.sort((a,b) => {
      if (a.created_at < b.created_at)
        return 1;
      if (a.created_at > b.created_at)
        return -1;
      return 0;
    })[0];
  }

  const computeScoresPerGameDistribution = (my_games, my_scores) => {
    let my_tmp_calc = my_games.length / my_scores.length;
    my_tmp_calc = Math.round((my_tmp_calc + Number.EPSILON) * 100) / 100
    return(my_tmp_calc);
  };

  const computeFeedbacksPerGameDistribution = (my_games, my_feedbacks) => {
    let my_tmp_calc = my_games.length / my_feedbacks.length;
    my_tmp_calc = Math.round((my_tmp_calc + Number.EPSILON) * 100) / 100
    return(my_tmp_calc);
  };

  useEffect(() => {
    // Initialiser les différents KPIs liées aux "Games" via des fetchs + calculs + set*Count
    setGamesCount(props.gamesinfo.length);
    setGameTypesCount(props.gametypesinfo.length);
    setLastRegisteredGame(sortGamesByCreationDate(props.gamesinfo));
    setScoresPerGame(computeScoresPerGameDistribution(props.gamesinfo, props.scoresinfo));
    setFeedbacksPerGame(computeFeedbacksPerGameDistribution(props.gamesinfo, props.feedbacksinfo));
  }, [props.gamesinfo, props.scoresinfo, props.gametypesinfo, props.feedbacksinfo]);

  return (
    <section className="admin-info-card">
      <div className="admin-info-card-header">
        <p>GAMES</p>
      </div>
      <div className="admin-info-card-body">
        <h5>Games statistics</h5>
        <ul>
          <li>{gamesCount} registered {gamesCount > 1 ? "games" : "game"}</li>
          <li>{gameTypesCount} {gameTypesCount > 1 ? "different game genres" : "game genre"}</li>
          <li>{scoresPerGame} {scoresPerGame > 1 ? "scores" : "score"} shared per game</li>
          <li>{feedbacksPerGame} {feedbacksPerGame > 1 ? "feedbacks" : "feedback"} given per game</li>
          <li>Last game registered:
            <ul>
              <li>ID: {lastRegisteredGame.id}</li>
              <li>Title: {lastRegisteredGame.game_title}</li>
              <li>Registered: {lastRegisteredGame.created_at}</li>
              <li>Mobile Ready: {lastRegisteredGame.mobile_ready ? "yes" : "no"}</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="admin-info-card-footer">
        <Link className="admin-info-link" to="/games">&gt; Manage games &lt;</Link>
      </div>
    </section>
  );
}

export default AdminGamesInfoCard;