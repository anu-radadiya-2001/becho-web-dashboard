import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLayout from "@/layouts/authlayout";
import Auth from "@/components/ui/auth";
import Button from "@/components/ui/Button";
import Google from "@/assets/images/icon/google.svg";
import InputContent from "@/components/ui/InputContent";
function Login() {
  return (
    <AuthLayout className={"flex items-center justify-center"}>
      <Auth >
        <div className="pt-5 flex items-center flex-col">
          <h2 className="text-2xl font-semibold pb-2 text-blacklight"> Log in</h2>
          <p className="text-sm text-black/40 ">Continue to your Becho Store</p>
          <Button
            outline={"true"}
            secondary={"true"}
            className="flex items-center !py-1 px-2 text-sm my-[30px]"
          >
            <div className="p-[7px] mr-1">
              <Image src={Google} className="w-4 h-4" alt="" />
            </div>
            <span className="text-black">Continue with Google</span>
          </Button>
          <div className="relative flex items-center">
            <span className="sm:w-[136px] w-[75px]  h-[1px] bg-black/10"></span>
            <p className="px-[21px] text-xs leading-[18px] whitespace-nowrap text-blacklight">Or with Email</p>
            <span className="sm:w-[136px] w-[75px]  h-[1px] bg-black/10"></span>
          </div>
          <div className="my-[30px] w-full max-w-[388px]">
            <InputContent className={"!py-2.5 dark:bg-white dark:border-black/10 "}>
              <input type="email" placeholder="Email" autoComplete="off" className="dark:text-blacklight text-sm w-full bg-transparent" />
            </InputContent>
            <InputContent className={"!py-2.5 !mb-2  dark:bg-white dark:border-black/10"}>
              <input
                type="password"
                placeholder="Password"
                autoComplete="off"
                className="text-sm w-full dark:bg-transparent text-blacklight"
              />
            </InputContent>
            <Link href={"#/"} className="block text-right text-trinary-bule">Forgot Password?</Link>
          </div>
          <Button
            name={"Sign In"}
            secondary={"true"}
            color={"blacklight"}
            className={"!text-lg mb-4 !py-2 w-full max-w-[388px] dark:!text-white dark:!bg-blacklight"}
          />
          <p className="text-sm text-black/80">
            New to Becho? <Link href={"#/"} className="text-trinary-bule">Get Started</Link>{" "}
          </p>
        </div>
      </Auth>
    </AuthLayout>
  );
}
export default Login;
