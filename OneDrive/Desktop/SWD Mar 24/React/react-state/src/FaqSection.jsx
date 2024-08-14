import React, { useState } from 'react'
import Faq from './Faq';

const FaqSection = () => {
    const [questions,setQuestions] = useState([
        {
            id: 1,
            question: "What is JSX?",
            answer: "JSX is a syntax extension for JavaScript that looks like HTML and is used with React to describe UI structure.",
            isOpen:false
        },
        {
            id: 2,
            question: "What is the Virtual DOM?",
            answer: "The Virtual DOM is a lightweight copy of the actual DOM that React uses to optimize updates by minimizing direct manipulations of the real DOM.",
            isOpen:false
        },
        {
            id: 3,
            question: "How do you manage state in React?",
            answer: "State in React is managed within a component and can be updated using the `useState` hook in functional components or `this.setState` in class components.",
            isOpen:false
        },
        {
            id: 4,
            question: "What are props in React?",
            answer: "Props are properties passed from a parent component to a child component, used to customize and configure child components.",
            isOpen:true
        },
        
    ]
        
    );
    
const toggleQuestion = (id) => {
    setQuestions(questions.map((el) => el.id === id ? {...el,isOpen:!el.isOpen} : {...el,isOpen:false}));
};

  return (
    <div className='p-10'>
        <h1 className='text-4xl font-bold mb-3'>React Frequently Asked Questions</h1>
   
   
        <div className='flex flex-col'>
            {questions.map((question) => (
                <Faq toggleQuestion={toggleQuestion} key={question.id} faqquestion={question}  />))}
        </div>
    </div>
  )
}

export default FaqSection