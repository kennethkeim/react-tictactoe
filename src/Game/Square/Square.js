import React from "react";
import "./Square.css";

// React convention: use on[Event] names for props which represent events
export default function Square({ value, onClick, nextValue, winner, name }) {
  const buttonContent = value ? (
    <span className="value">{value}</span>
  ) : (
    <span className="instructions">{`Enter ${nextValue}`}</span>
  );

  return (
    <button
      onClick={onClick}
      className="square"
      disabled={value || winner}
      // aria label is like the visible text but more detailed
      aria-label={value || `Enter "${nextValue}" on Tile ${name}`}
    >
      {buttonContent}
    </button>
  );
}
