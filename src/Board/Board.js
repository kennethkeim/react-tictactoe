import React from "react";
import "./Board.css";

function Square() {
  return <button className="square">X</button>;
}

export default function Board() {
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
