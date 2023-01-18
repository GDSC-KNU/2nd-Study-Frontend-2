import React from "react";
import { Route, Routes } from "react-router-dom";
import Gamestart from "./Gamestart";
import GameOver from "./GameOver";
import GameAllClear from "./GameAllClear";
import Game from "./Game";
import StageClear from './StageClear';


function App() {
  localStorage.setItem("score1", 0);
  localStorage.setItem("score2", 0);
  localStorage.setItem("score3", 0);
  return (
    <Routes>
      <Route path="/" element={<Gamestart />} />
      <Route path="/game/:no" element={<Game />} />
      <Route path="/GameOver" element={<GameOver />} />
      <Route path="/GameAllClear" element={<GameAllClear />} />
      <Route path="/stageClear/:no" element={<StageClear />} />
    </Routes>
  );
}

export default App;
