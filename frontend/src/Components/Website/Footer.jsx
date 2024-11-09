
const Footer = () => {
  return (
    <div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-auto sm:h-[330px] py-10 sm:py-0"
        style={{
          background: "#D2B48C",
        }}
      >
        <div className="mt-4 sm:mt-[80px] flex justify-center sm:block">
          <img
            src="public/Images/Hero-Image.png"
            className="h-[100px] w-[100px] mx-auto mt-4 rounded-[100%]"
            alt="logo"
          />
        </div>
        <div className="mt-4 sm:mt-[80px] text-center sm:text-left">
          <h1 className="font-semibold text-white text-xl mt-4">About Us</h1>
          <p className="text-white font-[13px] mt-4">Our Heritage</p>
          <p className="text-white font-[13px] mt-4">Coffee House</p>
          <p className="text-white font-[13px] mt-4">Our Company</p>
        </div>
        <div className="mt-4 sm:mt-[80px] text-center sm:text-left">
          <h1 className="font-semibold text-white text-xl mt-4">Services</h1>
          <p className="text-white font-[13px] mt-4">Beverages</p>
          <p className="text-white font-[13px] mt-4">Food Items</p>
          <p className="text-white font-[13px] mt-4">Online Orders</p>
        </div>
        <div className="mt-4 sm:mt-[80px] text-center sm:text-left">
          <h1 className="font-semibold text-white text-xl mt-4">Support</h1>
          <p className="text-white font-[13px] mt-4">Customer Service</p>
          <p className="text-white font-[13px] mt-4">FAQs</p>
          <p className="text-white font-[13px] mt-4">Contact Us</p>
        </div>
        <div className="mt-4 sm:mt-[80px] text-center sm:text-left">
          <h1 className="font-semibold text-white text-xl mt-4">Connect</h1>
          <p className="text-white font-[13px] mt-4">Facebook</p>
          <p className="text-white font-[13px] mt-4">Instagram</p>
          <p className="text-white font-[13px] mt-4">Twitter</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
