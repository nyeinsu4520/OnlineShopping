import React from 'react'

const Cart = ({cart}) => {
  return (
    <div className='border border-gray-300 p-5 flex items-center rounded-lg shadow-md'>
    <img 
      src={cart.product.image} 
      className="h-20 w-20 object-cover rounded-lg" 
      alt={cart.product.title} 
    />
    <div className="flex flex-col justify-between ms-5">
      <p className="text-lg font-semibold">{cart.product.title}</p>
      <div className="flex items-center justify-between mt-2">
          <p className="text-sm text-gray-600">Price: ${cart.product.price.toFixed(2)}</p>
          <p className="text-sm text-gray-600">Total: ${cart.cost.toFixed(2)}</p>
        </div>
      <div className="flex items-center mt-2">
        <button 
      
          className="bg-gray-200 text-gray-800 px-3 py-1 rounded-l-md border border-r-0 border-gray-300 hover:bg-gray-300"
        >
          -
        </button>
        <span className="text-gray-800 px-4 py-1 border-t border-b border-gray-300">
          {cart.quantity}
        </span>
        <button 
          
          className="bg-gray-200 text-gray-800 px-3 py-1 rounded-r-md border border-l-0 border-gray-300 hover:bg-gray-300"
        >
          +
        </button>
      </div>
    </div>
  </div>
  )
}

export default Cart