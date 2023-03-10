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
      description = "Go to Move #" + move;
    } else {
      description = "Go to Game Start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)} className="jumpto-btn">
          {description}
        </button>
      </li>
    );
  });

  return (
    <main>
      <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />

      <aside className="game-info">
        <ol>{moves}</ol>
      </aside>
    </main>
  );
}
