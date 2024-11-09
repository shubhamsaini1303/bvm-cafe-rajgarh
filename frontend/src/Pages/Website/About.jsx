import { BsInstagram, BsTelegram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
// import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
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
  );
};

export default About;
