import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(7);

  const handleIncrement=()=>{
    setCount(count+1);
  };

  const handleDecrement=()=>{
    setCount(count-1);
  }

  return (
    <div className='p-10'>
      <h1 className="text-7xl font-bold">{count}</h1>
      <button onClick={handleDecrement} className='border px-3 py-2 bg-black text-white'>
        decrement
      </button>
      <button onClick={handleIncrement} className='border px-3 py-2 bg-black text-white'>
        increment
      </button>
      
    </div>
  )
}

export default App