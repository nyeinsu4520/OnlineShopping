import React, { useState } from 'react'
import useCounterStore from '../store/useCounterStore';

const Counter = () => {
    // const [count,setCount] = useState(7);
    // console.log(useCounterStore())

    const {count,resetCount,increaseCount,decreaseCount} = useCounterStore();

    const handleReset = () => {
        // setCount(0);
        resetCount();
    };

    const handleIncrement = () => {
        // setCount(count + 1);
        increaseCount();
    };

    const handleDecrement = () => {
        // setCount(count - 1);
        decreaseCount();
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Counter</h1>
      <div className="flex items-center justify-center mb-4">
        <button
          onClick={handleDecrement}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 mr-2"
        >
          -
        </button>
        <span className="m-3 text-4xl text-black font-semibold">{count}</span>
        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 ml-2"
        >
          +
        </button>
      </div>
      <div className="flex justify-center">
        <button onClick={resetCount}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
        >
          Reset
        </button>
      </div>
      <p className="text-center text-gray-600 mt-4">Click the buttons to adjust the counter.</p>
    </div>
  </div>
  )
}

export default Counter