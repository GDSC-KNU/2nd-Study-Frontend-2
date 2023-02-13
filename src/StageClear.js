import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./StageClear.css";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import backgroundImg1 from "./assets/images/stage1_bg.jpeg";
import backgroundImg2 from "./assets/images/stage2_bg.jpeg";
import backgroundImg3 from "./assets/images/stage3_bg.jpeg";

const StageClear = () => {
  let { no } = useParams();
  const navigate = useNavigate();

  const onComplete = () => {
    if (no == 1) {
      navigate("/game/2");
    }
    if (no == 2) {
      navigate("/game/3");
    }
  };
  return (
    <div className="sc-container">
      <h1 className="sc-h1">Stage Clear!</h1>
      <div className="sc-timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={5}
          colors={"#3751769E"}
          colorsTime={[7, 5, 2, 0]}
          size={200}
					strokeWidth={15}
          onComplete={onComplete}
        >
          {({ remainingTime }) => (
            <div className="sc-timer-text">{remainingTime}</div>
          )}
        </CountdownCircleTimer>
      </div>
      <p className="sc-info">Next stage starts 5 seconds later...</p>
    </div>
  );
};

export default StageClear;
