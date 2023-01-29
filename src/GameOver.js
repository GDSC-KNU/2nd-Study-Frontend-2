import "./GameOver.css";

function GameOver() {
  return (
    <div>
      <div className="TemplateBox">
        <div className="gamever">Game Over :(</div>
        <div className="again">Try Again!</div>
        <div className="score">Score</div>
        <button className="rebtn">Restart</button>
      </div>
    </div>
  );
}

export default GameOver;
