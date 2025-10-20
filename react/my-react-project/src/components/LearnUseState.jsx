import {useState} from 'react'

const LearnUseState = () => {
  const [num,setNum] = useState(5);
  console.log(num)
  
  const handleClick = () => {
    setNum(10);
    
  }

 const [stockPrice, setStockPrice] = useState({stock: "Microsoft", price: 400});
console.log(stockPrice);
 
 const updateStockPrice = () => setStockPrice({...stockPrice, price: 450});

  return (
    <>  
      <h1>Learn useState Hook {num}</h1>
      <button onClick={handleClick}>Click Me</button>
      <hr />
      <h2>Stock: {stockPrice.stock}</h2>
      <h2>Price: {stockPrice.price}</h2>
      <button onClick={updateStockPrice}>Update Stock Price</button>
    </>
  )
}

export default LearnUseState