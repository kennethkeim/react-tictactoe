import React from "react";

// React convention: use on[Event] names for props which represent events
export default function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}
