import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        onChange={(e) => setName(e.target.value)}
      />

      <button disabled={!name}>
        Submit
      </button>
    </>
  );
}

export default App;