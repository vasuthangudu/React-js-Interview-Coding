import React, { useEffect } from "react";

function App() {

  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  return <h1>Hello</h1>;
}

export default App;