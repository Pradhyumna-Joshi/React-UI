import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="bg-[#4899ff] w-full py-[50px]">
      <div className="max-w-[1024px] py-[100px] text-center font-bold mx-auto">
        <div className="text-2xl md:text-4xl text-white ">Learn with us</div>
        <div className="text-4xl md:text-7xl text-white pt-[20px]">
          Grow with us
        </div>
        <div className="text-2xl md:text-5xl text-white pt-[20px]">
          Learn
          <Typed
            className="pl-4 text-black"
            strings={[
              "Web Development",
              "Android Development",
              "Ethical Hacking",
              "Digital Marketing",
            ]}
            typeSpeed={90}
            backSpeed={40}
            loop
          />
        </div>
        <button className=" bg-white  my-2 p-3 rounded font-bold mt-8">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
