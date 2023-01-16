import React from "react";
import { Route, Switch } from "react-router-dom";
import Gamestart from "./Gamestart";
import GameOver from "./GameOver";
import GameAllClear from "./GameAllClear";


function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Gamestart />
        </Route>
        <Route path="/GameOver">
          <GameOver />
        </Route>
        <Route path="/GameAllClear">
          <GameAllClear />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
