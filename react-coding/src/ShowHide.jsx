import React, {useState} from 'react';

function ShowHide() {

  const [show, SetShow] = useState(false);

  return(
    <div className='mt-4'>
    
<input type={show ? "text" : "password"} />

<button onClick={() => SetShow(!show)}>
  {show ? "Hide" : "Show"}
</button>

    </div>
     
  )
}
export default ShowHide;