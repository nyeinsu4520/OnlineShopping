import React from 'react'

const CategoryBtn = ({categoryName,current}) => {
  return (
    <button className={`${current ? "bg-black text-white" : ""} border text-nowrap border-black px-4 py-2 me-2`}>{categoryName}</button>
  )
}

export default CategoryBtn