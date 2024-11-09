
// import React, { useContext } from 'react';
// import { FaStar } from 'react-icons/fa';
// import { Context } from '../../Contexts/MainContext';
// import { useDispatch } from 'react-redux';
// import { MdShoppingCart } from "react-icons/md";
// import { addToCart } from '../../reducers/CartSlice';

// const ProductBox = ({ _id, name, image, price, discount_price, rating = 3, hot }) => {
//   const { APP_BASE_URL } = useContext(Context);
//   const dispatcher = useDispatch();

//   // Calculate the discount percentage
//   const discountPercent = price && discount_price 
//     ? Math.round(((price - discount_price) / price) * 100)
//     : 0;

//   return (
//     <div className='py-3 shadow-lg relative text-center'>
//       {hot && <div className='bg-[#FF4858] absolute text-white p-2'>Hot</div>}
//       {/* Dynamically display the product image */}
//       <img
//         src={`${APP_BASE_URL}/Images/Product/${image}`}
//         className='mx-auto h-[250px] block'
//         alt={name}
//       />
//       <div className='text-center font-semibold'>{name}</div>
//       <Stars yellow={rating} />
//       <div className='my-4 flex justify-center gap-4'>
//         <span className='text-[#FF4858]'>${discount_price}</span>
//         <span className='text-[#C1C8CE] line-through'>${price}</span>
//         {/* Display discount percentage */}
//         {discountPercent > 0 && (
//           <span className='text-green-500 text-[11px] font-semibold'>
//             {discountPercent}% OFF
//           </span>
//         )}
//         <MdShoppingCart
//           className='cursor-pointer text-xl'
//           onClick={() => dispatcher(addToCart({ price: discount_price, pId: _id, qty: 1 }))}
//         />
//       </div>
//     </div>
//   );
// };


// export default ProductBox;

// function Stars({ yellow }) {
//   const stars = Array(5)
//     .fill(0)
//     .map((_, i) => (
//       <FaStar key={i} color={i < yellow ? '#FFC600' : '#C1C8CE'} />
//     ));

//   return <div className='flex gap-2 mt-[10px] justify-center'>{stars}</div>;
// }
