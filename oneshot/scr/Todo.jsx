import React, { useState } from 'react'

const Todo = () => {
    const[list,setList] = useState(["hello"]);
    const[name,setName] = useState("");

    const handledelete = (index)=>{
        setList(list.filter((_,i) => i !== index))
    }

  return (
   <section>
    <h1>Todo list </h1>
    <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}/>

    <button onClick={()=>{setList([...list,name]),setName("")}}>Add</button>
    <ul>
    {list.map((value,index)=>(
        <li key={index}>{value}
        <button style={{padding:"3px", margin:"5px"}} onClick={()=>handledelete(index)}>delete</button>
        </li>
    ))}
    </ul>
   </section>
  )
}

export default Todo