import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    "Ravi",
    "Rahul",
    "Kiran",
    "vasu"
  ]);

  const deleteUser = (indexValue) => {
    const newUsers = users.filter(
      (user, index) => index !== indexValue
    );

    setUsers(newUsers);
  };

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          {user}

          <button onClick={() => deleteUser(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;