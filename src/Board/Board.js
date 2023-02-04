import React, { useState } from "react";
import "./Board.css";

function Square({ value, onSquareClick }) {
  const inactiveBg = "#d5b85a";
  const activeBg = "#fcd12a";
  const [bg, setBg] = useState(inactiveBg);

  function onClick() {
    onSquareClick();
    setBg(activeBg);
  }

  return (
    <button
      onClick={onClick}
      className="square"
      style={{ backgroundColor: bg }}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleSqClick(i) {
    const newSquareArr = [...squares];
    newSquareArr[i] = "X";
    setSquares(newSquareArr);
  }

  return (
    <article>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => handleSqClick(0)}
        ></Square>
        <Square
          value={squares[1]}
          onSquareClick={() => handleSqClick(1)}
        ></Square>
        <Square
          value={squares[2]}
          onSquareClick={() => handleSqClick(2)}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => handleSqClick(3)}
        ></Square>
        <Square
          value={squares[4]}
          onSquareClick={() => handleSqClick(4)}
        ></Square>
        <Square
          value={squares[5]}
          onSquareClick={() => handleSqClick(5)}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => handleSqClick(6)}
        ></Square>
        <Square
          value={squares[7]}
          onSquareClick={() => handleSqClick(7)}
        ></Square>
        <Square
          value={squares[8]}
          onSquareClick={() => handleSqClick(8)}
        ></Square>
      </div>
    </article>
  );
}
