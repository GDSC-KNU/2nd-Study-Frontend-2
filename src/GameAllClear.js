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

function GameAllClear(props) {
  const [scores, setScores] = useState({});
  const score1 = localStorage.getItem("score1");
  const score2 = localStorage.getItem("score2");
  const score3 = localStorage.getItem("score3");
  useEffect(() => {
    fetch("//localhost:8080/scores/list")
      .then((response) => response.json())
      .then((data) => setScores(data[data.length - 1]))
      .catch((error) => console.log(error));
  }, []);

  const postScores = (first, second, third, fourth, fifth) => {
    const body = {
      first: first,
      second: second,
      third: third,
      fourth: fourth,
      fifth: fifth,
    };
    console.log(body);
    fetch("//localhost:8080/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first: first,
        second: second,
        third: third,
        fourth: fourth,
        fifth: fifth,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  };

  if (parseInt(score1) + parseInt(score2) + parseInt(score3) > scores.fifth) {
    if (
      parseInt(score1) + parseInt(score2) + parseInt(score3) <
      scores.fourth
    ) {
      // 새로운 5등
      postScores(
        scores.first,
        scores.second,
        scores.third,
        scores.fourth,
        parseInt(score1) + parseInt(score2) + parseInt(score3)
      );
    } else if (
      parseInt(score1) + parseInt(score2) + parseInt(score3) <
      scores.third
    ) {
      // 새로운 4등
      postScores(
        scores.first,
        scores.second,
        scores.third,
        parseInt(score1) + parseInt(score2) + parseInt(score3),
        scores.fifth
      );
    } else if (
      parseInt(score1) + parseInt(score2) + parseInt(score3) <
      scores.second
    ) {
      // 새로운 3등
      postScores(
        scores.first,
        scores.second,
        parseInt(score1) + parseInt(score2) + parseInt(score3),
        scores.fourth,
        scores.fifth
      );
    } else if (
      parseInt(score1) + parseInt(score2) + parseInt(score3) <
      scores.first
    ) {
      // 새로운 2등
      postScores(
        scores.first,
        parseInt(score1) + parseInt(score2) + parseInt(score3),
        scores.third,
        scores.fourth,
        scores.fifth
      );
    } else {
      // 새로운 1등
      postScores(
        parseInt(score1) + parseInt(score2) + parseInt(score3),
        scores.second,
        scores.third,
        scores.fourth,
        scores.fifth
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
          Your score is {parseInt(score1) + parseInt(score2) + parseInt(score3)}
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
