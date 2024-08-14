import React, { useState ,useContext} from 'react'
import TaskContext from '../context/TaskContext';
import useTaskStore from '../store/useTaskStore';


const CreateTask = () => {
  const{addTask}=useTaskStore();
    const [job,setJob] = useState("");
    // const {addTask} = useContext(TaskContext);
    const handleOnChange =(event)=>{
        setJob(event.target.value);
    };

    const handleAddTaskBtn = ()=>{
      const newTask = {
        id:Date.now(),
        task:job,
        isDone:false,
      }
        addTask(newTask);
        setJob("");
    };
  return (
    <div className='flex mb-5'>
        <input type='text' className='flex-grow bg-gray-200 border-2 border-gray-200 w-1/3 rounded-l-lg p-2' placeholder='Write your new task' onChange={handleOnChange} value={job}/>
        <button onClick={handleAddTaskBtn} className='bg-slate-800 border-2 text-white border-slate-800 w-1/3 rounded-r-lg px-4 py-2'>Add Task</button>
    </div>
  )
}

export default CreateTask;