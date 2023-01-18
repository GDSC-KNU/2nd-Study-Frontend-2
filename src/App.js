import React from "react";
import { Route, Routes } from "react-router-dom";
import Gamestart from "./Gamestart";
import GameOver from "./GameOver";
import GameAllClear from "./GameAllClear";
import Game from "./Game";
import StageClear from './StageClear';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Gamestart />} />
      <Route path="/game" element={<Game />} />
      <Route path="/GameOver" element={<GameOver />} />
      <Route path="/GameAllClear" element={<GameAllClear />} />
      <Route path="/stageClear1" element={<StageClear />} />
    </Routes>
  );
}

export default App;
