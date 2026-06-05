import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <button
        onClick={() =>
          setNum(Math.floor(Math.random() * 100) )
        }
      >
        Generate
      </button>

      <h2>{num}</h2>
    </div>
  );
}

export default App;