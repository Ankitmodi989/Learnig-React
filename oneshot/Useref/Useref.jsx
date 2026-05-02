import React, { useRef } from 'react'

const Useref = () => {
    const inputElement = useRef(null);

    const focusInput = () =>{
        inputElement.current.focus();
        inputElement.current.value = "Ankit modi"
    }
  return (
    <section>
        <input type='text' ref={inputElement}></input>
        <button onClick={focusInput}>Focus</button>
    </section>
  )
}

export default Useref