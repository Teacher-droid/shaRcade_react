import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminFeedbacksInfoCard = () => {
    
  const [stillLoading, setStillLoading] = useState(true);
  const [feedbacksCount, setFeedbacksCount] = useState();
  const [topGamesWithFeedbacks, setTopGamesWithFeedbacks] = useState({});
  const [playerWithMostFeedbacks, setPlayerWithMostFeedbacks] = useState({});
  
  useEffect(() => {
    // Initialiser les différents KPIs liées aux "Feedbacks"" via des fetchs + calculs + set*Count
    setFeedbacksCount(3333);
    setPlayerWithMostFeedbacks({firstname: "Jean-Baptiste", lastname: "VIDAL"});
    setTopGamesWithFeedbacks({first: {game: "CS:GO", feedbacks: "33"}, second: {game: "SnaKouninef", feedbacks: "22"}, third: {game: "Ikari Warriors", feedbacks: "11"}});
    setStillLoading(false);
  }, []);
  
  return (
    <div className="admin-info-card">
      <div className="admin-info-card-header">
        <p>FEEDBACKS</p>
      </div>
      <div className="admin-info-card-body">
        <h5>Feedbacks information:</h5>
        <ul>
          <li>{stillLoading ? "*loading*" : feedbacksCount} given {stillLoading ? "*loading*" : (feedbacksCount > 1 ? "feedbacks" : "feedback")}</li>
          <li>Best evaluator: {stillLoading ? "*loading*" : playerWithMostFeedbacks.firstname} {stillLoading ? "*loading*" : playerWithMostFeedbacks.lastname}</li>
          <li>Games with most feedbacks:
            <ul>
              <li>Title: {stillLoading ? "*loading*" : topGamesWithFeedbacks.first.game} - Hi-SCore: {stillLoading ? "*loading*" : topGamesWithFeedbacks.first.hiscores}</li>
              <li>Title: {stillLoading ? "*loading*" : topGamesWithFeedbacks.second.game} - Hi-SCore: {stillLoading ? "*loading*" : topGamesWithFeedbacks.second.hiscores}</li>
              <li>Title: {stillLoading ? "*loading*" : topGamesWithFeedbacks.third.game} - Hi-SCore: {stillLoading ? "*loading*" : topGamesWithFeedbacks.third.hiscores}</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="admin-info-card-footer">
        <Link className="admin-info-link" to="/scores">&gt; Manage feedbacks &lt;</Link>
      </div>
    </div>
  );
}

export default AdminFeedbacksInfoCard;