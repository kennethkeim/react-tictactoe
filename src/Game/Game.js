import React, { useState } from "react";
import "./Game.css";
import { calculateWinner } from "./shared/calculateWinner";

// React convention: use on[Event] names for props which represent events
function Square({ value, onSquareClick }) {
  const bg = "#d5b85a";

  return (
    <button
      onClick={onSquareClick}
      className="square"
      style={{ backgroundColor: bg }}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  const x = "X";
  const o = "O";

  // React convention: use handle[Event] names for the function definitions which handle the events
  function handleSquareClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const newSquareArr = [...squares];

    if (xIsNext) {
      newSquareArr[i] = x;
    } else {
      newSquareArr[i] = o;
    }

    onPlay(newSquareArr);
  }

  // interesting that the inner function causes the outer to re-render
  // also interesting that the react tutorial doesn't use a state property for the "status" variable
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? x : o);
  }

  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  return (
    <article>
      <div className="status">{status}</div>
      {rows.map((row, i) => (
        <div className="board-row" key={`row-${i}`}>
          {row.map((cell) => (
            <Square
              key={cell}
              value={squares[cell]}
              onSquareClick={() => handleSquareClick(cell)}
            ></Square>
          ))}
        </div>
      ))}
    </article>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(newSquareArr) {
    const historyPrecedingCurrentPlay = history.slice(0, currentMove + 1);
    const nextHistory = [...historyPrecedingCurrentPlay, newSquareArr];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />

      <aside className="game-info">
        <ol>{moves}</ol>
      </aside>
    </div>
  );
}
