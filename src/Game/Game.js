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
    if (squares[i] || winner) return;

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

  return (
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
