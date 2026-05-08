import React from 'react'
import { useState } from 'react'



function CounterApp() {
    const [count, setCount] = useState(0)
  return (
    <div>

    <button className="btn btn-primary ms-3 mt-3" onClick={()=>setCount(count + 1)}  >Increment</button>

    <button className="btn btn-danger ms-3 mt-3" onClick={() => setCount(count - 1)}>Decrement</button>
    <button className="btn btn-success ms-3 mt-3" onClick={() => setCount(0)}>Reset</button>
      <p className='mt-4 ms-4 text-primary ' >{count}</p>
    </div>
  )
}

export default CounterApp
