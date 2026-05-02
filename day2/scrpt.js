
// const header1=document.createElement('h1');
// header1.innerHTML="Hello coder army";
// header1.style.backgroundColor="blue";
// header1.style.fontSize="30px";
// header1.style.color="white";

// let header2=document.createElement("h2");
// header2.innerHTML="Hello coder army";
// header2.style.backgroundColor="blue";
// header2.style.fontSize="30px";
// header2.style.color="white";


// let root =document.querySelector("#root");
// root.append(header1);
// root.append(header2);


// react is a object 
// const react ={
    
//     createElement: function(tag, styles, children) {
//       const element = document.createElement(tag);
    
//         if(typeof children === 'object'){
//             for(let val of children)
//                 element.append(val);
//         }
//         else
//             element.innerText = children;
        
//          for(let key in styles){
//          element.style[key]=styles[key];
//     }

//       return element;

//     }
// }

// // reactdom is a object
// const reactdom ={
//     render: function(element,root){
//         root.append(element);

//     }
// }

// const header1=react.createElement('h1',{fontSize: "30px",backgroundColor:"blue",color:"green"},"Hello Coder Army ");
// const header2=react.createElement('h2',{},"Kaise ho aap sab log");

// const li1 =react.createElement('li',{},"HTML");
// const li2 =react.createElement('li',{},"css");
// const li3 =react.createElement('li',{},"java");

// const ul =react.createElement('ul',{},[li1,li2,li3])


// //unorder list 


// reactdom.render(header1,document.getElementById('root'));
// reactdom.render(header2,document.getElementById('root'));
// reactdom.render(ul,document.getElementById('root'));



//react in cdn lnk using libreary
// Make sure to include the following scripts in your HTML file, not in JS:
// <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
// <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

// Now use React and ReactDOM directly in your JS:
// let h1 = React.createElement('h1', {id:"first", className:"rahul",style:{backgroundColor:"blueviolet",color:"-moz-initial",fontSize:"100px"}}, "Hello coder army");
// const h2=React.createElement('h1', {id:"first", className:"rahul",style:{backgroundColor:"blueviolet",color:"-moz-initial",fontSize:"100px"}}, "maaja aaya mujhe");
// let reactRoot = ReactDOM.createRoot(document.getElementById('root'));

// // reactRoot.render(h1);
// // reactRoot.render(h2);//ek bar me ek hi data andar jayega 


// //<div> create
// const div1=React.createElement('div',{},[h1,h2]);
// reactRoot.render(div1);



//using new module

import React from "react";
import ReactDOM from "react-dom/client"

let h1 = React.createElement('h1', {id:"first", className:"rahul",style:{backgroundColor:"blueviolet",color:"-moz-initial",fontSize:"100px"}}, "Hello coder army muh me loge kya ");
let h2=React.createElement('h1', {id:"second", className:"rahul",style:{backgroundColor:"blueviolet",color:"-moz-initial",fontSize:"100px"}}, "maaja aaya mujhe lauda lagsun");
let reactRoot = ReactDOM.createRoot(document.getElementById('root'));

// reactRoot.render(h1);
// reactRoot.render(h2);//ek bar me ek hi data andar jayega 


//<div> create
const div1=React.createElement('div',{},[h1,h2]);
reactRoot.render(div1);


