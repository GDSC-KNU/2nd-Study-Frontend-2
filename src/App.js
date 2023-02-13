import React from "react";
import { Route, Routes } from "react-router-dom";
import Gamestart from "./Gamestart";
import GameOver from "./GameOver";
import GameAllClear from "./GameAllClear";
import Game from "./Game";
import StageClear from "./StageClear";
import MediaQuery from "react-responsive";
import Music from "./Music";

function App() {
  localStorage.setItem("score1", 0);
  localStorage.setItem("score2", 0);
  localStorage.setItem("score3", 0);
  return (
    <>
      {/* pc */}
      <MediaQuery minWidth={1024}>
        <Music />
        <Routes>
          <Route path="/" element={<Gamestart minWidth={1024} />} />
          <Route path="/game/:no" element={<Game minWidth={1024} />} />
          <Route path="/GameOver" element={<GameOver />} />
          <Route
            path="/GameAllClear"
            element={<GameAllClear minWidth={1024} />}
          />
          <Route path="/stageClear/:no" element={<StageClear />} />
        </Routes>
      </MediaQuery>

      {/* mobile */}
      <MediaQuery minWidth={370} maxWidth={1023}>
        <Music />
        <Routes>
          <Route path="/" element={<Gamestart minWidth={450} />} />
          <Route path="/game/:no" element={<Game minWidth={370} />} />
          <Route path="/GameOver" element={<GameOver />} />
          <Route
            path="/GameAllClear"
            element={<GameAllClear minWidth={450} />}
          />
          <Route path="/stageClear/:no" element={<StageClear />} />
        </Routes>
      </MediaQuery>
    </>
  );
}

export default App;
