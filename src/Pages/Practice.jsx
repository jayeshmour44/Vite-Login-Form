import React, { useState, useRef } from "react";

export default function Example() {
  const [count, setCount] = useState(0);   // Causes re-render
  const refCount = useRef(0);              // Does NOT re-render

  const handleState = () => {
    setCount(count + 1);   // UI updates
  };

  const handleRef = () => {
    refCount.current += 1; // UI will NOT update
    console.log("Ref Count:", refCount.current);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>useState vs useRef Example</h2>

      <p><b>State Count: </b>{count}</p>
      <p><b>Ref Count (won't update UI): </b>{refCount.current}</p>

      <button onClick={handleState}>Increase useState</button>
      <button onClick={handleRef} style={{ marginLeft: "10px" }}>
        Increase useRef
      </button>
    </div>
  );
}
