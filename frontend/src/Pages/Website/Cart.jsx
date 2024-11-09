
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4  h-auto lg:h-[400px] p-4">
        {/* Image Section */}
        <div className="col-span-3 flex flex-col items-center">
          <img
            src="public/Images/Hero-Image.png"
            className="h-[200px] w-[200px] object-cover rounded-md mt-4 lg:mt-10"
            alt="Product"
          />
          <div className="flex gap-2 mt-6 lg:mt-8">
            {/* Decrement Button */}
            <button className="w-[50px] h-[50px] border-2 bg-black text-white rounded-full transition-transform transform hover:scale-105">
              -
            </button>
            {/* Quantity Input */}
            <input
              type="text"
              className="border-2 w-[60px] text-center outline-none focus:ring-2 focus:ring-black rounded-md"
              placeholder="1"
            />
            {/* Increment Button */}
            <button className="w-[50px] h-[50px] border-2 bg-black text-white rounded-full transition-transform transform hover:scale-105">
              +
            </button>
          </div>
        </div>

        {/* Product Info Section */}
        <div className="col-span-4 flex flex-col justify-center items-start px-4 mx-auto">
          <h1 className="font-semibold text-xl lg:text-2xl">Name: Product</h1>
          <h2 className="mt-2 text-lg lg:text-xl">Price: $200</h2>
          <h3 className="mt-2 text-lg lg:text-xl">Discount: $30</h3>
          <h1 className="mt-2 text-lg lg:text-xl">Total Price: $170</h1>
          <p className="mt-2 text-lg lg:text-xl">Rating: ★★★★☆</p>

          {/* Login Button */}
          <Link to={"/address"}>
          <button className="mt-6 rounded-2xl h-[40px] w-[200px] bg-black text-white text-lg lg:text-xl transition-all transform hover:bg-gray-800 hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
            Order Now
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
