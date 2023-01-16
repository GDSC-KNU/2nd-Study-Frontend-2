//import image from './background.png';
import "./Gamestart.css";
import imgA from "./image/moon.png";
import imgB from "./image/star1.png";
import imgC from "./image/star2.png";
import imgD from "./image/scoreBadge.png";

function Gamestart() {
  return (
    <div>
      <div className="Title">
        <h1>Catch Your Star!</h1>
      </div>
      <div className="Moon">
        <img src={imgA} width="290.18" height="278.59" alt="moon" />
      </div>
      <div className="star1">
        <img src={imgB} width="40" height="40" alt="star1" />
      </div>
      <div className="star2">
        <img src={imgC} width="40" height="40" alt="star2" />
      </div>
      <div className="scoreTemplate">
        <div className="scoreBadge">
          <img src={imgD} width="70" height="70" alt="scoreBadge" />
        </div>
      </div>

      <div className="action">
        <button className="btn">Game Start</button>
      </div>
      <div className="Third">
        <h5>Press Start button</h5>
      </div>
    </div>
  );
}

export default Gamestart;
