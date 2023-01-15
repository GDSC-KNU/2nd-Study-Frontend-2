import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./StageClear.css";

const StageClear = () => {
  const onComplete = () => {
    console.log("complete");
  };
  return (
    <div className="sc-container">
      <h1>Stage Clear!</h1>
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
