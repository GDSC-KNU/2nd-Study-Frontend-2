import styled from "styled-components";
import backgroundImg from "./assets/images/stage1_bg.jpeg";
import star from "./assets/images/star.png";
import { useState } from "react";

const Background = styled.div`
  display: flex-end;
  background-image: url(${backgroundImg});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  section {
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
  }
  .Top {
    height: 50px;
    background-color: lavender;
  }
  .star {
    color: gold;
    position: absolute;
    background-image: url(${star});

    background-size: 100% 100%;
    width: 50px;
    height: 50px;
    border: none;
  }

  .Bottom {
    position: absolute;
    bottom: 0;
    height: 20px;
    width: 100vw;
    background-color: lightgreen;
  }
`;

function Game() {
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount((prev) => prev + 5);
  };

  return (
    <>
      <Background>
        {/* top */}
        <section className="Top">
          <div>
            Stage <span>1</span>
          </div>
          <div>Timer</div>
          <div>
            Score <span>{count}</span>
          </div>
        </section>
        {/* middle */}
        <section className="Playing">
          <div className="star" onClick={onIncrease}></div>
        </section>
        {/* bottom */}
        <section className="Bottom">bottom</section>
      </Background>
    </>
  );
}

export default Game;
