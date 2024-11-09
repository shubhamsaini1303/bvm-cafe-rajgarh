
import { Link } from "react-router-dom";

const Address = () => {
  return (
    <>
      <div className="h-full mt-[3px]" style={{ background: "#C9C1C1" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[500px] gap-4 p-4">
          <div className="flex justify-center items-center">
            <img src="public/Images/Hero-Image.png" className="h-[250px] md:h-[400px] w-auto" alt="" />
          </div>
          <div className="h-auto md:h-[400px] text-center mt-5 flex flex-col justify-center">
            <h1 className="mt-4 text-sm md:text-lg">Mobile Number</h1>
            <input type="number" className="border-2 w-full md:w-2/3 mx-auto" />
            <h1 className="mt-4 text-sm md:text-lg">House Number</h1>
            <input type="text" className="border-2 w-full md:w-2/3 mx-auto" />
            <h1 className="mt-4 text-sm md:text-lg">Address</h1>
            <input type="text" className="border-2 w-full md:w-2/3 mx-auto" />
            <h1 className="mt-4 text-sm md:text-lg">City</h1>
            <input type="text" className="border-2 w-full md:w-2/3 mx-auto" />
            <div>
              <Link to="/pay">
                <button
                  type="submit"
                  className="w-full md:w-[250px] h-[40px] border border-blue-600 mt-4 mx-auto rounded-2xl bg-black text-white transition-all transform hover:bg-gray-800 hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                >
                  Submit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
