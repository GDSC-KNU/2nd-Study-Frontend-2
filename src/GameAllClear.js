import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "./GameAllClear.css";
import styled from "styled-components";
//import background from "./image/background.png";

const Title = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    /*text-align: center;*/
    font-family: "DotGothic16", sans-serif;
    color: #fed36b;
    font-style: normal;
    font-weight: 800;
    line-height: 269px;
    font-size: ${(props) => props.fontsize};
  }
`;

const SecondTitle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  h2 {
    font-family: "DotGothic16", sans-serif;
    color: white;
    font-style: normal;
    font-weight: 800;
    line-height: 45px;
    font-size: ${(props) => props.fontsize};
  }
`;

const Text = styled.span`
  color: #fed36b;
`;

function GameAllClear(props) {
  const [scores, setScores] = useState({});
  const score1 = localStorage.getItem("score1");
  const score2 = localStorage.getItem("score2");
  const score3 = localStorage.getItem("score3");
  useEffect(() => {
    fetch("https://catch-your-star.herokuapp.com/scores/list")
      .then((response) => response.json())
      .then((data) => setScores(data[data.length - 1]))
      .catch((error) => console.log(error));
  }, []);
  //console.log(scores);
  const postScores = (first, second, third, fourth, fifth) => {
    const body = {
      firstscore: first,
      secondscore: second,
      thirdscore: third,
      fourthscore: fourth,
      fifthscore: fifth,
    };
    //console.log(body);
    fetch("https://catch-your-star.herokuapp.com/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstscore: first,
        secondscore: second,
        thirdscore: third,
        fourthscore: fourth,
        fifthscore: fifth,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  };

  if (parseInt(score1) + parseInt(score2) + parseInt(score3) > scores.fifthscore) {
    if (
      parseInt(score1) + parseInt(score2) + parseInt(score3) <
      scores.fourthscore
    ) {
      // 새로운 5등
      postScores(
        scores.firstscore,
        scores.secondscore,
        scores.thirdscore,
        scores.fourthscore,
        parseInt(score1) + parseInt(score2) + parseInt(score3)
      );
    } else if (
      parseInt(score1) + parseInt(score2) + parseInt(score3) <
      scores.thirdscore
    ) {
      // 새로운 4등
      postScores(
        scores.firstscore,
        scores.secondscore,
        scores.thirdscore,
        parseInt(score1) + parseInt(score2) + parseInt(score3),
        scores.fourthscore
      );
    } else if (
      parseInt(score1) + parseInt(score2) + parseInt(score3) <
      scores.secondscore
    ) {
      // 새로운 3등
      postScores(
        scores.firstscore,
        scores.secondscore,
        parseInt(score1) + parseInt(score2) + parseInt(score3),
        scores.thirdscore,
        scores.fourthscore
      );
    } else if (
      parseInt(score1) + parseInt(score2) + parseInt(score3) <
      scores.firstscore
    ) {
      // 새로운 2등
      postScores(
        scores.firstscore,
        parseInt(score1) + parseInt(score2) + parseInt(score3),
        scores.secondscore,
        scores.thirdscore,
        scores.fourthscore
      );
    } else {
      // 새로운 1등
      postScores(
        parseInt(score1) + parseInt(score2) + parseInt(score3),
        scores.firstscore,
        scores.secondscore,
        scores.thirdscore,
        scores.fourthscore
      );
    }
  }
  return (
    <div>
      <Title
        fontsize={
          props.minWidth === 1024 && props.minWidth < 1300
            ? `${80}px`
            : `${38}px`
        }
      >
        <h1>Congratulations!</h1>
      </Title>
      <SecondTitle
        fontsize={
          props.minWidth === 1024 && props.minWidth < 1300
            ? `${40}px`
            : `${24}px`
        }
      >
        <h2>
          You Cleared All Stages!!
          <br />
          Your score is{" "}
          <Text>{parseInt(score1) + parseInt(score2) + parseInt(score3)}</Text>
        </h2>
      </SecondTitle>
      <Link to="/">
        <div className="ThirdTitle">
          <h5>Click Here!</h5>
        </div>
      </Link>
    </div>
  );
}

export default GameAllClear;
