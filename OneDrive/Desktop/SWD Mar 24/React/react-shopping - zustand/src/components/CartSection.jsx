import React from 'react';
import products from '../data/products';
import Cart from './Cart';
import Container from './Container';
import { Link } from 'react-router-dom';
import carts from '../data/carts';
import useCartStore from '../store/useCartStore';
import useProductStore from '../store/useProductStore';4
import emptyCartImg from "../assets/empty-cart.png";

const CartSection = () => {
  
  const {carts} = useCartStore();
  const {products} = useProductStore();

  const total = carts.reduce((pv, cv) => {
    const cost = cv.quantity * products.find(({id}) => id === cv.productId).price;
    return pv+cost;
  } ,0);


  const tax = total * 0.05;

  const netTotal = total+ tax;

  return (
    <div className='flex flex-col gap-5 h-full'>
      {carts.map((cart) => (
        <Cart key={cart.id} cart={cart} />
      ))}

      {carts.length === 0 && (
              <img src={emptyCartImg} className='w-2/5 mt-10 mx-auto' alt="Empty Cart"/>
      )}
      <div className='border-t border-black mt-9 h-32 pt-2'>
        <Container className="px-5">
            <div className='flex justify-end gap-10'>
                <div className='text-right'>
                    <p className='text-gray-500'>Total</p>
                    <p className='text-1xl font-bold'>{total.toFixed(2)}</p>
                </div>
                <div className='text-right'>
                    <p className='text-gray-500'>Tax(10%)</p>
                    <p className='text-1xl font-bold'>{tax.toFixed(2)}</p>
                </div>
                <div className='text-right'>
                    <p className='text-gray-500'>Net Total</p>
                    <p className='text-1xl font-bold'>{netTotal.toFixed(2)}</p>
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
