import React from "react";
import "./Tictactoe.css";

function Square() {
  return <button className="square">X</button>;
}

export default function Tictactoe() {
  return (
    <article>
      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
    </article>
  );
}
