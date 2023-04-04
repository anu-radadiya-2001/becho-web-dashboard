import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthLayout from "@/layouts/authlayout";
import Auth from "@/components/ui/auth";
import Logobecho from "@/assets/images/icon/Logobechoblack.svg";
import Button from "@/components/ui/Button";
import Toggle from "@/components/ui/Toggle";
import GreenCheck from "@/assets/images/icon/green-check.svg";
import BalckCheck from "@/assets/images/icon/balck-check.svg";
import Wish from "@/assets/images/icon/Wish.svg";

function ChoosePlan() {
  const [enabled, setEnabled] = useState(false);
  const ToggelHandler = () => {
    setEnabled(!enabled);
  };

  return (
    <>
      <div className="auth-bg min-h-screen h-full pb-[61px] px-5">
        <Image
          src={Logobecho}
          alt=""
          className=" max-w-[176px] 2xl:max-w-[277px] mx-auto w-full pt-[48px] pb-[34px]"
        />
        <div className="bg-white 2xl:!max-w-[1371px] lgm:max-w-[1100px] lg:max-w-[1000px] w-full md:max-w-[720px] sm:!max-w-630px rounded-2xl p-5 sm:!pt-[30px] sm:!px-[30px] md:!px-[41px] md:!pt-[57px] mx-auto">
          <div className="flex items-center flex-col ">
            <h2 className="text-2xl text-blacklight font-semibold pb-2 text-center">
              Find Your Perfect Plan
            </h2>
            <p className="text-sm text-black/40 text-center max-w-[353px] pb-6 md:pb-[74px]">
              Explore our plans and choose the one that's right for your
              business.
            </p>
            <div className="xl:text-xl text-lg text-[#3E3E59] font-semibold w-full max-w-fit mx-auto mb-5 md:mb-10 flex items-center flex-wrap	">
              Pay Monthly
              <div
                className="xl:px-8 md:px-3 px-1 inline-block"
                onclick={ToggelHandler}
              >
                <Toggle
                  className={"bg-black"}
                  bigToggle={"true"}
                  switchOffClass={"dark:bg-black900"}
                  switchOnClass={"!dark:bg-trinary-bule !bg-trinary-bule "}
                  switchCloseClass={"dark:bg-white"}
                  setEnabled={setEnabled}
                  enabled={enabled}
                />
              </div>
              Pay Yearly <strong> (Save 35%)</strong>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 lg:gap-8 md:gap-4 mb-[52px]">
              <div className="border shadow-[0px_12px_16px_rgba(0,0,0,0.0364401)] rounded-3xl border-solid border-black300 p-5 xl:p-10 sm:p-6">
                <div className="sm:min-h-[194px]" pb-3>
                  <h4 className="xl:text-[22px] md:text-xl text-lg font-bold text-black900 mb-[7px]">
                    Lite
                  </h4>
                  <p className="text-base text-bright-grey mb-[19px]">
                    For startups
                  </p>
                  <h2 className="xl:text-5xl md:text-3xl text-[26px] font-bold text-black900 mb-[7px] dark:text-black900">
                    {enabled ? "₹501" : "₹770"}
                    <span className="text-xl">/mo</span>
                  </h2>
                  <p className="text-base text-bright-grey">Per store</p>
                </div>
                <ul className="flex flex-wrap xl:mt-[31px] mt-5 xl:mb-20 md:mb-14 mb-10">
                  <li className="w-full flex md:mb-3 mb-2 xl:text-lg text-base text-black800">
                    <Image src={GreenCheck} alt="" className="mr-[6px]" /> Up to
                    20 products
                  </li>
                  <li className="w-full flex md:mb-3 mb-2 xl:text-lg text-base text-black800">
                    <Image src={GreenCheck} alt="" className="mr-[6px]" /> 2
                    staff accounts
                  </li>
                  <li className="w-full flex md:mb-3 mb-2 xl:text-lg text-base text-black800">
                    <Image src={GreenCheck} alt="" className="mr-[6px]" />{" "}
                    Professional reports
                  </li>
                  <li className="w-full flex md:mb-3 mb-2 xl:text-lg text-base text-black800">
                    <Image src={GreenCheck} alt="" className="mr-[6px]" /> 6%
                    commission per order
                  </li>
                  <li className="w-full flex md:mb-3 mb-2 xl:text-lg text-base text-black800">
                    <Image src={GreenCheck} alt="" className="mr-[6px]" /> Free
                    templates
                  </li>
                </ul>
                <Button className="bg-black900 lgm:text-[22px] lg:text-xl !text-lg leading-tight text-white w-full rounded-[96px]  lgm:py-[19px] lg:py-[15px] sm:py-3 !py-3 px-4 font-bold flex gap-1 justify-center items-center">
                  Choose
                </Button>
              </div>
              <div className="pricing-pro-box auth-bg relative border shadow-[0px_12px_16px_rgba(0,0,0,0.0364401)] rounded-3xl border-solid border-black300 p-5 xl:p-10 sm:p-6">
                <Image src={Wish} alt="" className="absolute top-10 right-10" />
                <div className="sm:min-h-[194px]" pb-3>
                  <h4 className="xl:text-[22px] md:text-xl text-lg font-bold  text-brand05 mb-[7px] ">
                    Pro
                  </h4>
                  <p className="text-base text-brand05 mb-[19px]">
                    Everything + More
                  </p>
                  <h2 className="xl:text-5xl md:text-3xl text-[26px] font-bold text-brand05 mb-[7px]">
                    {enabled ? "₹1001" : "₹1540"}
                    <span className="text-xl">/mo</span>
                  </h2>
                  <p className="text-base text-brand05">Per store</p>
                </div>
                <ul className="flex flex-wrap xl:mt-[31px] mt-5 xl:mb-20 md:mb-14 mb-10">
                  <li className="text-brand05 w-full flex md:mb-3 mb-2 xl:text-lg text-base">
                    <Image src={BalckCheck} alt="" className="mr-[6px]" /> Up to
                    100 products
                  </li>
                  <li className="text-brand05 w-full flex md:mb-3 mb-2 xl:text-lg text-base">
                    <Image src={BalckCheck} alt="" className="mr-[6px]" /> 3
                    staff accounts
                  </li>
                  <li className="text-brand05 w-full flex md:mb-3 mb-2 xl:text-lg text-base">
                    <Image src={BalckCheck} alt="" className="mr-[6px]" />{" "}
                    Professional reports
                  </li>
                  <li className="text-brand05 w-full flex md:mb-3 mb-2 xl:text-lg text-base">
                    <Image src={BalckCheck} alt="" className="mr-[6px]" /> 3%
                    commission per order
                  </li>
                  <li className="text-brand05 w-full flex md:mb-3 mb-2 xl:text-lg text-base">
                    <Image src={BalckCheck} alt="" className="mr-[6px]" /> Free
                    templates
                  </li>
                </ul>
                <Button className="bg-black900  lgm:text-[22px] lg:text-xl !text-lg leading-tight text-white w-full rounded-[96px] lgm:py-[19px] lg:py-[15px] sm:py-3 !py-3 px-4 font-bold flex gap-1 justify-center items-center">
                  Choose
                </Button>
              </div>
              <div className="border shadow-[0px_12px_16px_rgba(0,0,0,0.0364401)] rounded-3xl border-solid border-black300 p-5 xl:p-10 sm:p-6">
                <div className="sm:min-h-[194px] pb-3">
                  <h4 className="lgm:text-[22px] md:text-xl text-lg font-bold text-black800 mb-[7px]">
                    Premier
                  </h4>

                  <p className="text-base text-bright-grey md:mb-[19px] mb-[14px]">
                    Custom plan
                  </p>
                  <h2 className="xl:text-5xl md:text-3xl text-[26px] font-bold text-black900 mb-[7px]">
                    On request
                  </h2>
                </div>
                <ul className="flex flex-wrap xl:mt-[31px] mt-5 xl:mb-20 md:mb-14 mb-10">
                  <li className="text-brand05 w-full flex md:mb-3 mb-2 xl:text-lg text-base ">
                    <Image
                      src={GreenCheck}
                      alt=""
                      className="mr-[6px] md:w-6 w-5"
                    />{" "}
                    Unlimited products
                  </li>
                  <li className="text-brand05 w-full flex md:mb-3 mb-2 xl:text-lg text-base ">
                    <Image
                      src={GreenCheck}
                      alt=""
                      className="mr-[6px] md:w-6 w-5"
                    />{" "}
                    Unlimited staff accounts
                  </li>
                  <li className="text-brand05 w-full flex md:mb-3 mb-2 xl:text-lg text-base ">
                    <Image
                      src={GreenCheck}
                      alt=""
                      className="mr-[6px] md:w-6 w-5"
                    />{" "}
                    Professional reports
                  </li>
                  <li className="text-brand05 w-full flex md:mb-3 mb-2 xl:text-lg text-base ">
                    <Image
                      src={GreenCheck}
                      alt=""
                      className="mr-[6px] md:w-6 w-5"
                    />{" "}
                    Custom commission rates
                  </li>
                  <li className="text-brand05 w-full flex md:mb-3 mb-2 xl:text-lg text-base ">
                    <Image
                      src={GreenCheck}
                      alt=""
                      className="mr-[6px] md:w-6 w-5"
                    />{" "}
                    Free templates
                  </li>
                </ul>
                <Button className="bg-black900 lgm:text-[22px] lg:text-xl !text-lg leading-tight text-white w-full rounded-[96px] lgm:py-[19px] lg:py-[15px] sm:py-3 !py-3 px-4 font-bold flex gap-1 justify-center items-center">
                  Email us
                </Button>
              </div>
            </div>
          </div>
          <div className={` text-black/60 dark:text-black/60 `}>
        <ul className="flex justify-end items-center text-sm gap-3">
          <li>
            <Link href={"#/"}>Help</Link>
          </li>
          <li>
            <Link href={"#/"}>Privacy Policy</Link>
          </li>
          <li>
            <Link href={"#/"}>Terms of Use</Link>
          </li>
        </ul>
      </div>
        </div>
      </div>
    </>
  );
}
export default ChoosePlan;
