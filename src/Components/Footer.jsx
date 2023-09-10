import React from "react";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="w-full bg-[#4899ff] ">
      <div className="py-[80px] ml-5 md:max-w-[1024px]  md:mx-auto  md:flex justify-between  ">
        <div className="w-[50%]">
          <h1 className="font-bold text-3xl">Company Tech</h1>
          <p className=" text-white mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
            iure. Necessitatibus, vero!
          </p>
          <div className="flex gap-7 mt-6">
            <BsFacebook className="h-[24px] w-[24px] text-white font-bold" />
            <BsInstagram className="h-[24px] w-[24px] text-white font-bold" />
            <FaXTwitter className="h-[24px] w-[24px] text-white font-bold" />
            <BsGithub className="h-[24px] w-[24px] text-white font-bold" />
          </div>
        </div>
        <ul className="flex flex-col gap-2 text-white mt-5">
          <h1 className="font-bold text-lg text-black">Solutions</h1>
          <li>Analytics</li>
          <li>Marketing</li>
          <li>Commerce</li>
          <li>Insights</li>
        </ul>
        <ul className="flex flex-col gap-2 text-white mt-5">
          <h1 className="font-bold text-lg text-black">Support</h1>
          <li>Pricing</li>
          <li>Documentation</li>
          <li>Guides</li>
          <li>API Status</li>
        </ul>
        <ul className="flex flex-col gap-2 text-white mt-5">
          <h1 className="font-bold text-lg text-black">Company</h1>
          <li>About</li>
          <li>Careers</li>
          <li>Blogs</li>
          <li>Press</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
