import { Link } from 'react-router-dom';
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

  return (
    <div className="game-card">
      <div className="game-card-header">
        {/*<img className="game-card-img" src={require('../../assets/images/' + props.game.image_url)} />*/}
        <div className="game-favorite">{gameFavoriteIcon}</div>
        <div className="game-feedback">{gameFeedbackIcons}</div>
      </div>
      <div className="game-card-body">
        <h3>{props.game.game_title}</h3>
        <p>{props.game.game_descr.slice(0,49)} <Link to={"/games/" + props.game.id.toString()}>... View more </Link></p>
      </div>
      <hr />
      <div className="game-card-footer">
      </div>
      <div className="game-fan">***[Insérer ici le nombre de fans du jeu suivi d'un :heart:]**</div>
      <div className="game-evaluator">**[Insérer la note sous forme d' :star:]**</div>
    </div>
  );
}

export default GameCard;
