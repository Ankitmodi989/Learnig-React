import React, { use } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

// ********************counter*********************//

// const Usestate = () => {
//     const[count,setCount] = useState(0);
//   return (
//     <section>

//         <h1>{count}</h1>
//         <button onClick={()=>setCount(count+1)}>submit</button>
//     </section>
//   )
// }

// *********************AddList*******************//


const Usestate = () => {
    const list = ["Raj","Ankit"];
    const[add,setAdd] = useState(list);
    const[newFriend,setNewFriend] = useState("");

    const AddFriend = () => {
        if(newFriend.trim != ""){
            setAdd([...add,newFriend]);
            setNewFriend("");
        }
    };

  return (
    <section>
        {
            add.map((f,index) => (
                <li key={index}>{f}</li>
            ))
        }
        <button onClick={AddFriend}>Add your Friend</button>
        <input 
        type="text" 
        placeholder="Enter your friend name"
        value={newFriend}
        onChange={(e) => setNewFriend(e.target.value)}
         />
    </section>
  )
}
export default Usestate;