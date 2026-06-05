



import React, {useState} from 'react';

function App(){

  const [data,setdata] = useState(false)

  return(

    <div>
    <button onClick={(e)=>setdata(!data)}>click</button>

    <h1>{data ? "react js is ui framework" : "what is react js?"}</h1>

    </div>

  )
}

export default App;