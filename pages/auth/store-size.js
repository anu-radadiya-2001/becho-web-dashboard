import React, { useState } from "react";
import AuthLayout from "@/layouts/authlayout";
import Auth from "@/components/ui/auth";
import Image from "next/image";
import Dots from "@/assets/images/icon/dots.svg";
import Circle from "@/assets/images/icon/circle.svg";
import Snowui from "@/assets/images/icon/snowui.svg";
import Marketplace from "@/assets/images/icon/marketplace.svg";
import Button from "@/components/ui/Button";
import Link from "next/link";

function StoreSize() {
  const [seller, setSeller] = useState(false);
  const [merchant, setMerchant] = useState(false);
  const [marketplaceMighty, setMarketplaceMighty] = useState(false);
  const [emporium, setEmporium] = useState(false);
  const SellerBtnHendler = () => {
    setSeller(true);
    setMerchant(false);
    setMarketplaceMighty(false);
    setEmporium(false);
  };
  const MerchantBtnHendler = () => {
    setSeller(false);
    setMerchant(true);
    setMarketplaceMighty(false);
    setEmporium(false);
  };
  const MarketplaceBtnHendler = () => {
    setSeller(false);
    setMerchant(false);
    setMarketplaceMighty(true);
    setEmporium(false);
  };
  const EmporiumBtnHendler = () => {
    setSeller(false);
    setMerchant(false);
    setMarketplaceMighty(false);
    setEmporium(true);
  };

  return (
    <AuthLayout>
      <Auth
        className={"!top-[1%] sm:!top-[12%] sm:!min-h-[719px] !min-h-[827px]"}
      >
        <div className="sm:pt-[52px] pt-7 flex items-center flex-col">
          <h2 className="text-2xl text-blacklight font-semibold pb-2 text-center">
            Find the Right Fit
          </h2>
          <p className="text-sm text-black/40 text-center sm:max-w-[375px]">
            Tell us about your store's product offering, so we can offer
            personalized support to help your business thrive.
          </p>
          <div className="grid sm:grid-cols-2 sm:py-[35px] py-4 w-full gap-3">
            <div
              className={`border-[2px] border-transparent  cursor-pointer bg-primary-light rounded-lg p-4 sm:py-6 sm:pl-[17px] sm:pr-4 sm:max-w-[278px] w-full ${
                seller ? "border-blacklight " : ""
              }`}
              onClick={() => SellerBtnHendler()}
            >
              <div className="flex gap-3 items-start">
                <Image src={Dots} alt="" />
                <div>
                  <h4 className="text-sm font-semibold text-blacklight">Solo Seller</h4>
                  <p className="text-black/40  text-sm ">
                    Selling a single unique product, exclusively.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`border-[2px] border-transparent focus:border-blacklight cursor-pointer bg-primary-light rounded-lg p-4 sm:py-6 sm:pl-[17px] sm:pr-4 sm:max-w-[278px] w-full ${
                merchant ? "border-blacklight" : ""
              }`}
              onClick={() => MerchantBtnHendler()}
            >
              <div className="flex  items-start gap-3">
                <Image src={Circle} alt="" />
                <div>
                  <h4 className="text-sm font-semibold text-blacklight">Micro Merchant</h4>
                  <p className="text-black/40  text-sm ">
                    A small, but mighty business with up to 20 products.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`border-[2px] border-transparent focus:border-[2px] focus:border-blacklight cursor-pointer bg-primary-light rounded-lg p-4 sm:py-6 sm:pl-[17px] sm:pr-4 sm:max-w-[278px] w-full ${
                marketplaceMighty ? "border-blacklight " : ""
              }`}
              onClick={() => MarketplaceBtnHendler()}
            >
              <div className="flex  items-start gap-3">
                <Image src={Marketplace} alt="" />
                <div>
                  <h4 className="text-sm font-semibold text-blacklight">Mighty Marketplace</h4>
                  <p className="text-black/40  text-sm ">
                    Offering up to 50 products to a wide audience.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`border-[2px] border-transparent focus:border-blacklight cursor-pointer bg-primary-light rounded-lg p-4 sm:py-6 sm:pl-[17px] sm:pr-4 sm:max-w-[278px] w-full ${
                emporium ? "border-blacklight " : ""
              }`}
              onClick={() => EmporiumBtnHendler()}
            >
              <div className="flex items-start gap-3">
                <Image src={Snowui} alt="" />
                <div>
                  <h4 className="text-sm font-semibold text-blacklight">Global Emporium</h4>
                  <p className="text-black/40  text-sm ">
                    A vast collection of over 50 products.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Button
            name={"Submit"}
            secondary={"true"}
            color={"blacklight"}
            className={"!text-lg sm:mb-4 mb-2 !py-2 w-full max-w-[388px] dark:!text-white dark:!bg-blacklight"}
          />
           <Link href={"#/"} className="text-trinary-bule text-sm">Back</Link>
        </div>
      </Auth>
    </AuthLayout>
  );
}

export default StoreSize;
