import React from 'react';
import products from '../data/products';
import Cart from './Cart';
import Container from './Container';
import { Link } from 'react-router-dom';
import carts from '../data/carts';
const CartSection = () => {
  

  return (
    <div className='flex flex-col gap-5 h-full'>
      {carts.map((cart) => (
        <Cart key={cart.id} cart={cart} />
      ))}

      <div className='border-t border-black mt-9 h-32 pt-2'>
        <Container>
            <div className='flex justify-end gap-10'>
                <div className='text-right'>
                    <p className='text-gray-500'>Total</p>
                    <p className='text-1xl font-bold'>123</p>
                </div>
                <div className='text-right'>
                    <p className='text-gray-500'>Tax(10%)</p>
                    <p className='text-1xl font-bold'>123</p>
                </div>
                <div className='text-right'>
                    <p className='text-gray-500'>Net Total</p>
                    <p className='text-1xl font-bold'>123</p>
                </div>
                
            </div>
            <div className='text-end mt-5'>
                <Link className='border border-black px-4 py-2 mb-3'>
            Order Now</Link></div>
        </Container>
      </div>
    </div>
  );
};

export default CartSection;
