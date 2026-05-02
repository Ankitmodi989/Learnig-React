import React from "react";
import ReactDOM from "react-dom/client";
import Calculator from "./calculator/Calculator.jsx";



// *********************************************************//
// const Move = () =>{
//   function moveHandler(){
//     alert("Mouse move event fired");
//     console.log("Mouse move event fired");
//   }

//   return (
//     <p onMouseMove={moveHandler}>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//        Quae perferendis aut quas amet rerum veritatis voluptatem beatae veniam blanditiis quaerat?
//     </p>
//   );
// };
// ***************************************************//

const App = () => {

  return (
    <> 
    <Calculator></Calculator>
    </>
  )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)


// STATE-> state is a way to store and manage data that can change over time and effect how the component render.
// HOOKS-> Hooks are a new addition in React 16.8 They let you use state and React features without writing a class.
// useState-> allows us to track state in a fuctional component.