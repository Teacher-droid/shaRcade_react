import { Link } from 'react-router-dom';
import './GameCard.css';
import { FaHeart, FaRegHeart, FaRegStar, FaStarHalf, FaStar } from "react-icons/fa";

// Displays 1 synthetic game card
// Call by "<GameCard game={my_game_var} favorite={true / false} evaluation={0,1,2,3,4 ou 5} fans={my_number_of_fans} feedbacks={my_average_evaluation} />"
function GameCard(props) {

  const gameFavoriteIcon = () => {
    // Returns 💖 (heart full) if "current user" favorites includes "props.game"
    // Returns 🤍 (empty heart), elseway
    let my_favorite_icon = props.favorite ? <span><FaHeart/></span> : <span><FaRegHeart/></span>;
    return my_favorite_icon;
  }

  const gameFeedbackIcons = (my_avg_game_eval) => {
    // Returns ⭐ to ⭐⭐⭐⭐⭐ depending on current user evaluation of "props.game"
    let my_feedback_icons = <span><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/></span>;
    switch (my_avg_game_eval) {
      case 5:
        my_feedback_icons = <span><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>;
        break;
      case 4:
        my_feedback_icons = <span><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></span>;
        break;
      case 3:
        my_feedback_icons = <span><FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/></span>;
        break;
      case 2:
        my_feedback_icons = <span><FaStar/><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/></span>;
        break;
      case 1:
        my_feedback_icons = <span><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/></span>;
        break;
      default:
        // Do nothing
        break;
    }
    return(my_feedback_icons);
  }

  const gameFansCounter = (my_fan_number) => {
    // Returns the number of fans for this game, followed by a 💖 icon]**
    return(<span><FaHeart /> {my_fan_number}</span>);
  }

  const gameEvalutionsCounter = (my_eval_number) => {
    // Returns the number of fans for this game, followed by a 💖 icon]**
    return(<span><FaStar /> {my_eval_number}</span>);
  }

  return (
    <div className="game-card">
      <div className="game-card-header">
        <img className="game-card-img" src={require('../../assets/images/' + props.game.image_url)} alt={"screenshot of "+props.game.game_title}/>
        <div className="game-favorite"><FaHeart/></div>
        <div className="game-feedback">{gameFeedbackIcons(props.evaluation)}</div>
      </div>
      <div className="game-card-body">
        <h3>{props.game.game_title}</h3>
        <p>{props.game.game_descr.slice(0,99)} <Link className="game-card-link" to={"/games/" + props.game.id.toString()}> [View more...] </Link></p>
      </div>
      <div className="game-card-footer">
        <div className="game-fan">{gameFansCounter(props.fans)}</div>
        <div className="game-evaluator">{gameEvalutionsCounter(props.feedbacks)}</div>
      </div>
    </div>
  );
}

export default GameCard;
