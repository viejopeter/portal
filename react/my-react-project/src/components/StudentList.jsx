import React from 'react';
import { useState } from 'react';

const StudentsList = () => {
 const [students,setStudents]= useState([
   {id:1,name:"Pedro",grade:95},
   {id:2,name:"Luis",grade:74},
   {id:3,name:"Camilo",grade:80},
 ]);
 const [newStudent,setNewStudent] = useState(
   {name:"",grade:""}
 )

 const eventHandler = (e) =>{
      setNewStudent({...newStudent,[e.target.name]:e.target.value})
 }
 
 const eventSubmit = (e) => {
    e.preventDefault();
    setStudents([...students,{id: students.length + 1, name: newStudent.name,grade: newStudent.grade }])
 }
 
 return(
  <>
  <ul>
  {students.map(
    student=> 
       (<li key={student.id}>
       {student.id}. {student.name} - {student.grade}
       </li>)
  )}
  </ul>
  <br />
  <form onSubmit={eventSubmit}>
  <label htmlFor="name">
   Name:
  </label>
  <input
      type="text" 
      name="name" 
      value={newStudent.name} 
      onChange={eventHandler}
  />
  <label htmlFor="grade">   
   Grade: 
   </label>  
   <input 
      type="text" 
      name="grade"
      value={newStudent.grade}
      onChange={eventHandler}
   />
   <button 
       type="submit">
       Add Student</button>
   </form>
  </>
 );
}

export default StudentsList;