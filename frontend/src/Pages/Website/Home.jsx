/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { BsInstagram, BsTelegram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
const Home = () => {


  const foodCategory = [
    {
      name: "Pizza",
      image: "public/Images/pizza.webp", // Placeholder image URL
    },
    {
      name: "Burger",
      image: "public/Images/burger.webp", // Same image URL
    },
    {
      name: "Momos",
      image: "public/Images/momos.webp", // Same image URL
    },
    {
      name: "Cold-Drink",
      image: "public/Images/cold-drink.webp", // Same image URL
    },
    {
      name: "Coffee",
      image: "public/Images/coffee.webp", // Same image URL
    },
  ];
  
  console.log(foodCategory);

  
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

  
  console.log(topRestaurantFoodInRajgarh);
  
  
  const scrollRef = useRef(null); // Create a reference to the scrollable container

  // Function to scroll left
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  // Function to scroll right
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };


  return (
    <>
      {/* Header Section */}
      <div className="h-[80px] flex items-center justify-between cursor-pointer text-white mt-[3px]" style={{
        background: "#D2B48C"
      }}>
        <button className="ml-5 md:ml-20 text-xl">BVM</button>
        <button className="mr-5 md:mr-20 border border-white w-[110px] h-[35px] rounded-3xl text-[13px] font-bold">Know More</button>
      </div>

      {/* Banner Section */}
      <div className="w-full">
        <div className="border border-green-900 md:w-[1100px] w-full mx-auto h-auto rounded-xl items-center justify-center mt-8 grid grid-cols-1 md:grid-cols-7 gap-4 p-4 text-white" style={{
          background: "transparent linear-gradient(50deg, #bb7844 0%, #3D3635 50%, #FCDFFF 100%) no-repeat padding-box"
        }}>
          {/* Image */}
          <div className="col-span-1 md:col-span-1 flex justify-center">
            <img src="public/Images/logo for bvm.png" className="h-[150px] w-[90px]" alt="Banner Image" />
          </div>
          
          {/* Text Section */}
          <div className="col-span-4 flex flex-col justify-center">
            <p className="ml-5 mt-3 text-[13px] font-semibold">Introducing</p>
            <h1 className="font-bold text-xl ml-5 mt-2">Classic Menu</h1>
            <p className="mt-2 ml-5">A perfect duo of the classic or hot coffee inspired by and for India; with all-day classic sandwiches</p>
            <p className="ml-5 mt-8 text-[13px]">Starting From</p>
            <h3 className="ml-5 font-bold">₹150* onwards</h3>
          </div>

          {/* "New" Section */}
          <div className="col-span-2 flex flex-col items-center justify-center">
            <p className="text-[13px] font-bold">New</p>
            <button className="mt-4 w-[200px] h-[50px] border border-white text-black bg-white font-semibold rounded-full text-[15px]">Know More</button>
          </div>
        </div>
      </div>
      
      {/* Handcrafted Curations Section */}
      <div className="md:w-[1100px] w-full mx-auto mt-4">
        <h1 className="text-2xl font-bold mt-[60px] ml-5">What's Your Mind Says</h1>
        <div className="flex flex-wrap gap-[60px] justify-center mt-6">
          {
            foodCategory.map((cat, index) => {
              return<>
                       <div key={index} className="flex flex-col items-center">
              <img src={cat.image} className="h-[111px] w-[111px] rounded-full" alt="Best Seller" />
              <p className="text-[15px] font-semibold mt-2">{cat.name}</p>
            </div>
              </>
            })
          }
        </div>
      </div>

      {/* Hero Section */}
<div className="max-w-screen-lg mx-auto mt-10 px-4  md:h-[300px]">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 h-[280px]">

    {/* Order Online Card */}
    <div className="flex justify-center">
      <div className="card card-compact bg-base-100 w-full max-w-sm shadow-xl hover:shadow-2xl ">
        <figure>
          <img
            src="public/Images/order-online.jpg"
            alt="Order Online"
            className="w-full h-52 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Order Online</h2>
          <p>Stay Home Stay Safe</p>
        </div>
      </div>
    </div>

    {/* Book a Table Card */}
    <div className="flex justify-center">
      <div className="card card-compact bg-base-100 w-full max-w-sm shadow-xl hover:shadow-2xl">
        <figure>
          <img
            src="public/Images/book-table.webp"
            alt="Book A Table"
            className="w-full h-52 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Book A Table</h2>
          <p>If a dog chews shoes, whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  </div>
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

      <div
        className="grid grid-cols-1 lg:grid-cols-7 h-auto lg:h-[470px] mt-[3px] "
        style={{
          background: "#52595D",
        }}
      >
        {/* Image section */}
        <div className="col-span-3 flex justify-center lg:mt-6">
          <img
            src="public/Images/Hero-Image.png"
            alt="Profile"
            className="h-[300px] w-[250px] lg:h-[400px] lg:w-[300px] mx-auto mt-6"
          />
        </div>

        {/* Content section */}
        <div className="col-span-4 text-white px-6 lg:px-0">
          <h1 className="uppercase text-2xl lg:text-3xl text-center lg:text-left lg:mx-[200px] mt-6 lg:mt-10 font-semibold">
            BVM-CAFE
          </h1>
          <hr className="w-full lg:w-[400px] mx-auto lg:ml-[130px] mt-2" />
          <p className="mt-4 text-lg font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illo
            laborum officiis voluptatibus totam maiores vitae, incidunt amet
            minus, sequi autem mollitia eum porro nostrum! Illo, quo. Vitae
            repudiandae vero deserunt, alias, quaerat, maiores eos architecto
            iste soluta molestias ad ipsam eum minima accusamus aut cum
            doloribus placeat culpa perspiciatis.
          </p>
          <p className="mt-4 text-lg font-semibold">Contact - 9876******</p>
          <p className="mt-2 text-lg font-semibold">Email - bvmcafe@gmail.com</p>

          {/* Social Media Icons */}
          <div className="flex gap-6 mt-4 justify-center lg:justify-start text-2xl cursor-pointer">
            <BsInstagram />
            <FaFacebook />
            <BsTwitter />
            <BsTelegram />
            <BsWhatsapp />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
