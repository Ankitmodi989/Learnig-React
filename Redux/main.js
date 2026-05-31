// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux"; 
// import stores from "./component/stores";
// import Counting from "./component/counting";
// import Card from "./component/card";
// import Header from "./component/Header";

// function App(){
//   return (

//     <Provider store={stores}>
//       <Header></Header>
//       <Card></Card>
//     </Provider>
  
//   )
// }




// ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);


// let state = {
//      count: 0
// }

// function increase (){
//      // **mutating state
//      state.count = state.count + 1


//      // **Not mutating state***
//     //  state = {count : state.count + 1}
// }
// increase();
// console.log(state)
// const prevState = state;
// increase();
// console.log(state);
// increase();
// console.log(state);
// console.log(prevState === state); // it print false in case of immutation in mutation case it return true;



let reduxstate  = {
        count : 0,
        name : "Ankit Modi"
}

function reducer(state,action){
  return {...state,count:state.count+1}
}

let action  = {
      type: 'increase'
}
// what will redux will do

console.log(reducer(reduxstate,{type : 'post/increase'}))