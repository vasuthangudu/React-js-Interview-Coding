import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  const addUser = () => {
    setUsers([...users, name]);
    setName("");
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addUser}>
        Add
      </button>

      {users.map((user, index) => (
        <div key={index}>
          {user}

          <button
            onClick={() => deleteUser(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default App;