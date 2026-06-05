import React,{useState} from  "react";

function App(){
  
  const [email, setEmail] = useState("")

  function checkEmail(){
    if(email === ""){
      alert("Please enter your email")
    }else{
      alert("Email is valid")
    }
  }

  return(

<div>
  <input type="text" onClick={(e)=> setEmail(e.target.value)}/>
  <button onClick={checkEmail}>Click</button>
</div>

  )
}
export default App;