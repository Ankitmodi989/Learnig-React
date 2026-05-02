import React from 'react'
import Recommended from '../Header/Recommended';

const Price = ({setPrice}) => {

  const name = "price";
  const value = "all";

  const handleChange = (e) => {
   setPrice(e.target.value);
  }
  return (
  <div style={{paddingTop:"140px"}}>
  <h3>Price</h3>

  <div className="sidebar-label-container" style={{width:"100px",display:"flex",gap:"10px",margin:"6px 0",flexDirection:"column"}}>
    <label>
      <input type="radio" name="price" value="all" onChange={handleChange} />
      All
    </label>

    <label>
      <input type="radio" name="price" value="0-50" onChange={handleChange} />
      $0-50
    </label>

    <label>
      <input type="radio" name="price" value="50-100" onChange={handleChange} />
      $50-100
    </label>

    <label>
      <input type="radio" name="price" value="100-150" onChange={handleChange} />
      $100-150
    </label>

    <label>
      <input type="radio" name="price" value="150+" onChange={handleChange} />
      Over $150
    </label>
  </div>
</div>

  )
}

export default Price