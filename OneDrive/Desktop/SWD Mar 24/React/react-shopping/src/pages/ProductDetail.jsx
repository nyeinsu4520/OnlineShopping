import React from 'react';
import products from '../data/products';
import Rating from '../components/Rating';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import Breadcumb from '../components/Breadcumb';

const ProductDetail = () => {
  const { productId } = useParams();
  console.log('Product ID from params:', productId);

  // Find the product based on productId
  const currentProduct = products.find(product => product.id === parseInt(productId, 10));

  console.log('Found product:', currentProduct);

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
              className='w-full h-auto max-w-sm rounded-lg shadow-md'
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
              <button className='text-sm border border-black px-4 py-2'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
