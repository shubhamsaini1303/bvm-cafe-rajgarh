import { Link } from "react-router-dom"
import { MdDashboard } from "react-icons/md";
import { TbCategoryFilled } from "react-icons/tb";

const Slider = () => {
  return (
    <div>
        <div className='border border-black bg-gray-600 min-h-screen'>
      <h2 className='text-white text-3xl text-center my-4'>BVM Admin</h2>
      <hr />
      <ul className='text-white'>
          <Link to={"/admin/dashboard"}>
        <li className='flex items-center gap-3 ml-[20px] mt-3 text-[20px]'>
          <MdDashboard /> Dashboard</li>
          </Link>
          <Link to="/admin/category"> 
          <li className='flex items-center gap-3 ml-[20px] mt-4 text-[20px]'>
         <TbCategoryFilled /> Category</li> </Link>
         <Link to="/admin/product"> 
          <li className='flex items-center gap-3 ml-[20px] mt-4 text-[20px]'>
         <TbCategoryFilled /> Product</li>
         </Link>
         <Link to="/admin/transation"> 
          <li className='flex items-center gap-3 ml-[20px] mt-4 text-[20px]'>
         <TbCategoryFilled /> Transation</li>
         </Link>
      </ul>
      </div>
        {/* <div>
            <h1 className="text-center font-semibold text-2xl">Admin Panal</h1>
            <hr />
        </div>
        <div>
            <ul className="ml-4 text-md font-semibold text-gray-500">
            <Link to={"/admin/dashboard"}><li>Dashboard</li></Link>
            <Link to={"/admin/category"}><li>Category</li></Link>
            <Link to={"/admin/product"}><li>Product</li></Link>
            <Link to={"/admin/transation"}><li>Transation</li></Link>
            </ul>
        </div> */}
    </div>
  )
}

export default Slider