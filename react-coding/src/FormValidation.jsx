import React from 'react'
import { useState } from 'react'

function App() {
  
  const [email,setEmail] = useState("")

  const handleSubmit = (e) => {
   
    if(email === ""){
      alert ("Please enter your email")
    }else{
      alert (`Your email is ${email}`)
    }
  }

  return (
    <div className='mt-4 ms-4'>
      <form>
      <input type="email" 
      placeholder="Enter your email"
      onChange={(e)=> setEmail(e.target.value)}
      />


      <button  onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default App
