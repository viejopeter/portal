import {useState,useEffect} from "react"

const Exercise = () =>{

    const [count,setCount] = useState(0);
    const [color,setBackgroundColor] = useState("grey");

    useEffect(() => {
       if (count > 0) setBackgroundColor("green");
       else if (count < 0) setBackgroundColor("red");
       else setBackgroundColor("grey");
    },[count])
    
    
    const increase = () => {
        setCount(count+1)
    } 
    
    const decrease = () =>{
        setCount(count-1)
    }

  return(
    <>
       <h1>Welcome to the exercise to display positive and negative numbers using color</h1>
       <h2 style={{background: color}}>
        
        Number: {count}

       </h2>
       <button onClick={increase}>Increase</button>
       <button onClick={decrease}>Decrease</button>
    </>
  )

}

export default Exercise;