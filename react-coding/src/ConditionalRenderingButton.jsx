import React,{useState} from "react";

function App(){

  const [login, setLogin] = useState(false);

  return(
    <div>
    
    <h1>{login ? "Welcome user" : "Please login"}</h1>

   <button onClick={()=>setLogin(!login)}>Toggle</button>

    </div>
  )
}
export default App;