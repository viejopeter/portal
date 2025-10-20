import {useMemo, useState} from 'react'

const LearnUseMemo = () => {
  
    const [count,setCount] = useState(0);

    const [number, setNumber] = useState(10000000000);
    
    // const sumNumber = () =>{


    //             let sum = 0;
    //     for (let i=0; i<=number; i++){
    //         sum += i;
    //     }
    //     return sum;
    // }


    const sumNumber =useMemo(()=>{
        let sum = 0;
        for (let i=0; i<=number; i++){
            sum += i;
        }
        return sum;

    }, [number])


    console.log(`Sums of numbers from 1 to ${number}:`,sumNumber);
    
    const increaseCount = () => {
        
        if(count === 10){
            setNumber(999999999);
        }
        
        setCount(count + 1);
    }

    return (
    <>
       <h1>Count: {count}</h1>
       <button onClick={increaseCount}>Increase Count</button>
    </>
  )
}

export default LearnUseMemo