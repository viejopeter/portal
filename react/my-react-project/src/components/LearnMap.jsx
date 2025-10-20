import React from 'react'

const LearnMap = () => {
  
  const customers = [{name: "David",age:20},{name:"Andy",age:58},{name:"Ken",age:52}]  

  return (
    <>
      <h1>Learning Map</h1>
      <ul>
        {customers.map(
            
            (customer,index) => 
                customer.age > 21 && <li key={index}>{customer.name}</li>
            )}
      </ul>
    </>
  )
}

export default LearnMap