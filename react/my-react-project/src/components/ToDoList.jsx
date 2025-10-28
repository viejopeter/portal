import {useState } from "react"

const ToDoList = () => {

    const [listTasks,setListTasks] = useState([
        {description:"Read a Book",completed:false},
        {description:"Do Assessent 2",completed:false},
        {description:"Go University",completed:true},
        {description:"Make Exercise",completed:true},
        {description:"Talk with mom",completed:true},
    ])

  const eventHandlerCheck = (index) => {
    setListTasks(
      listTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

    return(
        <>
        <h1>To Do List</h1>
        <ul>
            {listTasks.map(
                 (task,index) => (<li key={index}>
                       {task.description} - <input type="checkbox" name="taskCompleted" checked={task.completed} onChange={() => eventHandlerCheck(index)}></input>
                 </li>)
            )}
        </ul>
        </>
    )
}

export default ToDoList;