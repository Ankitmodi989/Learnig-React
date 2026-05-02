import React, { useState } from 'react'
import ComponentTwo from './ComponentTwo';
import ComponentOne from './ComponentOne';


const Exa1 = () => {
    const[count,setCount] = useState(0);

    const handler = ()=>{

    }
  return (
  <section>
        <h1>Counter : {count}</h1>
        <ComponentOne count={count} handler={()=>setCount(count+1)}></ComponentOne>
        <ComponentTwo count={count}  handler={()=>setCount(count-1)}></ComponentTwo>
        
  </section>
  )
}

export default Exa1