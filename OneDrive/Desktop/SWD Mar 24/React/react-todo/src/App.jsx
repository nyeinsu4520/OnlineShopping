import React, { useState } from 'react'
import Heading from './components/Heading'
import CreateTask from './components/CreateTask'
import TaskList from './components/TaskList'
import Task from './components/Task'

const App = () => {
  const [tasks, setTask] = useState([
    { id: 1, task: "Complete JavaScript assignment", isDone: true },
    { id: 2, task: "Prepare for the meeting", isDone: false },
    { id: 3, task: "Buy groceries", isDone: false },
    { id: 4, task: "Read a chapter of the book", isDone: false },
    { id: 5, task: "Go for a run", isDone: false }
]);

const addTask = (newTask) => {
  setTask([...tasks, newTask]);
}

const removeTask = (id) => {
  
  setTask(tasks.filter((task) => task.id !== id));
}

const doneTask = (id) => {
  setTask(tasks.map((el)=>el.id ===id ? {...el,isDone:!el.isDone}:el));
};

  return (
    <div className='p-10'>
    <Heading/>
    <CreateTask addTask={addTask}/>
    <TaskList doneTask={doneTask} removeTask={removeTask} tasks={tasks}/>
    </div>
  )
}

export default App