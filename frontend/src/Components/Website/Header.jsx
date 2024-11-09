
import { useState,  } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile, CgMenu, CgClose } from "react-icons/cg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Use navigate for redirection

  // Track authentication state


  // Logout function
  const handleLogout = async () => {
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <div className="shadow-md">
      <div className="flex justify-between items-center h-[70px] p-4 bg-gray-500">
        {/* Logo */}
        <Link to={"/"}>
          <img src="public/Images/Hero-Image.png" className="h-[60px] rounded-full" alt="Logo" />
        </Link>

        {/* Large screen navigation */}
        <ul className="hidden md:flex gap-[80px] items-center text-gray-700 cursor-pointer">
          <Link to={"/"} className="text-white"><li>Home</li></Link>
          <Link to={"/order"} className="text-white"><li>Order</li></Link>
          <Link to={"/cart"} className="text-white"><li>Cart</li></Link>
          <Link to={"/about"} className="text-white"><li>About</li></Link>

          <input
            type="text"
            placeholder="Looking For Something Specific"
            className="text-[11px] text-center border border-gray-400 w-[250px] h-[30px] rounded-2xl"
          />
{/* 
            <>
              <Link to={"/profile"}>
                <li className="text-gray-400 text-3xl">
                  <CgProfile />
                </li>
              </Link>
            </> */}
            <Link to={"/login"}>
               <li className="text-gray-400 text-3xl">
                  <CgProfile />
                </li>
            </Link>
        </ul>

        {/* Mobile menu toggle button */}
        <div className="md:hidden text-3xl cursor-pointer" onClick={() => setMenuOpen(true)}>
          <CgMenu />
        </div>
      </div>

      {/* Mobile menu (sidebar) */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-[250px] h-full bg-white shadow-md z-50 p-4">
          <div className="flex justify-between items-center mb-4">
            <Link to={"/"}>
              <img src="public/Images/Hero-Image.png" className="h-[40px] rounded-full" alt="Logo" />
            </Link>
            <div className="text-3xl cursor-pointer" onClick={() => setMenuOpen(false)}>
              <CgClose />
            </div>
          </div>
          <ul className="flex flex-col gap-10 text-gray-700 cursor-pointer">
            <Link to={"/"} onClick={() => setMenuOpen(false)}><li>Home</li></Link>
            <Link to={"/order"} onClick={() => setMenuOpen(false)}><li>Order</li></Link>
            <Link to={"/cart"} onClick={() => setMenuOpen(false)}><li>Cart</li></Link>
            <Link to={"/about"} onClick={() => setMenuOpen(false)}><li>About</li></Link>

              <>
                <Link to={"/profile"} onClick={() => setMenuOpen(false)}>
                  <li className="text-gray-400 text-3xl">
                    <CgProfile />
                  </li>
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-white bg-red-500 px-4 py-2 rounded-lg"
                >
                  Logout
                </button>
              </>
              <Link to={"/login"} onClick={() => setMenuOpen(false)}>
                <li>Login</li>
              </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
