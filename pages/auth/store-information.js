import React, { useState } from "react";
import AuthLayout from "@/layouts/authlayout";
import Auth from "@/components/ui/auth";
import InputColor from "react-input-color";
import InputContent from "@/components/ui/InputContent";
import Button from "@/components/ui/Button";
import Link from "next/link";

function StoreInformation() {
  const [primaryInitial, setPrimaryInitial] = useState("#00A82D");
  const [text, setTest] = useState(
    "Describe your store in 200 characters or less."
  );
  const handleHomePage = (event) => {
    setTest(event.target.value);
  };
  const [primaryColor, setPrimaryColor] = useState({});
  return (
    <AuthLayout>
      <Auth
        className={"sm:min-h-[719px] !min-h-[760px] sm:!top-[7%] !top-[3%]"}
      >
        <div className="sm:pt-[72px] pt-12 flex items-center flex-col">
          <h2 className="text-2xl font-semibold pb-2 text-blacklight text-center">
            Store information
          </h2>
          <p className="text-sm text-black/40 text-center whitespace-nowrap">
            Don’t worry, you can change this later
          </p>
          <div className="flex sm:flex-nowrap flex-wrap w-full gap-3 sm:gap-6 justify-center pt-4 sm:pt-[30px]">
            <InputContent
              title={"Country code"}
              className="sm:max-w-[323px] dark:bg-white dark:border-black/10  w-full mb-0"
              titlestyle={"!text-blacklight"}
            >
              <textarea
                rows="2"
                className="w-full dark:text-black/80 dark:bg-transparent resize-none"
                defaultValue="Antique wooden chest of drawers"
              ></textarea>
            </InputContent>
            <InputContent
              title={"Brand color"}
              className="sm:max-w-[135px] w-full pt-4 px-[17px] pb-[13px] mb-0 dark:bg-white dark:border-black/10"
              titlestyle={"!text-blacklight"}
            >
              <div className="max-w-[101px] w-full h-[43px] rounded-[10px]  overflow-hidden">
                <input
                  type="color"
                  value={primaryColor.hex}
                  className={"absolute z-50 opacity-0"}
                  onChange={(e) => setPrimaryInitial(e.target.value)}
                />
                <InputColor
                  style={{
                    backgroundColor: primaryColor.hex,
                    width: "101px",
                    height: "43px",
                    border: "none",
                    position: "absolute",
                  }}
                  initialValue={primaryInitial}
                  onChange={setPrimaryColor}
                />
              </div>
            </InputContent>
          </div>
          <div className=" sm:max-w-[482px] pt-[19px] w-full">
            <lable className="text-blacklight font-semibold text-sm  block pb-3">
              Short description{" "}
              <span className="text-blacklight/80">
                (200 characters recommended. You've used{" "}
              </span>
              <span className="text-primary-greenb font-bold">
                {text.length}
              </span>
              )
            </lable>
            <InputContent ontent className={"pt-[15px] px-[19px] dark:bg-white dark:border-black/10"}>
              <textarea
                onChange={handleHomePage}
                type="text"
                name=""
                rows="4"
                placeholder={"Describe your store in 200 characters or less."}
                className="text-blacklight  resize-none dark:text-blacklight dark:bg-transparent text-sm w-full	outline-none"
              ></textarea>
            </InputContent>
          </div>
          <Button
            name={"Submit"}
            secondary={"true"}
            color={"blacklight"}
            className={
              "!text-lg !py-2 w-full max-w-[388px] dark:!text-white dark:!bg-blacklight"
            }
          />

          <Link href={"#/"} className="text-trinary-bule pt-4 text-sm">
            Back
          </Link>
        </div>
      </Auth>
    </AuthLayout>
  );
}

export default StoreInformation;
