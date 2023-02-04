import { calculateWinner } from "../shared/calculateWinner";
import React from "react";
import Square from "../Square/Square";
import "./Board.css";

export default function Board({ xIsNext, squares, onPlay }) {
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

  return (
    <article>
      <h2 className="status">{status}</h2>
      <ol className="board-row">
        {squares.map((square, i) => (
          <Square
            key={i}
            nextValue={xIsNext ? x : o}
            winner={winner}
            name={i + 1}
            value={square}
            onClick={() => handleSquareClick(i)}
          ></Square>
        ))}
      </ol>
    </article>
  );
}
