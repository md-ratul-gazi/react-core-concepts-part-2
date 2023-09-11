import { useEffect, useState } from "react";

export default function Users() {
  // 1. Declare a state to hold a data
  const [users, setUsers] = useState([]);
  // 2.Use effect with call back and dependency array.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h3>Users: {users.length}</h3>
    </div>
  );
}

/**
 * 1. Declare a state to hold a data.
 * 2.Use effect with call back and dependency array.
 */
