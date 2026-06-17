import React from "react";
function App(){
 const student = [
  {name:'vasu',marks:80},
  {name:'anil',marks:40}
 ] 
 const result = student.filter(
  (e) => e.marks > 60
 )
  return(
    <div>
    {result.map((s)=>(
      <h2>{s.name}</h2>
    ))}
    </div>
  )
}
export default App;