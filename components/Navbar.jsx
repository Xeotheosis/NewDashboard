import { React, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-4xl font-bold text-white">AsPropManager</h1>
      <div className="flex items-center gap-4">
        <ul className="hidden md:flex">
          <li className="p-4">Acasa</li>
          <li className="p-4">Detalii</li>
          <li className="p-4">Abonament</li>
          <li className="p-4">Contact</li>
        </ul>
        <a className="hidden md:block p-4 w-48 bg-[#9D4edd] rounded-md font-medium text-center max-h-18 hover:cursor-pointer">
          Login
        </a>
      </div>

      <div
        onClick={handleNav}
        className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300]"
            : "hidden left-[-100% ease-in-out duration-500]"
        }>
        <h1 className="w-full text-3xl font-bold text-indigo-400 m-4">
          AsPropManager
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Acasa</li>
          <li className="p-4 border-b border-gray-600">Despre</li>
          <li className="p-4 border-b border-gray-600">Abonament</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
