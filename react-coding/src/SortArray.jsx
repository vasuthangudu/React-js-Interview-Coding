import React, { useState } from "react";

function App(){

  const [name] = useState([
         "Ravi",
    "Kiran",
    "Ajay"
  ])

const resule = [...name].sort();


  return(

    <div>
    {resule.map((m)=>(
      <h1>{m}</h1>
  ))}
    </div>

  )
}

export default App;