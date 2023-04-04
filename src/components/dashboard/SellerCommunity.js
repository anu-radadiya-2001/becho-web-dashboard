import React from "react";
import Image from "next/image";
import Link from "next/link";
import Block from "@/assets/images/img/Block.png";
import Layout from "@/layouts/layout";

const SellerCommunity = () => {
  return (
    <>
      {/**********Seller Community sec Start************/}
      {/* <Layout container> */}
        <div className="flex md:flex-row md:items-center flex-col mt-8 sm:mt-[42px] gap-5 md:mb-16 mb-10 ">
          <div className="max-w-[612px] w-full">
            <div className="relative">
              <Image src={Block} alt="" className="sm:min-h-[250px] rounded-2xl w-full object-cover" />
              <div className=" absolute sm:top-7 sm:left-8 top-[10px] left-5">
                <p className=" text-xs font-semibold text-[#fff]">BECHO.IO SELLER COMMUNITY</p>
              </div>
              <div className=" absolute sm:bottom-8 text-[#fff] left-5  bottom-[18px] sm:left-8">
                <h2 className="md:text-2xl sm:text-lg text-sm sm:max-w-[450px] max-w-[250px] w-full font-semibold leading-tight">
                  Empowering Indian Entrepreneurs: Join the Becho Community
                </h2>
                <div className="sm:mt-5 mt-2">
                  <Link
                    href=""
                    className="sm:text-sm text-xs  font-normal text-[#fff] py-[5px] sm:py-[6px] px-2 rounded-lg bg-[#f0f8ff50]"
                  >
                    Start the journey
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm max-w-[232px] w-full">
            <h2 className="font-semibold">What’s New</h2>
            <div className="pt-5">
              <p className="font-normal">New theme “Bharat” now available</p>
              <span className="text-xs text-black/40 dark:text-white/40">25 Jan 2023</span>
              <p className="font-normal pt-4">New payment gateways added</p>
              <span className="text-xs text-black/40 dark:text-white/40">21 Jan 2023</span>
              <p className="font-normal pt-3">A new, faster way to create and sell products</p>
              <span className="text-xs text-black/40 dark:text-white/40">18 Jan 2023</span>
            </div>
            <div className="pt-[17px]">
              <Link href="" className="text-black/40 dark:text-white/40">
                View more features
              </Link>
            </div>
          </div>
        </div>
      {/* </Layout> */}
      {/**********Seller Community sec End************/}
    </>
  );
};

export default SellerCommunity;
