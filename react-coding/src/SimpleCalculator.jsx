import React,{useState} from 'react'

function App(){

  const[a,setA] = useState(0);
  const[b,setB] = useState(0);

return(

  <div>

    <input
    type="number"
    onChange={(e)=> setA(Number(e.target.value))}
    />

    <input 
    type="number"
    onChange={(e) => setB(Number(e.target.value))}
    />


    <div>add{a+b}</div>
    <div>mun{a*b}</div>
    <div>dev{a-b}</div>
  </div>

)


}

 export default App;