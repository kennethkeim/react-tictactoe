import React from "react";
import Game from "./Game/Game";

export default function App() {
  return (
    <div className="page">
      <div className="pageContent">
        <header>
          <h1>TicTacToe</h1>
        </header>

        <Game></Game>
      </div>
    </div>
  );
}
