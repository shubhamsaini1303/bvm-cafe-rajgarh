/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
const Order = () => {
  const [isDrinkOpen, setIsDrinkOpen] = useState(false);

  const topRestaurantFoodInRajgarh = [
    {
      name: "Paneer Pizza",
      rating:"5 ★",
      discount:"20% OFF UPTO 400",
      image: "public/Images/pizza.webp",
      price:"₹ 400",
      shopname:"BVM CAFE",
      location:"Bus Stand Rajgarh",
      time:"30min"
    },
    {
      name: "Paneer Pizza",
      rating:"5 ★",
      discount:"20% OFF UPTO 400",
      image: "public/Images/pizza.webp",
      price:"₹ 400",
      shopname:"BVM CAFE",
      location:"Bus Stand Rajgarh",
      time:"30min"
    },    {
      name: "Paneer Pizza",
      rating:"5 ★",
      discount:"20% OFF UPTO 400",
      image: "public/Images/pizza.webp",
      price:"₹ 400",
      shopname:"BVM CAFE",
      location:"Bus Stand Rajgarh",
      time:"30min"
    },    {
      name: "Paneer Pizza",
      rating:"5 ★",
      discount:"20% OFF UPTO 400",
      image: "public/Images/pizza.webp",
      price:"₹ 400",
      shopname:"BVM CAFE",
      location:"Bus Stand Rajgarh",
      time:"30min"
    },    {
      name: "Paneer Pizza",
      rating:"5 ★",
      discount:"20% OFF UPTO 400",
      image: "public/Images/pizza.webp",
      price:"₹ 400",
      shopname:"BVM CAFE",
      location:"Bus Stand Rajgarh",
      time:"30min"
    },    {
      name: "Paneer Pizza",
      rating:"5 ★",
      discount:"20% OFF UPTO 400",
      image: "public/Images/pizza.webp",
      price:"₹ 400",
      shopname:"BVM CAFE",
      location:"Bus Stand Rajgarh",
      time:"30min"
    },    {
      name: "Paneer Pizza",
      rating:"5 ★",
      discount:"20% OFF UPTO 400",
      image: "public/Images/pizza.webp",
      price:"₹ 400",
      shopname:"BVM CAFE",
      location:"Bus Stand Rajgarh",
      time:"30min"
    },
   
  ];

  
  
  const scrollRef = useRef(null); // Create a reference to the scrollable container

  // Function to scroll left
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  // Function to scroll right
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };


  const handleToggleDrink = () => {
    setIsDrinkOpen(!isDrinkOpen);
    if (isDrinkOpen) setIsDrinkOpen(false); // Close drink section if open
  };

  return (
    <>
      <div className="h-[30px]"></div>

      <div className=" h-auto mt-[3px] py-4" style={{ background: "#D2B48C" }}>
        <div className=" md:w-[1100px] w-full mx-auto md:h-[220px] rounded-xl flex flex-col md:flex-row items-center justify-between mt-7 p-4 text-white"
          style={{ background: "#3D0C02" }}>
          
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <img src="public/Images/banner_icon_1_2_d97e1578ee.png" className="md:h-[180px] h-[100px] w-[90px] mx-auto" alt="banner icon" />
          </div>

          <div className="md:col-span-4 text-center md:text-left md:flex-1 px-4">
            <p className="text-[13px] font-semibold">Starbucks</p>
            <h1 className="font-bold text-xl mt-2">Essential Collection</h1>
            <p className="mt-2">A whole new expression of classic Starbucks Design. Explore merchandise collection.</p>
            <p className="mt-4 text-[13px]">Starting From</p>
            <h3 className="font-bold text-lg">₹500</h3>
          </div>

          <div className="md:col-span-2 flex justify-center md:justify-end mt-4 md:mt-0">
            <button className="w-[120px] h-[35px] text-white font-semibold rounded-full text-[11px]" style={{ background: "#49413F" }}>
              Order Now
            </button>
          </div>
        </div>
      </div>

<div
      className="h-[50px] flex items-center text-gray-500 justify-center md:justify-start"
      style={{ background: 'rgb(229, 232, 232)' }}
    >
      <div className="flex space-x-10 overflow-x-auto scrollbar-hide md:scrollbar-default cursor-pointer">
        <h1 className="mt-[10px] ml-10 whitespace-nowrap">Bestseller</h1>
        <span className="mt-2">|</span>
        <h1 className="mt-[10px] whitespace-nowrap" onClick={handleToggleDrink}>Drink</h1>
        <span className="mt-2">|</span>
        <h1 className="mt-[10px] whitespace-nowrap">Food</h1>
        <span className="mt-2">|</span>
        <h1 className="mt-[10px] whitespace-nowrap">Merchandise</h1>
        <span className="mt-2">|</span>
        <h1 className="mt-[10px] whitespace-nowrap">Coffee At Home</h1>
        <span className="mt-2">|</span>
        <h1 className="mt-[10px] whitespace-nowrap">Ready</h1>
        <span className="mt-2">|</span>
      </div>
    </div>

      {/* For  Drink  */}
{
  isDrinkOpen && (
    <div className="w-full">
      {/* Drink categories section */}
      <div className="flex gap-6 ml-4 md:ml-20 mt-2 h-[37px] text-[16px] text-gray-500 cursor-pointer overflow-x-auto scrollbar-hide whitespace-nowrap">
        <h1>Espresso</h1>
        <h1>Frappuccino® Blended Beverages</h1>
        <h1>Other Beverages</h1>
        <h1>Brewed Coffee</h1>
        <h1>Tea</h1>
        <h1>Cold Brew</h1>
      </div>
      <hr />

      {/* Drink options section */}
      <div className="grid grid-cols-1 md:grid-cols-9">
        <div className="h-[50px] flex col-span-8 gap-4 md:gap-10 mt-4 ml-10 text-[11px] overflow-x-auto scrollbar-hide whitespace-nowrap">
          <img src="public/Images/Union.svg" alt="" className="h-[30px] w-[70px] rounded-lg hover:text-green-900" />
          <button className="h-[30px] bg-gray-300 w-[70px] rounded-lg hover:text-green-900">Hot</button>
          <button className="h-[30px] bg-gray-300 w-[70px] rounded-lg hover:text-green-900">Cold</button>
          <button className="h-[30px] bg-gray-300 w-[90px] rounded-lg hover:text-green-900">Milkshake</button>
          <button className="h-[30px] bg-gray-300 w-[80px] rounded-lg hover:text-green-900">Blended</button>
          <button className="h-[30px] bg-gray-300 w-[100px] rounded-lg hover:text-green-900">Caffeine Free</button>
          <button className="h-[30px] bg-gray-300 w-[70px] rounded-lg hover:text-green-900">Nitro</button>
          <button className="h-[30px] bg-gray-300 w-[80px] rounded-lg hover:text-green-900">On Tap</button>
          <button className="h-[30px] bg-gray-300 w-[90px] rounded-lg hover:text-green-900">Ice Cream</button>
          <button className="h-[30px] bg-gray-300 w-[70px] rounded-lg hover:text-green-900">Brew</button>
        </div>
      </div>
    </div>
  )
}
            <hr />

      {/* "Anytime" Section */}
      <div>
        <h1 className="ml-20 mt-4 text-md font-semibold">Bestseller</h1>
        <p className="ml-20 text-[12px] mt-2 mb-4">Everyone' favorite Starbucks put together in a specially curated collection.</p>
        {/* <hr className="mb-6" /> */}
      </div>
              {/* Product Details */}

              <div className="w-full md:w-[1100px] mx-auto mt-8 mb-4 px-4 md:px-0">
      <h1 className="text-3xl font-bold mt-4 ml-5 text-gray-800 uppercase">Top fast Food in BVM CAFE</h1>
      
      <div className="flex justify-between items-center h-[36px] px-4 mt-2">
        <button 
          onClick={scrollLeft} 
          className="p-2 text-gray-600 bg-gray-100 rounded-full hover:bg-gray-300 transition-colors"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={scrollRight} 
          className="p-2 text-gray-600 bg-gray-100 rounded-full hover:bg-gray-300 transition-colors"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Scrollable Product Cards */}
      <div
        ref={scrollRef}
        className="mt-4 flex gap-6 overflow-x-scroll no-scrollbar md:h-[350px] py-2"
      >
        {topRestaurantFoodInRajgarh.map((top, index) => (
          <div 
            key={index} 
            className="card bg-white w-72 shadow-lg hover:shadow-2xl transform transition-all duration-300 flex-shrink-0 rounded-lg"
          >
            <figure>
              <img src={top.image} alt="Food" className="w-full h-44 object-cover rounded-t-lg" />
            </figure>
            <p className="mt-2 ml-4 px-2 py-1 text-center rounded bg-red-600 text-white font-semibold w-fit">
              {top.discount}
            </p>
            <div className="card-body p-4">
              <h2 className="card-title text-lg font-semibold flex items-center">
                {top.name}
                <span className="ml-2 badge bg-green-500 text-white px-2 py-1 rounded-lg">{top.rating}</span>
              </h2>
              <div className="flex justify-between mt-2 text-gray-700">
                <p>{top.shopname}</p>
                <p className="font-bold text-gray-800">{top.price}</p>
              </div>
              <div className="flex justify-between mt-2 text-gray-500 text-sm">
                <p>{top.location}</p>
                <p>{top.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

       <div className="mt-[40px]">
       
      </div> 
    </>
  );
}

export default Order;

