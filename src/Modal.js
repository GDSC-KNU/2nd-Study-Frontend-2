import "./Modal.css";

import imgA from "./image/badge (1) 1.png";
import imgB from "./image/badge (2) 1.png";
import imgC from "./image/badge (3) 1.png";
import imgD from "./image/badge (4) 1.png";
import imgE from "./image/Ellipse 5.png";
import imgF from "./image/Ellipse 6.png";
import imgG from "./image/Ellipse 7.png";
import imgH from "./image/badge 1.png";
import { useState } from "react";
import { useEffect } from "react";

function Modal() {
  const [scores, setScores] = useState({});
  useEffect(() => {
    fetch("https://catch-your-star.herokuapp.com/scores/list")
      .then((response) => response.json())
      .then((data) => setScores(data[data.length - 1]))
      .catch((error) => console.log("error:", error));
  }, []);

  return (
    <div className="Modal">
      <div className="modalTitle">Ranking</div>
      <div className="rank First">
        <div className="circle circle1">
          <img src={imgE} width="50" height="50" alt="Ellipse 5" />
          <div className="Gold">
            <img src={imgB} width="40" height="40" alt="badge (2) 1" />
          </div>
        </div>
        <div className="top-score">{scores.firstscore}</div>
      </div>
      <div className="Second">
        <div className="circle2">
          <img src={imgF} width="50" height="50" alt="Ellipse 6" />
          <div className="Silver">
            <img src={imgA} width="40" height="40" alt="badge (1) 1" />
          </div>
        </div>
        <div className="top-score">{scores.secondscore}</div>
      </div>
      <div className="Thrid">
        <div className="circle3">
          <img src={imgG} width="50" height="50" alt="Ellipse 7" />
          <div className="Bronze">
            <img src={imgD} width="40" height="40" alt="badge (4) 1" />
          </div>
        </div>
        <div className="top-score">{scores.thirdscore}</div>
      </div>
      <div className="Fourth">
        <div className="circle4">
          <img src={imgC} width="40" height="40" alt="badge (3) 1" />
        </div>
        <div className="top-score">{scores.fourthscore}</div>
      </div>
      <div className="Fifth">
        <div className="circle5">
          <img src={imgH} width="40" height="40" alt="badge 1" />
        </div>
        <div className="top-score">{scores.fifthscore}</div>
      </div>
    </div>
  );
}

export default Modal;
