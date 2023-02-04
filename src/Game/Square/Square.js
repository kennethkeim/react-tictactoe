import React from "react";

// React convention: use on[Event] names for props which represent events
export default function Square({ value, onClick, name }) {
  return (
    <button onClick={onClick} className="square" name={name}>
      {value}
    </button>
  );
}
