import React from 'react'

const Colors = ({setColor}) => {
   const name = "color";
  const value = "all";

  const handleChange = (e) => {
    setColor(e.target.value);
  }
  return (
  <div style={{paddingTop:"50px"}}>
  <h3>Color</h3>

  <div className="sidebar-label-container" style={{width:"100px",display:"flex",gap:"10px",margin:"6px 0",flexDirection:"column"}}>
    <label>
      <input type="radio" name="price" value="all" onChange={handleChange}  />
      All
    </label>

    <label>
      <input type="radio" name="price" value="black" onChange={handleChange} style={{color:"black"}}/>
      Black
    </label>

    <label>
      <input type="radio" name="price" value="red" onChange={handleChange} />
      Red
    </label>

    <label>
      <input type="radio" name="price" value="blue" onChange={handleChange} />
      Blue
    </label>

    <label>
      <input type="radio" name="price" value="green" onChange={handleChange} />
      Green
    </label>
     <label>
      <input type="radio" name="price" value="white" onChange={handleChange} />
     White
    </label>
  </div>
</div>
  )
}

export default Colors