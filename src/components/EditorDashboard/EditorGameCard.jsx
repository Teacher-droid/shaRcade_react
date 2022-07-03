function EditorGameCard(props) {

  return (
    <div>
      <h6>{props.game.game_title}</h6>
      <p>APIKey : {props.apikey.api_key}.</p>
    </div>
   );

}

export default EditorGameCard;
