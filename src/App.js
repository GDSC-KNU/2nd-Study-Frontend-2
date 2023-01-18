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
    // <div>
    //   <Routes>
    //     <Route path="/" exact>
    //       <Gamestart />
    //     </Route>
    //     <Route path="/GameOver">
    //       <GameOver />
    //     </Route>
    //     <Route path="/GameAllClear">
    //       <GameAllClear />
    //     </Route>
    //   </Routes>
    // </div>
  );
}

export default App;
