import React from "react";

const Plans = () => {
  return (
    <div className="py-[100px]">
      <div className="max-w-[1024px] mx-auto md:grid grid-cols-3  ">
        <div className="h-[500px] m-4 shadow-xl hover:scale-105 duration-[300ms] rounded-lg flex flex-col items-center gap-4 p-8">
          <h1 className="font-bold text-2xl">Web Development</h1>
          <h1 className="font-bold text-4xl m-4">$199</h1>
          <p className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
          <div className=" border border-slate-200 w-full"></div>
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
          <div className=" border border-slate-200 w-full"></div>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <button className="py-3 px-10 font-bold bg-green-400 rounded hover:text-white shadow-md">
            Start Trial
          </button>
        </div>
        <div className="h-[500px] m-3 shadow-xl hover:scale-105 duration-[300ms] rounded-lg flex flex-col items-center gap-4 p-8">
          <h1 className="font-bold  text-xl md:text-2xl">
            Android Development
          </h1>
          <h1 className="font-bold text-2xl md:text-4xl m-4">$199</h1>
          <p className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
          <div className=" border border-slate-200 w-full"></div>
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
          <div className=" border border-slate-200 w-full"></div>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <button className="py-3 px-10 font-bold bg-green-400 rounded hover:text-white shadow-md">
            Start Trial
          </button>
        </div>
        <div className="h-[500px] m-4 shadow-xl hover:scale-105 duration-[300ms] rounded-lg flex flex-col items-center gap-4 p-8">
          <h1 className="font-bold text-2xl">Digital Marketing</h1>
          <h1 className="font-bold text-4xl m-4">$199</h1>
          <p className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
          <div className=" border border-slate-200 w-full"></div>
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
          <div className=" border border-slate-200 w-full"></div>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <button className="py-3 px-10 font-bold bg-green-400 rounded hover:text-white shadow-md">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
