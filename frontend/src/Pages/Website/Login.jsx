

/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import { Link, useNavigate } from 'react-router-dom';
import { useState, } from 'react';

const Login = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center mt-3" style={{ background: "#C9C1C1" }}>
        <div className="flex flex-col justify-center items-center">
          <div className="h-[200px] w-[200px] rounded-full border-4 border-white mx-auto">
            <img
              src="public/Images/Hero-Image.png"
              className="h-[180px] w-[180px] mt-[6px] mx-auto rounded-[100%]"
              alt="Profile"
            />
          </div>
          <h1 className="mt-10 text-center font-semibold text-[24px] md:text-[30px]">
            WELCOME TO BVM-CAFE
          </h1>
          <Link to={"/profile"}>
          <h1> When User Logged In Profile</h1>
          </Link>
          <button
            onClick={openPopup}
            className="bg-black text-[14px] font-bold text-white w-[250px] md:w-[270px] mt-8 h-[40px] rounded-[50px] transition-all transform hover:bg-gray-800 hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
          >
            Login Or Sign Up
          </button>
        </div>

        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-xl w-[90%] max-w-[600px] p-6 mx-auto" id="popup">
              <button
                className="absolute top-4 right-4 text-black font-bold"
                onClick={closePopup}
              >
                X
              </button>
              <form onSubmit={handleSubmit}>
                <h1 className="text-[22px] md:text-[25px] font-bold">Login</h1>
                <h3 className="uppercase mt-6 text-[14px] md:text-[15px]">Username</h3>
                <input
                  type="text"
                  placeholder="Enter Email Id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-b-2 text-[13px] mt-2 w-full p-1"
                />
                <h3 className="uppercase mt-6 text-[14px] md:text-[15px]">Password</h3>
                <input
                  type="password"
                  placeholder="Enter Email Password *"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-b-2 text-[13px] mt-2 w-full p-1"
                />
                <button className="font-[1px] text-sm mt-4">Forget Password</button>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <button
                  className="rounded-2xl h-[40px] w-full bg-black text-white mt-6 transition-all transform hover:bg-gray-800 hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                >
                  Login
                </button>
              </form>
              <hr className="mt-6" />
              <span className="block text-center mt-4 text-sm">
                Don't have an account?
                <Link to={"/register"}>
                  <button className="text-blue-500 ml-1">Sign Up</button>
                </Link>
              </span>
            </div>
          </div>
        )}

        <div className="h-[100px]"></div>
      </div>
    </>
  );
};

export default Login;
