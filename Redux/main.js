import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; 
import stores from "./component/stores";
import Counting from "./component/counting";
import Card from "./component/card";
import Header from "./component/Header";

function App(){
  return (

    <Provider store={stores}>
      <Header></Header>
      <Card></Card>
    </Provider>
  
  )
}




ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);