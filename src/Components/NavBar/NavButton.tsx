import { Link } from "react-router-dom";



const NavButton = () => {
  return (
    <div className=" md:flex hidden flex-row gap-5">
      <div className=" text-white text-center px-[20px] lg:px-[24px] py-1 border-white border-2 rounded-full">
        <Link to="/#" className=" font-[500]">Sign in</Link>
      </div>
      <div
        className={` font-[700] text-white rounded-full text-center px-[20px] lg:px-[24px] py-1 bg-[#19213D]  `}
      >
        <Link to="/#" className=" font-[500]">
         Get started
        </Link>
      </div>
    </div>
  );
};

export default NavButton;
