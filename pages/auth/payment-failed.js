import React from "react";
import Link from "next/link";
import AuthLayout from "@/layouts/authlayout";
import Auth from "@/components/ui/auth";
import Image from "next/image";
import Closebtn from "@/assets/images/icon/close-icon.svg";
import Button from "@/components/ui/Button";
const PaymentFailed = () => {
  return (
    <AuthLayout className={"flex items-center justify-center"}>
      <Auth className={"sm:!min-h-[504px] !min-h-[420px]"} authClass={"hidden"}>
        <Image src={Closebtn} alt="" className="mx-auto mt-[11px] w-20" />
        <div className="flex flex-col items-center mt-[14px]">
          <h2 className="text-2xl font-semibold pb-2 text-center text-blacklight">
            Payment Failed
          </h2>
          <p className="text-sm text-black/40 text-center max-w-[353px]">
            We're sorry, but there was a problem processing your payment. Please
            check your payment details and try again. If you continue to have
            issues, please contact our customer support team for assistance.
          </p>
          <Button
            name={"Submit"}
            secondary={"true"}
            color={"blacklight"}
            className={"!text-lg sm:mb-4 mt-[33px] mb-4 !py-2 w-full max-w-[388px] dark:!bg-blacklight dark:!text-white"}
          />
          <Link href={"#/"} className="text-trinary-bule text-sm">
            Contact us
          </Link>
        </div>
      </Auth>
    </AuthLayout>
  );
};

export default PaymentFailed;
