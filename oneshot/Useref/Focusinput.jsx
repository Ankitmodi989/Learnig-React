import React, { useRef } from 'react'

const Focusinput = () => {
    const inputRef = useRef(null);

    const handleinput = ()=>{
        
    }

  return (
    <div>
        <input type="text" ref={inputRef}
        placeholder='Click the button to focus' />
        <button onClick={handleinput}> submit</button>
    </div>
  )
}

export default Focusinput