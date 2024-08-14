import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='w-full h-screen flex justify-center items-center'>
        <div className='text-center'>
            <h3 className='text-5xl font-bold mb-3'>404 Not Found</h3>
            <p className='w-96 text-sm mb-5 text-gray-400'>Lorem, Molestiae quos ab maiores voluptatem laboriosam fuga s in magnam impedit quisquam quam modi officiis, dolorum ducimus natus.</p>
            <Link to={"/"} className='border border-black px-4 py-2'>Return to Home </Link>
        </div>
    </section>
  )
}

export default ErrorPage