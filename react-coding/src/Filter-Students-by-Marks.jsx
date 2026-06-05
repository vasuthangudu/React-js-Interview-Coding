import React from "react";

function App(){

const students = [
    { name: "Ravi", marks: 80 },
    { name: "Ajay", marks: 50 }
  ];

const resule = students.filter(
  (s) => s.marks > 40
) 


  return(

    <div>
    {resule.map((m)=>(
      <h1>{m.name}</h1>
  ))}
    </div>

  )
}

export default App;