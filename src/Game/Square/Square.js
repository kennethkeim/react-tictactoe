import React from "react";

// React convention: use on[Event] names for props which represent events
export default function Square({ value, onClick, nextValue, winner, name }) {
  const buttonContent = value ? (
    <span className="value">{value}</span>
  ) : (
    <span className="instructions">{`Enter "${nextValue}" on Tile ${name}`}</span>
  );

  return (
    <button onClick={onClick} className="square" disabled={value || winner}>
      {buttonContent}
    </button>
  );
}
