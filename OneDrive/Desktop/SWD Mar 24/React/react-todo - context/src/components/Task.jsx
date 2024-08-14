import React,{useContext} from 'react'
import TaskContext from '../context/TaskContext'

const Task = ({job: {id, task, isDone} }) => {

  const {removeTask, doneTask} = useContext(TaskContext);

    const handleRemoveTaskBtn = ()=>{
       if(confirm("Are you sure you want to delete this task?")){ removeTask(id)};
    };

    const handleOnChange = ()=>{
      doneTask(id);      
    };  

  return (
    <div className='flex justify-between items-cener border-2 p-3 border-slate-200 rounded-lg mb-3 last:mb-0'>
        <div className='flex items-center gap-3'>
        <input type='checkbox' onChange={handleOnChange} checked={isDone} className='size-4'></input>
        <p className={isDone ? "line-through" : ""}>{task}</p>
        </div>
        <button onClick={handleRemoveTaskBtn} className='bg-red-100 text-red-700 border-2 border-red-100 text-sm rounded-lg px-4 py-2'>Delete</button>
    </div>
  )
}

export default Task