import React from 'react'

// const App = () => {
//   return <User name = "Ankit Modi"  age={25} isMarried = {false}></User>// using prop u can pass the information to the user function from parent function to child function 
// }
// first way to access props
// const User = (props) => {
//     console.log(props);
//     return <section>
//         <h1>Name :{props.name}</h1>
//         <h2>Age: {props.age}</h2>
//     </section>
// }

// second way to access props
const User =({name,age,isMarried}) => {
    return <section>
        <h1>Name :{name}</h1>
        <h2>Age: {age}</h2>
        <h3>Married: {isMarried ? "Yes" : "No"}</h3>
    </section>
}
// third way to access props
// if ur User in call in html format then how to access it using this way
const App = () => {
    const styles = {color: "white", backgroundColor:"crimson",padding:"2rem"};
    return <div>
        <User>
            <h1 style={styles}>Hello Ankit Modi</h1>
            <h2>How are u </h2>
        </User>
    </div>
}
// the way to access the prop is 
const user = (props)=>{
        return <section>
            <div>{props.children}</div>
        </section>
}
export default App