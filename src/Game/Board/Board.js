import { calculateWinner } from "../shared/calculateWinner";
import React from "react";
import Square from "../Square/Square";

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
              name={cell + 1}
              value={squares[cell]}
              onClick={() => handleSquareClick(cell)}
            ></Square>
          ))}
        </div>
      ))}
    </article>
  );
}
