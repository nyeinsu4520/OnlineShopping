import React from 'react'
import useProductStore from '../store/useProductStore'
import useCartStore from '../store/useCartStore';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
const Cart = ({cart:{id,productId,quantity }}) => {

  const {products} = useProductStore();
  const {increaseQuantity,decreaseQuantity,removeCart} = useCartStore();

  const product = products.find(el=> el.id === productId);

  const cost = product.price * quantity;

  const handleIncreaseQuantity = () => {
    increaseQuantity(id)
  };
  const handleDecreaseQuantity = () => {  
    if(quantity>1){
      decreaseQuantity(id);
    }else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        removeCart(id);
        toast.success("Item remove successfully!");
        }
      });
     }
  };

  return (
    <div className='border border-gray-300 p-5 flex items-center rounded-lg shadow-md'>
    <img 
      src={product.image} 
      className="h-20 w-20 object-cover rounded-lg" 
      alt={product.title} 
    />
    <div className="flex flex-col justify-between ms-5">
      <p className="text-lg font-semibold">{product.title}</p>
      <div className="flex items-center justify-between mt-2">
          <p className="text-sm text-gray-600">Price: ${product.price.toFixed(2)}</p>
          <p className="text-sm text-gray-600">Total: ${cost.toFixed(2)}</p>
        </div>
      <div className="flex items-center mt-2">
        <button onClick={handleDecreaseQuantity}
      
          className="bg-gray-200 text-gray-800 px-3 py-1 rounded-l-md border border-r-0 border-gray-300 hover:bg-gray-300"
        >
          -
        </button>
        <span className="text-gray-800 px-4 py-1 border-t border-b border-gray-300">
          {quantity}
        </span>
        <button onClick={handleIncreaseQuantity}
          
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