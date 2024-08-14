import React, { useState } from 'react'
import Heading from './components/Heading'
import CreateTask from './components/CreateTask'
import TaskList from './components/TaskList'
import Task from './components/Task'
import TaskProvider from './context/TaskProvider'
// import Counter from './components/Counter'

const App = () => {
  
  return (
  // <TaskProvider>
    <div className='p-10'>
    <Heading/>
    <CreateTask />
    <TaskList />
    </div>
  // </TaskProvider>
  // <Counter/>
  )
}

export default App