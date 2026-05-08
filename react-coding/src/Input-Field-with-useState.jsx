import { useState } from "react";

function InputApp() {

    const[input,SetInput] = useState("")

return (
      <div className="mt-4 ms-4">
            <input className="form-control" type="text" value={input} onChange={(e) =>SetInput(e.target.value)} placeholder="Enter text"/>
            <p className="mt-4 ms-5">{input}</p>
      </div>
)
}
export default InputApp;