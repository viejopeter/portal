import {useState} from "react"

const TaskManager = () => {
    
    const [tasks,setTask] = useState([
        { id: 1, title: "Buy groceries", completed: false },
        { id: 2, title: "Clean room", completed: true },
        { id: 3, title: "Pay bills", completed: false }
    ]);
     const [showOnlyCompleted,setShowOnlyCompleted] = useState(false)

    const handleTaskCompleted = (index) =>{
           setTask(prevTask=>
                prevTask.map(
                    (task,i) => 
                        i === index ? {...task,completed: !task.completed}: task
                )
           )
    }
    
    const renderedTaks = showOnlyCompleted ? tasks.filter((task) => task.completed) : tasks
   

    return(
        <>
        <h1>Welcome to the task Manager</h1>
        <h2>My tasks</h2>
        <button onClick={()=>setShowOnlyCompleted(!showOnlyCompleted)}>
            {showOnlyCompleted ? "Show All": "Only Completed"}</button>
        <ul>
            {renderedTaks.map(
                (task,index) => (
                  <li key={index}>{task.title}
                  {task.completed ===true && "✅"} 
                  <button key={index} onClick={() => handleTaskCompleted(index)}>Task completed</button>
                  </li>
                )
            )}
        </ul>
        </>
    )
}

export default TaskManager;