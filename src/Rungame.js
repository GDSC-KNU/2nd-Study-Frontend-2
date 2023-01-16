import { useState } from "react";
import styled from "styled-components";
import backgroundImg from "./assets/images/stage1_bg.jpeg";
import star from "./assets/images/star.png";

const HeaderWrap = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  background-color: lightblue;
`;

const Background = styled.div`
  background-image: url(${backgroundImg});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .exit {
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    background-color: transparent;
    position: absolute;
    bottom: -6px;
    right: 82px;
  }
  .exit:hover {
    background-color: white;
    color: black;
  }
  // random 별!!
  div {
    color: gold;
    position: absolute;
    background-image: url(${star});
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    bottom: ${(props) => props.bottom};
    background-size: 100% 100%;
    width: 50px;
    height: 50px;
    border: none;
  }
`;

function Header() {
  return (
    <>
      <HeaderWrap>
        <div>
          Stage <span>1</span>
        </div>
        <div>Timer</div>
        <div>
          Score <span>0</span>
        </div>
      </HeaderWrap>
    </>
  );
}

function RandomStar() {
  const [mode, setMode] = useState("START");

  if (mode === "START") {
  } else if (mode === "CLICK") {
  }

  return (
    <>
      <div
        onClick={(event) => {
          event.preventDefault();
          console.log(event.target.top);
        }}
      ></div>
    </>
  );
}

function GameScreen() {
  return (
    <>
      <Background>
        <button className="exit">EXIT</button>
        <RandomStar
          top={() => {
            return Math.floor(Math.random() * 99 + 1);
          }}
          bottom={() => {
            return Math.floor(Math.random() * 99 + 1);
          }}
          left={() => {
            return Math.floor(Math.random() * 99 + 1);
          }}
          right={() => {
            return Math.floor(Math.random() * 99 + 1);
          }}
        />
      </Background>
    </>
  );
}

// Rendering zone

function Rungame() {
  return (
    <>
      <Header />
      <GameScreen />
    </>
  );
}

export default Rungame;
