import Image from "next/image";
import React, { useState } from "react";
import Button from "@/components/ui/Button";
import RadioCircle from "@/assets/images/icon/radio-circle.svg";
import MediaWall from "@/assets/images/img/media-wall.png";
import Camera from "@/assets/images/icon/camera.svg";
import UnsavedChanges from "@/components/ui/UnsavedChanges";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Alert from "@/components/ui/Alert";
import InputContent from "@/components/ui/InputContent";
import OptionValue from "@/components/products/OptionValue";
import VarientDropdown from "@/components/ui/SelectOption";
import Toggle from "@/components/ui/Toggle";
import Layout from "@/layouts/layout";
import closeico from "@/assets/images/icon/close-circle.svg";

const products = () => {
  const [radiioBtn, setRadiioBtn] = useState(true);
  const [radiioBtnTwo, setRadiioBtnTwo] = useState(false);
  const radiioBtnHendler = () => {
    setRadiioBtn(true);
    setRadiioBtnTwo(false);
  };
  const radiioBtnTwoHendler = () => {
    setRadiioBtn(false);
    setRadiioBtnTwo(true);
  };
  // seo start
  const [text, setTest] = useState("Antique Drawers");
  const [searchResults, setSearchResults] = useState(
    "Antique wooden chest of drawers"
  );

  const handleHomePage = (event) => {
    setTest(event.target.value);
  };
  const handleSearchResults = (event) => {
    setSearchResults(event.target.value);
  };
  // seo end
  return (
    <Layout container>
      <UnsavedChanges>
        <Button
          color={"white"}
          name={"Discard"}
          size={"small"}
          outline={"true"}
          className={
            "!text-xs mr-5 dark:!border-blacklight dark:!text-blacklight"
          }
        />
        <Button color={"primarygreen"} name={"Save"} className={"!text-xs"} />
      </UnsavedChanges>
      <PageHeader
        arrow={true}
        className={"mb-5 flex-wrap gap-5 mt-5"}
        orderid={"Antique Drawers"}
        Badgesdata={[
          { color: "green", name: "Active" },
          { color: "purple", name: "Draft" },
        ]}
      >
        <Link
          href={""}
          className="hover:bg-black/20 hover:dark:bg-white/20 text-black/40 dark:text-white/40 text-xs rounded-lg px-2 py-[5px] hover:text-black/80"
        >
          Duplicate
        </Link>
        <Link
          href={""}
          className=" hover:bg-black/20 hover:dark:bg-white/20 text-black/40 dark:text-white/40 text-xs rounded-lg px-2 py-[5px] hover:text-black/80"
        >
          Preview
        </Link>
        <Link
          href={""}
          className="hover:bg-black/20 hover:dark:bg-white/20 text-black/40 dark:text-white/40 text-xs rounded-lg px-2 py-[5px] hover:text-black/80"
        >
          Copy Link
        </Link>
      </PageHeader>
      <Alert
        color={"red"}
        title={"There is 1 error with this product:"}
        description={"Option name can’t be blank"}
      />
      <div className="my-5">
        <Alert
          color={"green"}
          title={
            "Copy of Antique Drawers was created successfully. What’s next?"
          }
          description={"Edit other product details."}
        />
      </div>
      <div className="flex flex-wrap justify-between gap-y-5 mb-4">
        <div className="w-full md:max-w-[63%] max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl lg:pt-4 lg:pb-5 lg:px-6 p-5 sm:px-5 px-3">
          <InputContent title={"title"} titlestyle={"!mb-1"} className={"mb-3"}>
            <input
              type="text"
              name=""
              id="message"
              defaultValue="Antique Drawers"
              className="bg-transparent w-full"
            />
          </InputContent>
          <InputContent
            title={"Description"}
            titlestyle={"!mb-1"}
            className={"mb-3"}
          >
            <textarea
              rows="5"
              className="w-full dark:bg-transparent resize-none"
              defaultValue="Antique wooden chest of drawers"
            ></textarea>
          </InputContent>
          <div className="grid sm:grid-cols-2 sm:gap-6">
            <InputContent
              title={"Price"}
              titlestyle={"!mb-1"}
              className={"mb-3"}
            >
              <span className="flex items-center">
                ₹
                <input
                  type="number"
                  name=""
                  defaultValue="250.00"
                  className="w-full bg-transparent ml-1"
                />
              </span>
            </InputContent>
            <InputContent
              title={"Strikethrough Price (optional)"}
              titlestyle={"!mb-1"}
              className={"mb-3"}
            >
              <span className="flex items-center">
                ₹
                <input
                  type="number"
                  name=""
                  defaultValue="300.00"
                  className="w-full bg-transparent ml-1"
                />
              </span>
            </InputContent>
          </div>
          <InputContent
            title={"Charge tax on this product"}
            className="text-black/40 dark:text-white/40 mb-3"
          >
            <Toggle turnOff={"Off"} turnOn={"On"} />
          </InputContent>
          <div className="grid sm:grid-cols-2 sm:gap-6">
            <InputContent title={"SKU"} titlestyle={"!mb-1"} className={"mb-3"}>
              <input
                type="text"
                name=""
                defaultValue="UGG-BB-PUR-06"
                className="w-full bg-transparent uppercase"
              />
            </InputContent>
            <InputContent
              title={"Barcode (ISBN, UPC, GTIN)"}
              titlestyle={"!mb-1"}
              className={"mb-3"}
            >
              <input
                type="number"
                name=""
                defaultValue="00123456789012"
                className="w-full bg-transparent"
              />
            </InputContent>
          </div>
          <div className="grid sm:grid-cols-2 sm:gap-6">
            <InputContent
              title={"Quantity (numbers only)"}
              titlestyle={"!mb-1"}
              className={"mb-3"}
            >
              <input
                type="number"
                name=""
                defaultValue="44"
                className="w-full bg-transparent"
              />
            </InputContent>
            <InputContent
              title={"Track quantity"}
              className="text-black/40 dark:text-white/40 mb-3"
            >
              <Toggle turnOff={"No"} turnOn={"Yes"} />
            </InputContent>
          </div>
          {/* radio btn start */}
          <div className="product-type-radio grid">
            <p className="mb-[6px] text-black/40 dark:text-white/40">
              Product type (for shipping)
            </p>
            <div className="grid justify-center product-type-radio">
              <div className="grid sm:grid-cols-2 sm:gap-6">
                <div className="sm:inline-block min-h-[1.5rem]">
                  <div
                    onClick={() => radiioBtnHendler()}
                    className={`cursor-pointer bg-white dark:bg-black/40 dark:border-white/10 border border-black/10 rounded-lg py-6 px-5 mb-3 relative w-full ${
                      radiioBtn
                        ? "dark:border-secondary-purpleb "
                        : "border-black/10"
                    }`}
                  >
                    {radiioBtn ? (
                      <svg
                        width="26"
                        height="26"
                        className="absolute right-[15px] top-[15px]"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.19089 12.777C8.00482 12.5992 7.75736 12.5 7.5 12.5C7.49979 12.5 7.47732 12.5003 7.47732 12.5003C7.21217 12.5063 6.96027 12.6174 6.77704 12.8091C6.59923 12.9952 6.5 13.2426 6.5 13.5L6.50026 13.5227C6.50627 13.7878 6.61737 14.0397 6.80911 14.223L10.4716 17.723C10.8579 18.0921 11.4662 18.0924 11.8528 17.7236L19.19 10.7238C19.3819 10.5407 19.4935 10.2887 19.4997 10.0235C19.5001 10.0075 19.5001 9.9915 19.4997 9.97548C19.4936 9.72695 19.3952 9.48961 19.2236 9.30973C19.0348 9.11192 18.7734 9 18.5 9L18.4718 9.0004C18.2245 9.00738 17.9887 9.10573 17.8097 9.27645L11.1631 15.6174L8.19089 12.777Z"
                          fill="black"
                          className="dark:fill-secondary-purpleb"
                          fillOpacity="0.8"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13 0C13 0 15.6442 0 18.0605 1.02201C18.0605 1.02201 20.3936 2.00884 22.1924 3.80761C22.1924 3.80761 23.9912 5.60638 24.978 7.93951C24.978 7.93951 26 10.3558 26 13C26 13 26 15.6442 24.978 18.0605C24.978 18.0605 23.9912 20.3936 22.1924 22.1924C22.1924 22.1924 20.3936 23.9912 18.0605 24.978C18.0605 24.978 15.6442 26 13 26C13 26 10.3558 26 7.93951 24.978C7.93951 24.978 5.60638 23.9912 3.80761 22.1924C3.80761 22.1924 2.00884 20.3936 1.02202 18.0605C1.02202 18.0605 0 15.6442 0 13C0 13 0 10.3558 1.02202 7.93951C1.02202 7.93951 2.00885 5.60638 3.80761 3.80761C3.80761 3.80761 5.60638 2.00884 7.93951 1.02201C7.93951 1.02201 10.3558 0 13 0ZM13 2C13 2 10.7614 2 8.71861 2.86402C8.71861 2.86402 6.74476 3.69889 5.22183 5.22182C5.22183 5.22182 3.6989 6.74476 2.86402 8.71861C2.86402 8.71861 2 10.7614 2 13C2 13 2 15.2386 2.86402 17.2814C2.86402 17.2814 3.69889 19.2552 5.22183 20.7782C5.22183 20.7782 6.74476 22.3011 8.71861 23.136C8.71861 23.136 10.7614 24 13 24C13 24 15.2386 24 17.2814 23.136C17.2814 23.136 19.2552 22.3011 20.7782 20.7782C20.7782 20.7782 22.3011 19.2552 23.136 17.2814C23.136 17.2814 24 15.2386 24 13C24 13 24 10.7614 23.136 8.71861C23.136 8.71861 22.3011 6.74476 20.7782 5.22183C20.7782 5.22183 19.2552 3.69889 17.2814 2.86402C17.2814 2.86402 15.2386 2 13 2Z"
                          fill="black"
                          className="dark:fill-secondary-purpleb"
                          fillOpacity="0.8"
                        />
                      </svg>
                    ) : (
                      <Image
                        src={RadioCircle}
                        alt=""
                        className="absolute right-3 top-3 dark:invert"
                      />
                    )}
                    <h3
                      className={`mb-1 font-semibold dark:text-white/80 ${
                        radiioBtn
                          ? "text-black/80 dark:text-white/80"
                          : "text-black/40 dark:text-white/40"
                      }`}
                    >
                      Physical product
                    </h3>
                    <p
                      className={` ${
                        radiioBtn
                          ? "text-black/80 dark:text-white/80"
                          : "text-black/40 dark:text-white/40"
                      }`}
                    >
                      Require customers to enter shipping details at checkout.
                    </p>
                  </div>
                </div>
                <div className="sm:inline-block min-h-[1.5rem]">
                  <label
                    onClick={() => radiioBtnTwoHendler()}
                    htmlFor="inlineRadioOptions"
                    className={`cursor-pointer bg-white dark:bg-black/40  border border-black/10 rounded-lg py-6 px-5 mb-3 relative w-full ${
                      radiioBtnTwo
                        ? "dark:border-secondary-purpleb"
                        : "border-black/10 "
                    }`}
                  >
                    {radiioBtnTwo ? (
                      <svg
                        width="26"
                        height="26"
                        className="absolute right-[15px] top-[15px]"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.19089 12.777C8.00482 12.5992 7.75736 12.5 7.5 12.5C7.49979 12.5 7.47732 12.5003 7.47732 12.5003C7.21217 12.5063 6.96027 12.6174 6.77704 12.8091C6.59923 12.9952 6.5 13.2426 6.5 13.5L6.50026 13.5227C6.50627 13.7878 6.61737 14.0397 6.80911 14.223L10.4716 17.723C10.8579 18.0921 11.4662 18.0924 11.8528 17.7236L19.19 10.7238C19.3819 10.5407 19.4935 10.2887 19.4997 10.0235C19.5001 10.0075 19.5001 9.9915 19.4997 9.97548C19.4936 9.72695 19.3952 9.48961 19.2236 9.30973C19.0348 9.11192 18.7734 9 18.5 9L18.4718 9.0004C18.2245 9.00738 17.9887 9.10573 17.8097 9.27645L11.1631 15.6174L8.19089 12.777Z"
                          fill="black"
                          className="dark:fill-secondary-purpleb"
                          fillOpacity="0.8"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13 0C13 0 15.6442 0 18.0605 1.02201C18.0605 1.02201 20.3936 2.00884 22.1924 3.80761C22.1924 3.80761 23.9912 5.60638 24.978 7.93951C24.978 7.93951 26 10.3558 26 13C26 13 26 15.6442 24.978 18.0605C24.978 18.0605 23.9912 20.3936 22.1924 22.1924C22.1924 22.1924 20.3936 23.9912 18.0605 24.978C18.0605 24.978 15.6442 26 13 26C13 26 10.3558 26 7.93951 24.978C7.93951 24.978 5.60638 23.9912 3.80761 22.1924C3.80761 22.1924 2.00884 20.3936 1.02202 18.0605C1.02202 18.0605 0 15.6442 0 13C0 13 0 10.3558 1.02202 7.93951C1.02202 7.93951 2.00885 5.60638 3.80761 3.80761C3.80761 3.80761 5.60638 2.00884 7.93951 1.02201C7.93951 1.02201 10.3558 0 13 0ZM13 2C13 2 10.7614 2 8.71861 2.86402C8.71861 2.86402 6.74476 3.69889 5.22183 5.22182C5.22183 5.22182 3.6989 6.74476 2.86402 8.71861C2.86402 8.71861 2 10.7614 2 13C2 13 2 15.2386 2.86402 17.2814C2.86402 17.2814 3.69889 19.2552 5.22183 20.7782C5.22183 20.7782 6.74476 22.3011 8.71861 23.136C8.71861 23.136 10.7614 24 13 24C13 24 15.2386 24 17.2814 23.136C17.2814 23.136 19.2552 22.3011 20.7782 20.7782C20.7782 20.7782 22.3011 19.2552 23.136 17.2814C23.136 17.2814 24 15.2386 24 13C24 13 24 10.7614 23.136 8.71861C23.136 8.71861 22.3011 6.74476 20.7782 5.22183C20.7782 5.22183 19.2552 3.69889 17.2814 2.86402C17.2814 2.86402 15.2386 2 13 2Z"
                          fill="black"
                          className="dark:fill-secondary-purpleb"
                          fillOpacity="0.8"
                        />
                      </svg>
                    ) : (
                      <Image
                        src={RadioCircle}
                        alt=""
                        className="absolute right-3 top-3 dark:invert"
                      />
                    )}
                    <h3
                      className={`mb-1 font-semibold dark:text-white/80 ${
                        radiioBtnTwo
                          ? "text-black/80 dark:text-white/80"
                          : "text-black/40 dark:text-white/40"
                      }`}
                    >
                      Digital product
                    </h3>
                    <p
                      className={` ${
                        radiioBtnTwo
                          ? "text-black/80 dark:text-white/80"
                          : "text-black/40 dark:text-white/40"
                      }`}
                    >
                      Customers won’t enter shipping details at checkout.
                    </p>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 sm:gap-6">
            <InputContent
              title={"Shipping weight"}
              titlestyle={"mb-1"}
              className={"mb-3"}
            >
              <input
                type="number"
                name=""
                defaultValue="4.30"
                className="w-full bg-transparent"
              />
            </InputContent>
            <InputContent title={"Type"} titlestyle={"mb-1"} className={"mb-3"}>
              <VarientDropdown
                className={"!text-black/80 dark:!text-white/80"}
                selectitem={[
                  { id: 1, name: "kg" },
                  { id: 2, name: "g" },
                  { id: 3, name: "oz" },
                  { id: 4, name: "lb" },
                ]}
              />
            </InputContent>
          </div>
          <div className="grid">
            <p className="mb-[6px] text-black/40 dark:text-white/40">
              Variants
            </p>
            <InputContent title={"Option name"} className={"mb-3"}>
              <VarientDropdown
                className={"!text-black/80 dark:!text-white/80"}
                selectitem={[
                  { id: 1, name: "Size" },
                  { id: 2, name: "Material" },
                  { id: 3, name: "Color" },
                  { id: 4, name: "Style" },
                ]}
              />
            </InputContent>
          </div>

          <div className="grid">
            <p className="text-black/40 dark:text-white/40">Option values</p>
            {/* <OptionValue title={"Style 1"} className="flex items-center" /> */}
            <OptionValue title={"Style 1"} />
            <OptionValue title={"Style 2"} />
            <OptionValue title={"Style 3"} />
            <InputContent className="text-black/40 dark:text-white/40 max-w-[252px] w-full mt-3">
              <input
                type="text"
                placeholder="Add another value"
                className="bg-transparent text-black/80 dark:text-white/80"
              />
            </InputContent>
            <div className="flex justify-between items-end sm:py-9 py-5 pt-7 flex-wrap gap-4 ">
              <div>
                <Button
                  name={"Archive product"}
                  className="mr-3 leading-[18px]"
                  size={"medium"}
                  outline={"true"}
                  secondary={"true"}
                  color={"grey"}
                />
                <Button
                  name={"Delete product"}
                  className="leading-[18px]"
                  size={"medium"}
                  outline={"true"}
                  color={"red"}
                />
              </div>
              <Button
                name={"Save"}
                className="font-normal text-sm !px-4"
                color={"green"}
                size="large"
              />
            </div>
          </div>
        </div>
        {/* 
          <div className="grid">
            <p className="mt-[2px] text-black/40 dark:text-white/40">Option values</p>
            <OptionValue title={"Style 1"} />
            <OptionValue title={"Style 2"} />
            <OptionValue title={"Style 3"} />
            <InputContent className="text-black/40 dark:text-white/40 max-w-[252px] w-full mt-3 ">
              <input
                type="text"
                placeholder="Add another value"
                className="bg-transparent text-black/80 dark:text-white/80"
              />
            </InputContent>
            <div className="flex justify-between items-center sm:py-9 py-5 pt-7 flex-wrap gap-4 ">
              <div>
                <Button
                  name={"Archive product"}
                  className="mr-3 mt-2 leading-[18px]"
                  size={"medium"}
                  outline={"true"}
                  secondary={"true"}
                  color={"grey"}
                />
                <Button
                  name={"Delete product"}
                  className="mt-2 leading-[18px]"
                  size={"medium"}
                  outline={"true"}
                  color={"red"}
                />
              </div>
              <Button name={"Save"} className="font-normal text-sm !px-4" color={"green"} size="large" />
            </div>
          </div>
        </div> */}

        {/* radio btn end */}
        <div className="w-full md:max-w-[35%]">
          <div className="bg-primary-light dark:bg-white/5 rounded-2xl lg:pt-4 lg:pb-5 lg:px-6 sm:px-5 py-5 px-3 mb-7">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-5">
              <h3 className="text-lg font-semibold">Media</h3>
              <label className="bg-primary-blue text-blacklight text-xs font-semibold rounded-lg px-2 py-[5px] cursor-pointer">
                Add
                <input className="font-semibold" type="file" id="fileopen" />
              </label>
            </div>
            <div>
              <label
                htmlFor="fileopen"
                className="relative group max-w-[158px] w-full"
              >
                <Image
                  src={closeico}
                  alt=""
                  className={
                    "cursor-pointer dark:invert absolute -top-[8px] -right-[8px] bg-white rounded-full"
                  }
                />
                <Image
                  src={MediaWall}
                  alt=""
                  className="rounded-lg cursor-pointer"
                />
                <Image
                  src={Camera}
                  alt=""
                  className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                />
              </label>
              <p className="my-[10px] text-black/40 dark:text-white/40 pl-[7px]">
                Allowed file types: png, jpg, jpeg.
              </p>
              <div className="flex">
                <div className="relative mr-3">
                  <Image
                    src={MediaWall}
                    alt=""
                    className="w-full max-w-[50px] rounded-lg"
                  />
                  <Image
                    src={closeico}
                    alt=""
                    className={
                      "cursor-pointer dark:invert absolute w-5 -top-[8px] -right-[8px] bg-white rounded-full"
                    }
                  />
                </div>
                <div className="relative mr-3">
                  <Image
                    src={MediaWall}
                    alt=""
                    className="w-full max-w-[50px] rounded-lg"
                  />
                  <Image
                    src={closeico}
                    alt=""
                    className={
                      "cursor-pointer dark:invert absolute w-5 -top-[8px] -right-[8px] bg-white rounded-full"
                    }
                  />
                </div>
              </div>
              {/* <Image src={closeico} alt="" className={"cursor-pointer dark:invert absolute top-[5%] right-[5%]"} />  */}
            </div>
          </div>
          <div className="bg-primary-light dark:bg-white/5 rounded-2xl lg:pt-4 lg:pb-[38px] lg:px-6 sm:p-5 py-5 px-3">
            <div className="flex items-center justify-between mb-[10px]">
              <h3 className="text-lg font-semibold">SEO</h3>
            </div>
            <div>
              <p className="my-[10px] text-black/40 dark:text-white/40">
                Edit page title, meta description & URL for search engines.
              </p>
              <InputContent title={"Page title"} className={"mb-0"}>
                <input
                  type="text"
                  name=""
                  defaultValue={text}
                  onChange={handleHomePage}
                  className="w-full bg-transparent"
                />
              </InputContent>
              <p className="my-[10px] text-black/40 dark:text-white/40">
                {" "}
                <span className="text-primary-greenb font-bold">
                  {text.length}
                </span>{" "}
                of 70 characters used
              </p>
              <InputContent title={"Description"} className={"mb-0"}>
                <input
                  type="text"
                  name=""
                  defaultValue={searchResults}
                  className="w-full dark:!bg-transparent"
                  onChange={handleSearchResults}
                />
              </InputContent>
              <p className="my-[10px] text-black/40 dark:text-white/40">
                <span className="text-primary-greenb font-bold">
                  {searchResults.length}
                </span>{" "}
                of 320 characters used
              </p>
              <InputContent title={"URL handle"} className={"mb-0"}>
                <Link
                  href={"#0"}
                  className="text-black/40 dark:text-white/40 break-all"
                >
                  https://abc-store.becho.io/products/
                  <span className="text-black/80 dark:text-white/80">
                    antique-drawers
                  </span>
                </Link>
              </InputContent>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default products;
