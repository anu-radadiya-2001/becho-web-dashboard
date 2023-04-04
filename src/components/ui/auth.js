import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLogo from "@/assets/images/icon/authlogo.svg";

function Auth({ children ,className ,authClass ,imageClass }) {
  return (
    <div className={`bg-white min-h-[652px] mx-auto relative md:absolute sm:top-[18%] top-[12%] md:max-w-[680px] rounded-2xl sm:pr-[52px] sm:pl-[53px] sm:pb-[17px] sm:pt-[47px] p-5 w-full ${className}`}>
      <Image src={AuthLogo} alt="" className={`${imageClass}`}/>
      {children}
      <div className={`absolute right-7 sm:right-[52px] bottom-[17px] text-black/60 dark:text-black/60 ${authClass}`}>
        <ul className="flex text-sm gap-3">
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
  );
}

export default Auth;
