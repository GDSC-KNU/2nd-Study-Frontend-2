import { Link } from "react-router-dom";
import "./GameAllClear.css";
//import background from "./image/background.png";

function GameAllClear() {
  const score1 = localStorage.getItem("score1");
  const score2 = localStorage.getItem("score2");
  const score3 = localStorage.getItem("score3");

  return (
    <Link to="/">
      <div>
        <div className="Title">
          <h1>Congratulation!</h1>
        </div>
        <div className="SecondTitle">
          <h2>
            You Cleared All Stages!!
            <br />Your score is {parseInt(score1) + parseInt(score2) + parseInt(score3)}
          </h2>
        </div>
        <div className="ThirdTitle">
          <h5>Press any button</h5>
        </div>
      </div>
    </Link>
  );
}

export default GameAllClear;
