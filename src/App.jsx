import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("button clicked");
  }

  // Arrow function
  const handleClick2 = () => {
    alert("Button 2 clicked");
  };

  // A arrow function with parameter
  const addFive = (num) => {
    alert(num + 5);
  };

  return (
    // this called fragment or i can use div.
    <>
      <h1>React Core Concept Part 2</h1>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      {/* <button onclick="handleClick()">Alert</button> */}
      {/* Setting anything under onclick then need set a anonymous function under the thing like: () => {anything} */}
      <button onClick={handleClick}>Alert</button>
      <br />
      <br />
      <button onClick={handleClick2}>Alert2</button>
      {/* Normal function */}
      <button
        onClick={function handleClick4() {
          alert("Button 4 clicked");
        }}
      >
        Alert4
      </button>
      {/* JavaScript not need to declare a function under onclick when showing a alert just set(alert('Button clicked')) then it work's properly */}
      {/* Arrow function */}
      <button
        onClick={() => {
          alert("Button 3 clicked");
        }}
      >
        Alert
      </button>
      {/* A function is called when a button is clicked then an anonymous function must be set under onclick */}
      <button onClick={() => addFive(3)}>Add Five</button>
    </>
  );
}

export default App;
