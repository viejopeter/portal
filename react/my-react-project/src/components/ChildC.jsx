import { useContext } from 'react'
import {StockContext,UserContext} from '../App.jsx'

const ChildC = () => {
  
  const stockData = useContext(StockContext);
  const userData = useContext(UserContext);
  
  return (
    <>
    <h1>ChildC</h1>
       {/* <StockContext.Consumer>
            {
              ({stock,price}) => {
                 return (
                       <UserContext.Consumer>
                       {
                          ({userData, setUserData}) => {

                              return (
                                    <>
                                      <h2>Stock Name: {stock}</h2>
                                      <h2>Stock Price: {price}</h2>
                                      <h2>User Name: {userData.name}</h2>
                                      <h2>User Age: {userData.age}</h2>
                                    </>  
                                )      
                          }
                       }
                       </UserContext.Consumer>
                  )
              }
            } 
       </StockContext.Consumer> */}

       <h2>Stock Name: {stockData.stock}</h2>
       <h2>User Name: {userData.userData.name}</h2>
       <button onClick={
        () => userData.setUserData({...userData.userData, name: "Luis"})
      }>
        
        Change Name

       </button>

    </>
  )
}

export default ChildC