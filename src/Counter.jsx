import { useState } from "react";

export default function Counter() {
  // What happened under the react useState hook or function.
  /*
 function useState(num){
    function setCount(value){
        num = value;
    }
    return [num, setCount];
 } 
 */
  const [count, setCount] = useState(0); // it called hook is react function.

  // Add number
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  // Reduce number
  const handleReduce = () => {
    const remove = count - 1;
    setCount(remove);
  };

  return (
    <div
      style={{
        border: "1px solid tomato",
        borderRadius: " 10px",
        padding: "10px",
      }}
    >
      <h3>Counter: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
