// // src/pages/Home.jsx
// import { useAuth } from '../../Contexts/MainContext';
// import { useNavigate } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
useNavigate


const Profile = () => {
  
  const navigate = useNavigate(); // Use navigate for redirection
  
  
    // Logout function
    const handleLogout = async () => {
      navigate("/login"); // Redirect to login after logout
    };

  return (
    <div>
            <div className="min-h-screen flex flex-col justify-center items-center mt-3" style={{ background: "#C9C1C1" }}> 
        <div className="flex flex-col justify-center items-center">
          <div className="h-[200px] w-[200px] rounded-full border-4 border-white mx-auto">
            <img src="public/Images/Hero-Image.png" className="h-[180px] w-[180px] mt-[6px] mx-auto rounded-[100%]" alt="Profile" />
          </div>
          <h1 className="mt-10 text-center font-semibold text-[24px] md:text-[30px]">Welcome To SIddharth</h1>
          <button 
             onClick={handleLogout}
            className="bg-black text-[14px] font-bold text-white w-[250px] md:w-[270px] mt-8 h-[40px] rounded-[50px] transition-all transform hover:bg-gray-800 hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
          >
            Logout
          </button>
        </div>
        </div>
    </div>
  )
}

export default Profile