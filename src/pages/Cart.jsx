import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem.jsx";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const totalAmount = cart.reduce((acc, curr) => acc + curr.price, 0);
  const formattedAmount = totalAmount.toFixed(2);
  return (
    <div className="max-w-6xl mx-auto mt-5">
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row justify-center">
          {/* Cart Items */}
          <div className="w-full md:w-3/5 flex flex-col p-2">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Summary */}
          <div className="w-full md:w-2/5 mt-5 flex flex-col  ">
            <div className="flex flex-col gap-5">
              <div className="font-semibold text-xl text-green-800">
                Your Cart
              </div>
              <div className="font-semibold text-5xl text-green-700 -mt-5">
                Summary
              </div>
              <p className="text-xl">
                <span className="text-gray-700 font-semibold">
                  Total Items: {cart.length}
                </span>
              </p>
            </div>

            {/* Total Amount */}
            <div className="flex flex-col ">
              <p className="text-xl font-bold">
                <span className="text-gray-700 font-semibold">
                  Total Amount:
                </span>{" "}
                ${totalAmount}
              </p>
              <button className= " bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Empty Cart Message
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>
          <Link to={"/"}>
            <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;