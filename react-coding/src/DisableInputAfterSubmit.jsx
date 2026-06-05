import React, { useState } from "react";

function App() {
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <input disabled={disabled} />

      <button
        onClick={() => setDisabled(true)}
      >
        Submit
      </button>
    </div>
  );
}

export default App;