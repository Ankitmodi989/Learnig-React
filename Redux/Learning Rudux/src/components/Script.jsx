// import React from 'react'

// let state = {
//      count: 0
// }

// function increase (){
//      // **mutating state
//      // state.count = state.count + 1


//      // **Not mutating state***
//      state = {count : state.count + 1}
// }
// increase();

// console.log(state)

// const Script = () => {

//   return (
//     <div>hello</div>
//   )
// }

// export default Script

// import React from "react";
import {createStore} from "redux";

// const initialstate ={
//     count: 0,
//     name: "Ankit Modi"
// }

// const INCREMENT = 'post/increment';
// const DECREMENT = 'post/decrement';

// // **Reducer
// function reducer(state = initialstate,action){
//   switch(action.type){
//     case INCREMENT:
//       return {...state,count: state.count + 1}
//     case DECREMENT:
//       return {...state,count: state.count - 1}
//     default :
//       return state;
//   }
// }

// let store = createStore(reducer)

// store.subscribe(()=> console.log(store.getState()))

// store.dispatch({type: INCREMENT})
// store.dispatch({type: DECREMENT})
// store.dispatch({type: DECREMENT})
// store.dispatch({type: DECREMENT})

// const Script = () => {
//   return (
//     <div>{store.getState().count}</div>
//   )
// }

// export default Script


import React from 'react'
import { myCreateStore } from "./my-redux";


const Script = () => {

  const  initialState = {
    post :0,
    name: "Ankit Modi",
    age: 26,
}

function reducer(state = initialState, action) {
  if (action.type === 'post/increase')
    return { ...state, post: state.post + 1 };
  else if (action.type === 'post/decrease')
    return { ...state, post: state.post - 1 };
  else if (action.type === 'post/incrementBy')
    return { ...state, post: state.post + action.payload };
  else if (action.type === 'post/decrementBy')
    return { ...state, post: state.post - action.payload };
  else
    return state;
}
//  const store = createStore(
//    reducer,__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// console.log(store)
// console.log(store.getState());
const mystore = myCreateStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(mystore);

mystore.subscribe(()=>{
  console.log(mystore.getState());
})
// mystore.subscribe(()=>{
//   console.log('helli');
// })

mystore.dispatch({type: 'post/decrease'})
mystore.dispatch({type: 'post/increase'})

  return (
    <div>Script</div>
  )
}

export default Script