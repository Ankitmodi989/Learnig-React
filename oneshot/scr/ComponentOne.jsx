import React, { useState } from 'react'

const ComponentOne = ({count,handler}) => {
 
  return (
    <section>
      <button onClick={handler}>increment</button>
    </section>
  )
}

export default ComponentOne