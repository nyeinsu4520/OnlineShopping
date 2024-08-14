import React from 'react';
import Rating from '../components/Rating';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import Breadcumb from '../components/Breadcumb';
import useProductStore from '../store/useProductStore';
import useCartStore from '../store/useCartStore';
import { toast } from 'react-hot-toast';
const ProductDetail = () => {
  const { productId } = useParams();

  const {products} = useProductStore();
  const {carts,addCart} = useCartStore();
  // console.log('Product ID from params:', productId);

  // Find the product based on productId
  const currentProduct = products.find(product => product.id === parseInt(productId, 10));

  const handleAddedBtn = (event) => {
    event.stopPropagation();
    toast.error("Item is already Added");
  }

  const handleAddCart = (event) => {
    event.stopPropagation();
    if (currentProduct) {
      const newCart = {
        id: Date.now(), // You might want to use a unique ID or a different method for ID generation
        productId: currentProduct.id,
        quantity: 1,
      };
      addCart(newCart);
      // Optionally show a confirmation message or toast
    }
  };
  // console.log('Found product:', currentProduct);

  if (!currentProduct) {
    return <div className="text-center py-10">Product not found</div>;
  }

  return (
    <Container>
        <Breadcumb currentPageTitle="Product Detail"/>
      <div className='max-w-4xl mx-auto p-5 bg-white shadow-lg rounded-lg'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex justify-center items-center'>
            <img 
              src={currentProduct.image} 
              alt={currentProduct.title} 
              className='w-full max-w-xs md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-md object-cover'
            />
          </div>
          <div className='flex flex-col justify-between'>
            <div>
              <h3 className='text-3xl font-semibold mb-2'>{currentProduct.title}</h3>
              <p className='text-lg text-gray-600 bg-gray-100 inline-block px-4 py-1 rounded-full mb-4'>
                {currentProduct.category}
              </p>
              <p className='text-gray-700 mb-4'>{currentProduct.description}</p>
              <Rating rate={currentProduct.rating.rate} />
            </div>
            <div className='flex justify-between items-center mt-4'>
              <p className='text-xl font-semibold text-gray-800'>${currentProduct.price.toFixed(2)}</p>
              {carts.find((cart) => cart.productId === currentProduct.id) ? (
          <button onClick={handleAddedBtn} className="text-sm border bg-black text-white px-4 py-2">Added</button>
        ):(
        <button onClick={handleAddCart} className="text-sm border border-black px-4 py-2">Add Cart
        </button>
       ) 
      }
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
