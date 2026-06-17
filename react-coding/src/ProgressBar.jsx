import React,{useState} from "react";
function App(){
  const[pro,setPro] = useState(0)
  return(
    <div>
     <progress value={pro} max='100'/>
     <button onClick={()=>setPro(pro+10)}>inc</button>
    </div>
  )
}
export default App;