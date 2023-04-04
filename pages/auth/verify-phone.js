import React, { useState, useEffect } from "react";
import AuthLayout from "@/layouts/authlayout";
import Auth from "@/components/ui/auth";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import DeviceMobile from "@/assets/images/icon/devicemobile.svg";
import OtpInput from "@/components/ui/OtpInput";

function verifyPhone() {
  const [otp, setOtp] = useState("");
  const onChange = (value) => setOtp(value);

  return (
    <AuthLayout className={"flex items-center justify-center"}>
      <Auth className={"min-h-[680px]"}>  
        <div className="pt-[11px] flex items-center flex-col">
          <Image src={DeviceMobile} alt="" className="mx-auto pb-7" />
          <div className="pb-7">
            <h2 className="text-2xl text-blacklight font-semibold pb-2 text-center">
              Verify phone number
            </h2>
            <p className="text-sm text-black/40 text-center">
              Enter the verification code we sent to
            </p>
          </div>
          <h3 className="text-lg text-blacklight font-semibold">******7896</h3>
          <Link href={"#/"} className="text-trinary-bule text-sm mb-[33px]">
            Edit
          </Link>
          <p className="text-sm font-semibold text-blacklight">
            Type your 6 digit security code
          </p>
          <div className="pt-3">
            <OtpInput value={otp} valueLength={1} onChange={onChange} />
          </div>
          <Button
            name={"Submit"}
            secondary={"true"}
            color={"blacklight"}
            className={"!text-lg mb-4 mt-7 !py-2 w-full max-w-[388px] dark:!text-white dark:!bg-blacklight"}
          />
          <span className="text-black/80">
            Didn’t get the code?
            <Link href={"#/"} className="text-trinary-bule ml-[2px] text-sm">
              Resend
            </Link>
          </span>
        </div>
      </Auth>
    </AuthLayout>
  );
}

export default verifyPhone;
