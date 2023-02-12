import styled from "styled-components";
import backgroundImg1 from "./assets/images/stage1_bg.jpeg";
import backgroundImg2 from "./assets/images/stage2_bg.jpeg";
import backgroundImg3 from "./assets/images/stage3_bg.jpeg";
import star from "./assets/images/star.png";
import { useEffect, useState } from "react";
import Timer from "./Timer";
import { Link, useParams } from "react-router-dom";
import Music from "./Music";

const Background = styled.div`
  display: flex-end;
  background-image: url(${backgroundImg1});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-top: 0;

  section {
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
    margin: 5px 20px;
    div {
      font-size: 25px;
      font-weight: 500;
    }
  }
  .Top {
    height: 50px;
    color: white;
  }
  .star {
    background-image: url(${star});
    background-size: 100% 100%;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border: none;
  }
  .Bottom {
    position: absolute;
    bottom: -7vh;
    right: 8.7vw;
    height: 20vh;
    width: inherit;
    color: white;
    cursor: pointer;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

function Game() {
  const [count, setCount] = useState(0);
  const [top, setTop] = useState(20);
  const [left, setLeft] = useState(10);
  const [right, setRight] = useState(10);
  const [bottom, setBottom] = useState(30);
  const [yellow, setYellow] = useState("######");

  let { no } = useParams();

  const onIncrease = () => {
    setCount((prev) => prev + 5);
    setYellow("#ffd400");
  };

  useEffect(() => {
    setTop(Math.floor(Math.random() * 400 + 1));
    setLeft(Math.floor(Math.random() * 300 + 1));
    setRight(Math.floor(Math.random() * 300 + 1));
    setBottom(Math.floor(Math.random() * 300 + 1));
  }, [count]);

  return (
    <>
      <Background
        width={`${50 / parseInt(no)}px`}
        height={`${50 / parseInt(no)}px`}
        style={
          no == 2
            ? { backgroundImage: `url(${backgroundImg2})` }
            : no == 3
            ? { backgroundImage: `url(${backgroundImg3})` }
            : { backgroundImage: `url(${backgroundImg1})` }
        }
      >
        {/* top */}
        <section className="Top">
          <div>
            Stage <span>{no}</span>
          </div>
          <div>
            {/* Timer */}
            <Timer mm={0} ss={4} count={count} />
          </div>
          <div>
            Score <span style={{ color: yellow }}>{count}</span>
          </div>
        </section>
        {/* middle */}
        <section className="Playing">
          <div
            className="star"
            onClick={onIncrease}
            style={{
              position: "absolute",
              top: top,
              left: left,
              right: right,
              bottom: bottom,
            }}
          ></div>
        </section>
        {/* bottom */}
        <section className="Bottom">
          <Link to="/">
            <span className="exitBtn">Exit</span>
          </Link>
        </section>
      </Background>
      <Music />
    </>
  );
}

export default Game;
