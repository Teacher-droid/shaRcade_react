import { useState } from 'react';
import './GameCard.css';


// Display 1 synthetic game card
// Call by "<GameCard game={my_game_var} />"
function GameCard(props) {

  const gameFavoriteIcon = () => {
    // Returns 💖 (heart full) if "current user" favorites includes "props.game"
    // Returns 🤍 (empty heart), elseway
  }

  const gameFeedbackIcons = () => {
    // Returns ⭐ to ⭐⭐⭐⭐⭐ depending on current user evaluation of "props.game"
  }

// BEGIN "GameShow" ==> Instead of going to the game page, displaying game details over (z index) game index.

  const [viewMore, setViewMore] = useState(false);
  const linkName = viewMore ? 'View Less << ' : '...View More >> '

  const showDetails = <div class="modal-bg" onClick={()=>{setViewMore(!viewMore)}}>
      <div className="game-card modal">
      <div className="game-card-header">
      <div className="game-favorite">{gameFavoriteIcon}</div>
      <div className="game-feedback">{gameFeedbackIcons}</div>
      </div>
      <div className="game-card-body">
      <h3>{props.game.game_title}</h3>
      <p>{props.game.game_descr}<span className="show-button" onClick={()=>{setViewMore(!viewMore)}}>{linkName}</span></p>
      </div>
      <hr />
      <div className="game-card-footer">
      </div>
      <div className="game-fan">***[Insérer ici le nombre de fans du jeu suivi d'un :heart:]**</div>
      <div className="game-evaluator">**[Insérer la note sous forme d' :star:]**</div>
      </div>
      </div>

      // END "GameShow"

  return (
    <div className="game-card">
    <div className="game-card-header">
    <div className="game-favorite">{gameFavoriteIcon}</div>
    <div className="game-feedback">{gameFeedbackIcons}</div>
    </div>
    <div className="game-card-body">
    <h3>{props.game.game_title}</h3>
    <p>{props.game.game_descr.slice(0,49)}><span className="show-button" onClick={()=>{setViewMore(!viewMore)}}>{linkName}</span></p>
    </div>
    <hr />
    <div className="game-card-footer">
    </div>
    <div className="game-fan">***[Insérer ici le nombre de fans du jeu suivi d'un :heart:]**</div>
    <div className="game-evaluator">**[Insérer la note sous forme d' :star:]**</div>
    {viewMore && showDetails}
      </div>
      );
}

export default GameCard;
