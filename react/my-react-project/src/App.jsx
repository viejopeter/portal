import HelloWorld from './components/HelloWorld.jsx';
import LearnReact from './components/LearnReact.jsx';
import LearnJSX from './components/LearnJSX.jsx';
import LearnProps from './components/LearnProps.jsx';
import LearnEvent from './components/LearnEvent.jsx';
import LearnLiftingStateUp from './components/LearnLiftingStateUp.jsx';
import LearnUseState from './components/LearnUseState.jsx';
import CounterApp from './components/CounterApp.jsx';
import LearnUseEffect from './components/LearnUseEffect.jsx';
import LearnUseMemo from './components/LearnUseMemo.jsx';
import ChildA from './components/ChildA.jsx';
import ChildC from './components/ChildC.jsx';
import {createContext,useState} from 'react';
import LearnUseRef from './components/LearnUseRef.jsx';
import LearnCustomHooks from './components/LearnCustomHooks.jsx';
import LearnConditionalRendering from './components/LearnConditionalRendering.jsx';
import Exercise from './components/Exercise.jsx';
import LearnMap from './components/LearnMap.jsx';
import TaskManager from './components/TaskManager.jsx';
import LearnInlineCSS from './components/LearnInlineCSS.jsx';


const StockContext = createContext();
const UserContext = createContext();

function App() {

  const [userData, setUserData] = useState({name:"Pedro",age:35})

  let stock = "Microsoft";
  let price = 300;

  const getStock = (data) => {
    console.log(data)
  }

  


  return (
    <>
    {/* <h1>App Component</h1> */}
    {/* {<HelloWorld />} */}
    {/* {<LearnReact />} */}
    {/* <LearnJSX /> */}
    {/* <LearnProps stock="Apple" price={price} /> */}
    {/* <LearnEvent /> */}
    {/* <LearnLiftingStateUp getStock={getStock} /> */}
    {/* <LearnUseState /> */}
    {/* <CounterApp /> */}
    {/* <LearnUseEffect /> */}
    {/* <LearnUseMemo />  */}
    {/* <StockContext.Provider value={{stock,price}}>
       <UserContext.Provider value={{userData, setUserData}}>
          <ChildC />
       </UserContext.Provider>
    </StockContext.Provider> */}
    {/* <LearnUseRef /> */}
    {/* <LearnCustomHooks /> */}
    {/* <LearnConditionalRendering /> */}
    {/* <Exercise /> */}
    {/* <LearnMap /> */}
    {/* <TaskManager /> */}
    <LearnInlineCSS />

    </>
  )
}

export default App

export {StockContext,UserContext}


