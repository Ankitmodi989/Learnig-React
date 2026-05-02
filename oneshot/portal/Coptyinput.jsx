import React, { useState } from 'react'

const Coptyinput = () => {
    const[inputValue,setInputValue] = useState('');
    const[copied,setCopied] = useState(false);

    const handleCopy = ()=>{
        navigator.clipboard.writeText(inputValue).then(()=>
        setCopied(true)

    ) }
  return (
    <div>
        <input type="text " value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
         <button onClick={handleCopy}>Copy</button>
    </div>
  )
}

export default Coptyinput