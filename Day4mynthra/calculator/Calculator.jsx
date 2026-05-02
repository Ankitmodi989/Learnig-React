import React, { useState } from 'react'
import "./calculator.css"

const Calculator = () => {

    const[inputvalue,setInputvalue] = useState("");

    function display(value){
      setInputvalue(inputvalue+value);
    }

    function calculate(){
      try{
      var ans=eval(inputvalue);
      setInputvalue(ans);
      }
      catch(e){
        setInputvalue("Error")
      }
    }
    function clear(){
      setInputvalue("");
    }


  return (
    <div className= "cal">
    <input type="text"  value={inputvalue}/>
    <div className='but'> 
     <span className="clear" onClick={() => clear()}>
        c
      </span>
      <span onClick={() => display("/")}>/</span>
      <span onClick={() => display("*")}>*</span>
      <span onClick={() => display("7")}>7</span>
      <span onClick={() => display("8")}>8</span>
      <span onClick={() => display("9")}>9</span>
      <span onClick={() => display("-")}>-</span>
      <span onClick={() => display("4")}>4</span>
      <span onClick={() => display("5")}>5</span>
      <span onClick={() => display("6")}>6</span>
      <span className="plus" onClick={() => display("+")}>
        +
      </span>
      <span onClick={() => display("1")}>1</span>
      <span onClick={() => display("2")}>2</span>
      <span onClick={() => display("3")}>3</span>
      <span onClick={() => display("0")}>0</span>
      <span onClick={() => display("00")}>00</span>
      <span onClick={() => display(".")}>.</span>
      <span className="equal" onClick={() => calculate()}>
        =
      </span>
      </div>
    </div>
    
  )
}

export default Calculator