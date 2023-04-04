import React, { useState } from "react";
import AuthLayout from "@/layouts/authlayout";
import Auth from "@/components/ui/auth";
import PasswordStrengthBar from "react-password-strength-bar";
import InputContent from "@/components/ui/InputContent";
import Eyeslash from "@/assets/images/icon/eyeslash.svg";
import Eye from "@/assets/images/icon/eyeopen.svg";
import Image from "next/image";
import CheckBox from "@/components/ui/CheckBox";
import Google from "@/assets/images/icon/google.svg";
import Button from "@/components/ui/Button";
import Link from "next/link";
function Signup() {
  const [inputValue, setInputValue] = useState("");
  const [passwordView, setPasswordView] = useState(true);
  return (
    <AuthLayout className={"flex items-center justify-center"}> 
      <Auth className={"!min-h-[740px] !top-[7%] sm:!top-[10%] "}>
        <div className="pt-2.5 flex items-center flex-col">
          <h2 className="text-2xl font-semibold pb-2 text-blacklight">Sign up</h2>
          <p className="text-sm text-black/40 ">
            Start your free trial with Becho
          </p>
          <Button
            outline={"true"}
            className="flex items-center !py-1 px-2 text-sm my-[30px]"
          >
            <div className="p-[7px] mr-1">
              <Image src={Google} className="w-4 h-4" alt="" />
            </div>
            <span className="text-blacklight">Continue with Google</span>
          </Button>
          <div className="relative flex items-center">
            <span className="sm:w-[136px] w-[75px]  h-[1px] bg-black/10"></span>
            <p className="px-[21px] text-xs leading-[18px] whitespace-nowrap text-black/40">
              Or with Email
            </p>
            <span className="sm:w-[136px] w-[75px]  h-[1px] bg-black/10"></span>
          </div>
          <div className="w-full max-w-[388px] mt-[34px]">
            <InputContent className={"!py-2.5 dark:bg-white dark:border-black/10"}>
              <input
                type="email"
                placeholder="Email"
                className="text-sm text-blacklight w-full bg-transparent"
              />
            </InputContent>
            <InputContent className={"!py-2.5 !mb-2 flex dark:bg-white dark:border-black/10"}>
              <input
                type={passwordView ? "password" : "text"}
                placeholder="Password"
                value={inputValue}
                className="text-sm w-full placeholder:text-black/20 text-blacklight dark:bg-transparent"
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
              <Image
                src={passwordView ? Eyeslash : Eye}
                onClick={() => setPasswordView(!passwordView)}
              />
            </InputContent>
            <PasswordStrengthBar
              password={inputValue}
              minLength={5}
              barColors={[
                "#e6e6e6",
                "#ef4836",
                "#f6b44d",
                "#2b90ef",
                "#25c281",
              ]}
              scoreWordClassName={"hidden"}
              className={"password-strength-bar"}
            />
          </div>
          <div className="pt-3 pb-4">
            <p className="text-black/40 text-xs leading-[18px]">
              Use 8 or more characters with a mix of letters, numbers & symbols.
            </p>
          </div>
          <div className="w-full max-w-[388px]">
          <InputContent className={"!py-2.5 !mb-0 dark:bg-white dark:border-black/10"}>
            <input
              type="password"
              placeholder="Repeat Password"
              className="text-sm w-full placeholder:text-black/20 text-blacklight bg-transparent"
              />
          </InputContent>
          <label className="flex mt-4 mb-7">
            <CheckBox name={"select all"} className={"passowordcheck"}></CheckBox>
            <p className="text-black/80">
              I Agree with
              <span className="text-trinary-bule "> Terms of use </span>&
              <span className="  text-trinary-bule"> Privacy policy </span>
            </p>
          </label>
              </div>
          <Button
            name={"Sign In"}
            secondary={"true"}
            color={"blacklight"}
            className={"!text-lg mb-4 !py-2 w-full max-w-[388px] !bg-blacklight !text-white"}
          />
          <span className="text-black/40">
          Already have an Account? 
          <Link href={"#/"} className="text-secondary-purplea ml-[2px] text-sm">
          Sign in
          </Link>
          </span>
        </div>
      </Auth>
    </AuthLayout>
  );
}
export default Signup;
