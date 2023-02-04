import React, { useState } from "react";
import "./Game.css";
import Board from "./Board/Board";

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
