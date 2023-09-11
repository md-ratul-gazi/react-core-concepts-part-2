import Friend from "./Friend";
import "./Users.css"
import { useEffect, useState } from "react";


export default function Friends() {
  // Declare a state
  const [friends, setFriends] = useState([]);

  // Use effect with call back function and dependency
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setFriends(data);
    };
    fetchData(); // Call the async function
  }, []);
  return (
    <div className="box">
      <h3>Friends: {friends.length}</h3>
      {
        friends.map(friend => <Friend friend={friend}></Friend>)
      }
    </div>
  );
}

/**
 * 1. state to hold data
 * 2. useEffect with call back function and dependency array
 * 3. use fetch to load data
 * 4. set loaded data to the state
 * 5. show data in UI
 */
