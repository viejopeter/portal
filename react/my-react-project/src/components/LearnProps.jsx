

// function LearnProps(props) {
//   return (
//     <>
//     <h2>Props</h2>
//     <h3>Stock: {props.stock}</h3>
//     <h3>Price: {props.price}</h3>
//     </>
//   )
// }


function LearnProps({stock, price}) {
  return (
    <>
    <h2>Props</h2>
    <h3>Stock: {stock}</h3>
    <h3>Price: {price}</h3>
    </>
  )
}
export default LearnProps