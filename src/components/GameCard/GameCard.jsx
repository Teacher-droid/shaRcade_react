import { useState } from 'react';
import './GameCard.css';
import { FaHeart, FaRegHeart, FaRegStar, FaStarHalf, FaStar, FaKeyboard, FaTabletAlt } from "react-icons/fa";

// Displays 1 synthetic game card
// Call by "<GameCard game={my_game_var} favorite={true / false} evaluation={0,1,2,3,4 ou 5} fans={my_number_of_fans} feedbacks={my_average_evaluation} />"
function GameCard(props) {

  const gameFavoriteIcon = (is_favorite) => {
    // Returns 💖 (heart full) if "current user" favorites includes "props.game"
    // Returns 🤍 (empty heart), elseway
    let my_favorite_icon = is_favorite ? <span><FaHeart/></span> : <span><FaRegHeart/></span>;
    return my_favorite_icon;
  }

  const gameMobileReadyIcon = (is_mobile_ready) => {
    // Returns phone full if "current game" mobile ready is true
    // Returns phone mepty, elseway
    let my_mobileready_icon = is_mobile_ready ?
    <span title={mobileReadyText}><FaTabletAlt/>&nbsp;<FaKeyboard/></span>
    : <span title={mobileReadyText}><FaKeyboard/></span>;
    return my_mobileready_icon;
  }

  const mobileReadyText = (is_mobile_ready) => {
    let my_mobileready_text = is_mobile_ready ?
    "This game can be played on both computers and touch devices."
    : "This game can be played on a computer.";
    return my_mobileready_text
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
      return my_feedback_icons;
    }

    const gameFansCounter = (my_fan_number) => {
    // Returns the number of fans for this game, followed by a 💖 icon]**
    return(<span><FaHeart /> {my_fan_number}</span>);
  }

  const gameEvalutionsCounter = (my_eval_number) => {
    // Returns the number of fans for this game, followed by a 💖 icon]**
    return(<span><FaStar /> {my_eval_number}</span>);
  }

  const [viewMore, setViewMore] = useState(false);
  const toggleDetails = (e) => {
    if (e.target !== e.currentTarget) {
      return false;
    }
    e.nativeEvent.stopImmediatePropagation();
    setViewMore(!viewMore);
  }
  const linkName = viewMore ? '...View Less << ' : '...View More >> ';
  const imageLink = require('../../assets/images/games/' + props.game.image_url) ? require('../../assets/images/games/' + props.game.image_url) : require('../../assets/images/games/default_game_screenshot.png');

  const showDetails =
  <div className="modal-bg" onClick={toggleDetails}>
    <div className="game-card modal">
      <img className="modal-img" src={imageLink} alt={"screenshot of "+props.game.game_title} alt={"screenshot of "+props.game.game_title}/>
      <div className="modal-favorite">{gameFavoriteIcon(props.favorite)}</div>
      <div className="modal-feedback">{gameFeedbackIcons(props.feedbacks)}</div>
      <div className="modal-body">
        <h3><a href={props.game.game_url} target="_blank">{props.game.game_title}</a></h3>
        <p>{props.game.game_descr}<span className="show-button" onClick={toggleDetails}>{linkName}</span></p>
      </div>
      <div className="modal-footer game-card-footer">
        <div className="game-fan">{gameFansCounter(props.fans)}</div>
        <div className="game-mobile-ready">{gameMobileReadyIcon(props.game.mobile_ready)}<span className="tooltiptext">{mobileReadyText(props.game.mobile_ready)}</span></div>
        <div className="game-evaluator">{gameFeedbackIcons(props.feedbacks)}</div>
      </div>
    </div>

  return (
    <div className="game-card">
      <div className="game-card-header">
        <img className="game-card-img" src={imageLink} alt={"screenshot of "+props.game.game_title}/>
        <div className="game-favorite">{gameFavoriteIcon(props.favorite)}</div>
        <div className="game-feedback">{gameFeedbackIcons(props.feedbacks)}</div>
      </div>
      <div className="game-card-body">
        <h3>{props.game.game_title}</h3>
        <p>{props.game.game_descr.slice(0,99)}<span className="show-button" onClick={toggleDetails}>{linkName}</span></p>
      </div>
      <div className="game-card-footer">
        <div className="game-fan">{gameFansCounter(props.fans)}</div>
        <div className="game-mobile-ready" title={mobileReadyText(props.game.mobile_ready)}>{gameMobileReadyIcon(props.game.mobile_ready)}</div>
        <div className="game-evaluator">{gameFeedbackIcons(props.feedbacks)}</div>
      </div>
      {viewMore && showDetails}
    </div>
    );
}

export default GameCard;
