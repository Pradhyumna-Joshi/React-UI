import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full  bg-[#4899ff] ">
      <div className="max-w-[1024px] mx-auto  md:flex justify-between py-[60px]">
        <div className="m-7">
          <h1 className="font-bold text-[20px] md:text-[38px] text-white">
            Want to learn latest I.T skills?
          </h1>
          <h2 className="text-white  text-[14px]">
            Sign up to our newsletter and stay up to date
          </h2>
        </div>
        <div className="m-7">
          <input
            className="p-3 text-slate-700 rounded mr-3 mb-3 font-semibold"
            type="search"
            placeholder="Enter email"
          />
          <button className="p-3 text-white bg-black rounded text-[14px]">
            Notify Me
          </button>
          <p className="text-white font-semibold">
            We care about protection of your data.Read out <br />{" "}
            <a href="#" className="text-black">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
