import useCounter from "../hooks/useCounter"

const LearnCustomHooks = () =>{
    
    const {count,increase,decrease,reset} = useCounter();

    return(
        <>
        <h1>Learn Custom Hooks</h1>
        <h2>Count {count}</h2>
        <button onClick={increase}>Increment</button>
        <button onClick={decrease}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}

export default LearnCustomHooks