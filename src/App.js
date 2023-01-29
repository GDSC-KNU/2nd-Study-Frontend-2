import React from "react";
import { Route, Routes } from "react-router-dom";
import Gamestart from "./Gamestart";
import GameOver from "./GameOver";
import GameAllClear from "./GameAllClear";
import Game from "./Game";
import StageClear from "./StageClear";
import MediaQuery from "react-responsive";
function App() {
  localStorage.setItem("score1", 0);
  localStorage.setItem("score2", 0);
  localStorage.setItem("score3", 0);
  return (
    <>
      {/* pc */}
      <MediaQuery minWidth={1024} maxWidth={1279}>
        <Routes>
          <Route path="/" element={<Gamestart />} />
          <Route path="/game/:no" element={<Game />} />
          <Route path="/GameOver" element={<GameOver />} />
          <Route path="/GameAllClear" element={<GameAllClear />} />
          <Route path="/stageClear/:no" element={<StageClear />} />
        </Routes>
      </MediaQuery>

      {/* mobile */}
      <MediaQuery minWidth={450}>
        <Routes>
          <Route path="/" element={<Gamestart />} />
          <Route path="/game/:no" element={<Game />} />
          <Route path="/GameOver" element={<GameOver />} />
          <Route path="/GameAllClear" element={<GameAllClear />} />
          <Route path="/stageClear/:no" element={<StageClear />} />
        </Routes>
      </MediaQuery>
    </>
  );
}

export default App;
