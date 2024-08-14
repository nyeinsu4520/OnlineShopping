import React, { useState } from 'react'

const Faq = ({faqquestion:{id,question,answer,isOpen},toggleQuestion}) => {

  

    // const [open,setOpen] = useState(false);
    // const handleOpen = () => {
    //     setOpen(true);
    // };

    const handleToggle = () => {
        // setOpen(!open);
        toggleQuestion(id);
    };

  return (
    <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden mb-4">
            <div
                onClick={handleToggle}
                className={`flex items-center justify-between font-semibold p-4 cursor-pointer transition-transform duration-300 ease-in-out ${isOpen ? 'bg-blue-100' : 'bg-gray-100'} hover:bg-gray-200`}
            >
                <h1 className={`text-xl ${isOpen === false ? "" : "font-bold"}`}>{question}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className={`size-5 duration-1000 ${isOpen === false ? "" : "rotate-180"} `}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
</svg>

            </div>
            <p className={`transition-max-height duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen p-4 bg-gray-50' : 'max-h-0'}`}>
                {answer}
            </p>
        </div>
  )
}

export default Faq