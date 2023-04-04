import React from "react";
import AuthLayout from "@/layouts/authlayout";
import Auth from "@/components/ui/auth";
import Image from "next/image";
import Check from "@/assets/images/icon/Checkblack.svg";
const PaymentSuccessful = () => {
  return (
    <AuthLayout className={"flex items-center justify-center"}>
      <Auth className={"sm:!min-h-[504px] !min-h-[420px]"} authClass={"hidden"}>
        <Image src={Check} alt="" className="mx-auto mt-[11px] w-20" />
        <div className="pt-6 flex items-center flex-col">
          <h2 className="text-2xl font-semibold pb-2 text-center text-blacklight">
            Payment Successful
          </h2>
          <p className="text-sm text-black/40 text-center">
            Your payment has been processed successfully. Sit tight while we
            prepare your Becho store for you. Thank you for choosing us!
          </p>
          <p className="text-sm text-black/40 text-center mt-9 sm:mt-[53px]">We will email you when your store is ready.</p>
    
        </div>
      </Auth>
    </AuthLayout>
  );
};

export default PaymentSuccessful;
