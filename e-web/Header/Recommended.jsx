import React, { useState } from 'react'
import data from './db'

function Card({ img, title, reviews, prevPrice, newPrice }) {
  return (
    <div className='card' style={{margin:"10px",height:"250px",width:"200px"}}>
      <img src={img} alt={title} style={{height:"150px", width:"200px"}} />
      <h3 >{title}</h3>
      <p>{reviews}</p>
      <p><s>{prevPrice}</s> ${newPrice}</p>
    </div>
  )
}

const Recommended = ({price,color}) => {

  const [value,setValue]= useState("");
  console.log(value);

  const handler = (value)=>{
        setValue(value)
  }

   const filterByPrice = (item) => {
    const p = Number(item.newPrice);

    if (price === "0-50") return p <= 50;
    if (price === "50-100") return p > 50 && p <= 100;
    if (price === "100-150") return p > 100 && p <= 150;
    if (price === "150+") return p > 150;
    return true;
  };
  const filteredData = data.filter(item =>
  (color === "all" || item.color === color) &&
  filterByPrice(item) &&
  (value === "" || item.company === value)
);

  return (
    <div className='rec_but'>
      <h2 style={{marginTop:"9px"}}>Recommended</h2>
      <button onClick={(e)=>handler(e.target.value)} value={""}>All Product</button>
      <button onClick={(e)=>handler(e.target.value)} value={"Nike"}>Nike</button>
      <button onClick={(e)=>handler(e.target.value)} value={"Adidas"}>Adidas</button>
      <button onClick={(e)=>handler(e.target.value)} value={"Puma"}>Puma</button>
      <button onClick={(e)=>handler(e.target.value)} value={"Vans"}>Vans</button> 
      <div style={{ height:"100%",width:"100%" , display:"flex",flexWrap:"wrap",padding:"0px"}}> 
        {
          filteredData.map((product, index) => {
            return <Card key={index} {...product} />
          })
        }
        </div>  
    </div>
  )
}

export default Recommended