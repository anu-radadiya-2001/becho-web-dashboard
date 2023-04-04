import React from "react";
import AuthLayout from "@/layouts/authlayout";
import Auth from "@/components/ui/auth";
import Button from "@/components/ui/Button";
import Link from "next/link";
import InputContent from "@/components/ui/InputContent";
function ForgotPassword() {
  return (
    <AuthLayout className={"flex items-center justify-center"}>
      <Auth className={"sm:min-h-[652px] min-h-[565px]"}>
        <div className="mt-[118px] flex items-center flex-col">
          <h2 className="text-2xl font-semibold pb-2 dark:text-blacklight">Forgot Password ?</h2>
          <p className="text-sm text-black/40 text-center">
            Enter your email to reset your password.
          </p>
          <div className="w-full max-w-[388px] my-7">
            <InputContent className={"!py-2.5 mb-0 dark:bg-white dark:border-black/10"}>
              <input
                type="email"
                placeholder="Email"
                className="text-sm w-full dark:bg-transparent text-blacklight"
              />
            </InputContent>
          </div>
          <Button
            name={"Submit"}
            secondary={"true"}
            color={"blacklight"}
            className={"!text-lg mb-4 !py-2 w-full max-w-[388px] dark:!text-white dark:!bg-blacklight"}
          />
           <Link href={"#/"} className="text-trinary-bule text-sm">Back</Link>
        </div>
      </Auth>
    </AuthLayout>
  );
}
export default ForgotPassword;
