import React from 'react'

const ComponentTwo = ({count,handler}) => {
  return (
    <section>
        <button onClick={handler}>decrement</button>
    </section>
  )
}

export default ComponentTwo