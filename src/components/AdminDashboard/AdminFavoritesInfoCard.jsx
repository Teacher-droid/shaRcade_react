import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminFavoritesInfoCard = () => {
    
  const [stillLoading, setStillLoading] = useState(true);
  const [favoritesCount, setFavoritesCount] = useState();
  const [topGamesWithFavorites, setTopGamesWithFavorites] = useState({});
  const [playerWithMostFavorites, setPlayerWithMostFavorites] = useState({});
  
  useEffect(() => {
    // Initialiser les différents KPIs liées aux "Favorites"" via des fetchs + calculs + set*Count
    setFavoritesCount(1234);
    setPlayerWithMostFavorites({firstname: "Damian", lastname: "PIERRE-LOUIS"});
    setTopGamesWithFavorites({first: {game: "Rust", feedbacks: "777"}, second: {game: "Devil May Cry", feedbacks: "666"}, third: {game: "Shinobi", feedbacks: "555"}});
    setStillLoading(false);
  }, []);
  
  return (
    <div className="admin-info-card">
      <div className="admin-info-card-header">
        <p>FAVORITES</p>
      </div>
      <div className="admin-info-card-body">
        <h5>Favorites' stats:</h5>
        <ul>
          <li>{stillLoading ? "*loading*" : favoritesCount} given {stillLoading ? "*loading*" : (favoritesCount > 1 ? "favorites" : "favorite")}</li>
          <li>Best evaluator: {stillLoading ? "*loading*" : playerWithMostFavorites.firstname} {stillLoading ? "*loading*" : playerWithMostFavorites.lastname}</li>
          <li>Most acclaimed games:
            <ul>
              <li>Title: {stillLoading ? "*loading*" : topGamesWithFavorites.first.game} - Hi-SCore: {stillLoading ? "*loading*" : topGamesWithFavorites.first.hiscores}</li>
              <li>Title: {stillLoading ? "*loading*" : topGamesWithFavorites.second.game} - Hi-SCore: {stillLoading ? "*loading*" : topGamesWithFavorites.second.hiscores}</li>
              <li>Title: {stillLoading ? "*loading*" : topGamesWithFavorites.third.game} - Hi-SCore: {stillLoading ? "*loading*" : topGamesWithFavorites.third.hiscores}</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="admin-info-card-footer">
        <Link className="admin-info-link" to="/scores">&gt; Manage favorites &lt;</Link>
      </div>
    </div>
  );
}

export default AdminFavoritesInfoCard;