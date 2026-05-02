import React,{useState} from "react";
import ReactDOM from "react-dom/client"
// import Card from "./components/card";
// import Header from "./components/header";
// import Footer from "./components/footer";
// import arr from "./components/utilise";
import Calculator from "./calculator/Calculator";


const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {

    // const [A ,setprice]=useState(arr)
    // function price(){
         
    //     A.sort((a,b)=>a.price-b.price);
    //     setprice([...A]);

    // }
    // function filter(){

    //     const b =A.filter((value)=>value.price>1000);
    //     setprice(b);
        
    // }
    return (
        <>
            {/* <Header/>
            <button style={{marginTop:"30px",height:"50px",width:"100px"}} onClick={price}>Price</button>
            <button style={{marginTop:"30px",height:"50px",width:"100px"}} onClick={filter}> filter</button>
            <div style={{display:"flex",gap:"10px",justifyContent:"center",flexWrap:"wrap",backgroundColor:"rgb(176, 225, 232)",padding:"20px",marginTop:"30px"}}>
            {
                A.map((value,index)=> <Card key={index} cloth={value.item} offer={value.offer} range={value.range} price={value.price}/>)
            }
            </div>
        
            <Footer/> */}
            <Calculator></Calculator>
        </>
    );
}

root.render(<App/>);