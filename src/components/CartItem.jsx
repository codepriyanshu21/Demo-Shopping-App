import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice.jsx';
import { toast } from 'react-toastify';

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success('Item Removed', {
      position: 'top-center',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center">
        <div className="w-1/4">
          <img src={item.image} alt={item.title} className="object-cover" />
        </div>
        <div className="ml-6 w-3/4">
          <h1 className="text-xl font-semibold text-slate-700">{item.title}</h1>
          <p className="text-base text-slate-700">{item.description}</p>
          <div className="flex items-center justify-between mt-4">
            <p className="font-bold text-lg text-green-600">{item.price}</p>
            <div
              className="text-red-800 bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3"
              onClick={removeFromCart}
            >
              <MdDeleteOutline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;