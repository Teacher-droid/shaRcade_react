function EditorGameCard(props) {

  return (
    <div className="editor-game-card">
      <h4>{props.game.game_title.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}</h4>
      <p>APIKey : <span className="apikey">{props.apikey.api_key}</span></p>
    </div>
   );

}

export default EditorGameCard;
