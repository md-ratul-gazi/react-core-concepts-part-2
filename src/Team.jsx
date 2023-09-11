import { useState } from "react";

export default function Team() {
  /*  function useState(num) {
    function setCount(value) {
      num = value;
    }
    return [num, setCount];
  } */

  const [count, setCount] = useState(11);

  // Add player
  const handleAdd = () => {
    const newPlayer = count + 1;
    setCount(newPlayer);
  };

  // Reduce player
  const handleReduce = () => {
    if (count > 11) {
      const reducePlayer = count - 1;
      setCount(reducePlayer);
    }
  };

  const teamStyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };

  return (
    <div style={teamStyle}>
      <h3>Player: {count} </h3>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={handleAdd}>Add </button>
        <button onClick={handleReduce}>Remove</button>
      </div>
    </div>
  );
}
