import React from "react";

const Expert = () => {
  return (
    <div className="max-w-[1024px] mx-auto my-10 p-2 md:grid grid-cols-2 px-[16px]">
      <div className="md:w-[80%] col-span-1  text-center">
        <img src="/images/coding.png" alt="" />
      </div>
      <div className="col-span-1 flex flex-col items-center md:items-start">
        <h1 className="font-bold text-green-400 text-xl my-2">
          Learn From Experts
        </h1>
        <p className="font-bold my-2 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rem
          cumque sequi vitae quia quasi? Accusantium eius atque aperiam et!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, ut.
        </p>
        <button className=" bg-black text-white my-2 p-3 rounded font-bold w-[30%]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Expert;
