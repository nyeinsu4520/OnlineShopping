import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  const {carts,addCart} = useCartStore();

  const navigate = useNavigate();


    const handleAddedBtn = (event) => {
      event.stopPropagation();
      toast.error("Item is already Added");
    }

  const handleAddCart = (event) => {
    event.stopPropagation();
    const newCart = {
      id:Date.now(),
      productId:id,
      quantity:1,

    };
    addCart(newCart);
  };

    const handleOpenDetails = () => {
       navigate(`/product-detail/${id}`);
    };
    

  return (
    <div onClick={handleOpenDetails} className="border border-black p-5 flex flex-col items-start gap-5">
      <img src={image} className="h-40" alt=""></img>
      <p className="font-bold line-clamp-2">{title} </p>
      
    <Rating rate={rate}/>
      <div className="flex justify-between items-end w-full ">
        <p>Price &#40; $ {price} &#41;</p>
        {carts.find((cart) => cart.productId === id) ? (
          <button onClick={handleAddedBtn} className="text-sm border bg-black text-white px-4 py-2">Added</button>
        ):(
        <button onClick={handleAddCart} className="text-sm border border-black px-4 py-2">Add Cart
        </button>
       ) 
      }
        
      </div>
    </div>
  );
};

export default ProductCard;
