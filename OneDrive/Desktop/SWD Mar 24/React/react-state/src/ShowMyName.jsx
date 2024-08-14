import React, { useState } from "react";

const ShowMyName = () => {

    const [name,setName] = useState("");

    const handleNyein = () => {
        setName(name + "Nyein ");
    }

    const handleSu = () => {
        setName(name + "Su ");
    }
    const handleThwin = () => {
        setName(name + "Thwin ");
    }

    const handleClear = () => {
        setName("");        
    }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">My Name is "{name}"</h1>

      <button
        onClick={handleNyein}
        className="border px-3 py-2 bg-black text-white"
      >
        Nyein
      </button>
      <button
        onClick={handleSu}
        className="border px-3 py-2 ml-5 bg-black text-white"
      >
        Su
      </button>
      <button
        onClick={handleSu}
        className="border px-3 py-2 ml-5 bg-black text-white"
      >
        Su
      </button>
      <button
        onClick={handleThwin}
        className="border px-3 py-2 ml-5 bg-black text-white"
      >
        Thwin
      </button>
      <button
        onClick={handleClear}
        className="border px-3 py-2 ml-5 bg-white text-black"
      >
        Clear Your Name
      </button>
    </div>
  );
};

export default ShowMyName;
