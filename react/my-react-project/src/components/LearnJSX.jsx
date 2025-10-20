import React from 'react'

// const h2Element = React.createElement("h2", null, "LearnJSX")

function LearnJSX() {
 let stock = "Apple"
  return (
    <>
        <h2>JSX</h2>
        <h2>Price: {10+20}</h2>
        <h2>Stock name: {stock}</h2>
        <h2 className={stock}>Class</h2>
    </>
  )
}

export default LearnJSX