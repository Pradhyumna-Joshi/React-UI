import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="bg-[#4899ff] p-4">
        <div className="max-w-[1024px] mx-auto flex items-center justify-between ">
          <div className="text-3xl  font-bold">Company Tech</div>
          {toggle ? (
            <AiOutlineCloseCircle
              onClick={() => setToggle(!toggle)}
              className="md:hidden block text-2xl font-bold text-white"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="md:hidden block text-2xl font-bold text-white"
            />
          )}

          <ul className="hidden md:flex gap-8 text-white">
            <li>Home</li>
            <li>Company</li>
            <li>Resources</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>

          {/* {} */}

          <ul
            className={`duration-300 md-hidden fixed  ${
              toggle ? "left-0" : "left-[-100%]"
            } w-full h-screen  bg-black top-[68px] text-white`}
          >
            <li className="p-5">Home</li>
            <li className="p-5">Company</li>
            <li className="p-5">Resources</li>
            <li className="p-5">About</li>
            <li className="p-5">Contact Us</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
