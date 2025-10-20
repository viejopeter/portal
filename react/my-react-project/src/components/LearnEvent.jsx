


const LearnEvent = () => {
  const handleClick = () =>{
    console.log("Button Clicked");
  }
  const handleClickAgain = (param) =>{
    console.log(param);
  }
  const sum = (a,b) =>{
    console.log(a+b);
   }
    return (
    <>
      <button onClick={handleClick}>Click here</button>
      <br />
      <button onClick={() => handleClickAgain("Clicked Again")}>Click Again</button>
    <button onClick={() => sum(1,3)}>New</button>
    </>
  )
}

export default LearnEvent