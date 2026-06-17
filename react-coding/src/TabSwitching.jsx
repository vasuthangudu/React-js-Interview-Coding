import React,{useState} from "react";

function App(){

  const[tab,setTab] = useState("home") 

return(
  <div>
  <button onClick={()=>setTab("home")}>home</button>
  <button onClick={()=>setTab("about")}>about</button>

  {tab === "home" && <h1>home</h1>}
  {tab === "about" && <h1>about</h1>}
  </div>
)

}
export default App;