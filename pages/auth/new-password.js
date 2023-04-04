import React, { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";
import AuthLayout from "@/layouts/authlayout";
import Auth from "@/components/ui/auth";
import InputContent from "@/components/ui/InputContent";
import Eyeslash from "@/assets/images/icon/eyeslash.svg";
import Eye from "@/assets/images/icon/eyeopen.svg";
import Image from "next/image";
import CheckBox from "@/components/ui/CheckBox";
import Button from "@/components/ui/Button";

function NewPassword({ password }) {
  const [inputValue, setInputValue] = useState("");
  const [passwordView, setPasswordView] = useState(true);

  return (
    <AuthLayout className={"flex items-center justify-center"}>
      <Auth>
        <div className="pt-[63px] flex items-center flex-col">
          <h2 className="text-2xl font-semibold pb-2 dark:text-blacklight"> Setup New Password</h2>
          <p className="text-sm text-black/40 ">
            Have you already reset the password ?
            <span className="text-trinary-bule ml-[1px]">Log in</span>
          </p>
          <div className="w-full pt-7 max-w-[388px]">
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
            <div className="pt-3 pb-4">
              <p className="text-black/40 text-xs leading-[18px]">
                Use 8 or more characters with a mix of letters, numbers &
                symbols.
              </p>
            </div>
            <InputContent className={"!py-2.5 !mb-0 dark:bg-white dark:border-black/10"}>
              <input
                type="password"
                placeholder="Repeat Password"
                className="text-sm w-full placeholder:text-black/20 text-blacklight dark:bg-transparent"
              />
            </InputContent>
            <label className="flex mt-4 mb-7">  
              <CheckBox name={"select all"} className="passowordcheck" labelClass={""}></CheckBox>
              <p className="text-blacklight">
                I Agree with
                <span className="text-trinary-bule"> Terms of use </span>&
                <span className="  text-trinary-bule"> Privacy policy </span>
              </p>
            </label>
            <Button
              name={"Submit"}
              secondary={"true"}
              color={"blacklight"}
              className={"!text-lg mb-4 !py-2 w-full max-w-[388px] dark:!text-white dark:!bg-blacklight"}
            />
          </div>
        </div>
      </Auth>
    </AuthLayout>
  );
}
export default NewPassword;
