import React, { children } from 'react'
import { useState } from 'react'
import TaskContext from './TaskContext'

const TaskProvider = ({children}) => {
    const [tasks, setTask] = useState([
        { id: 1, task: "Complete JavaScript assignment", isDone: true },
        { id: 2, task: "Prepare for the meeting", isDone: false },
        { id: 3, task: "Buy groceries", isDone: false },
        { id: 4, task: "Read a chapter of the book", isDone: false },
        { id: 5, task: "Go for a run", isDone: false }
    ]);
    
    const addTask = (newTask) => {
      setTask([...tasks, newTask]);
    };
    
    const removeTask = (id) => {
      
      setTask(tasks.filter((task) => task.id !== id));
    };
    
    const doneTask = (id) => {
      setTask(tasks.map((el)=>el.id ===id ? {...el,isDone:!el.isDone}:el));
    };
    


  return (
    <TaskContext.Provider value={{tasks, addTask, removeTask, doneTask}}>{children}</TaskContext.Provider>
  )
};

export default TaskProvider