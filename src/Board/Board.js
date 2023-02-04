import React, { useState } from "react";
import "./Board.css";

function Square() {
  const inactiveBg = "#d5b85a";
  const activeBg = "#fcd12a";
  const [value, setValue] = useState("");
  const [bg, setBg] = useState(inactiveBg);

  function onClick() {
    setValue("X");
    setBg(activeBg);
  }

  return (
    <button
      onClick={onClick}
      className="square"
      style={{ "background-color": bg }}
    >
      {value}
    </button>
  );
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
