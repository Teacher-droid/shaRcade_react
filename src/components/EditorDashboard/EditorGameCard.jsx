function EditorGameCard(props) {

  return (
    <div>
      <h6>{props.game.game_title}</h6>
      <p>APIKey : {props.apikey}.</p>
    </div>
   );

}

export default EditorGameCard;
