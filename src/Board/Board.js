import React, { useState } from "react";
import "./Board.css";
import { calculateWinner } from "./shared/calculateWinner";

// React convention: use on[Event] names for props which represent events
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
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  // React convention: use handle[Event] names for the function definitions which handle the events
  function handleSquareClick(i) {
    if (squares[i] || winner) return;

    const newSquareArr = [...squares];

    if (xIsNext) {
      newSquareArr[i] = "X";
    } else {
      newSquareArr[i] = "O";
    }

    setSquares(newSquareArr);
    setXIsNext(!xIsNext);

    setWinner(calculateWinner(newSquareArr));
  }

  return (
    <div className="container">
      <article>
        <div className="board-row">
          <Square
            value={squares[0]}
            onSquareClick={() => handleSquareClick(0)}
          ></Square>
          <Square
            value={squares[1]}
            onSquareClick={() => handleSquareClick(1)}
          ></Square>
          <Square
            value={squares[2]}
            onSquareClick={() => handleSquareClick(2)}
          ></Square>
        </div>
        <div className="board-row">
          <Square
            value={squares[3]}
            onSquareClick={() => handleSquareClick(3)}
          ></Square>
          <Square
            value={squares[4]}
            onSquareClick={() => handleSquareClick(4)}
          ></Square>
          <Square
            value={squares[5]}
            onSquareClick={() => handleSquareClick(5)}
          ></Square>
        </div>
        <div className="board-row">
          <Square
            value={squares[6]}
            onSquareClick={() => handleSquareClick(6)}
          ></Square>
          <Square
            value={squares[7]}
            onSquareClick={() => handleSquareClick(7)}
          ></Square>
          <Square
            value={squares[8]}
            onSquareClick={() => handleSquareClick(8)}
          ></Square>
        </div>
      </article>

      <aside>
        <p>Winner: {winner}</p>
      </aside>
    </div>
  );
}
