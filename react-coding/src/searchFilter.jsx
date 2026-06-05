import React,{useState} from 'react';

function App(){

  const [search,setSearch] = useState("");

  const users = ["vasu","hasini","ramesh","anil"]

  const filterdata = users.filter((user)=>{
    return user.toLowerCase().includes(search.toLowerCase())
  })

return(
  <div>
  
  <input type="text" onChange={(e)=>setSearch(e.target.value)}/>

  {
    filterdata.map((item,index)=>(
      <h1 key={index}>{item}</h1>
    ))
  }

  </div>
)

}

export default App;