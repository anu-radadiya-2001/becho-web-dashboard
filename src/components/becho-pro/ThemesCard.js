import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Eye from "@/assets/images/icon/Eye.svg";
import Check from "@/assets/images/icon/Check.svg";
import ArrowLineRight from "@/assets/images/icon/ArrowLineRight2.svg";
import closeico from "@/assets/images/icon/close-circle.svg";
import Modal from "../ui/Modal";
import Button from "../ui/Button";

const ThemesCard = ({ children, badgeColor, badgesName, title, description, activate, activated }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={"w-full bg-primary-light dark:bg-white/5 rounded-2xl md:p-6 p-4"}>
        <span
          className={`rounded px-1 text-xs leading-[18px] text-black/40 dark:text-black/80 inline-block mb-2 ${badgeColor}`}
        >
          {badgesName}
        </span>
        <h4 className="text-blacklight dark:text-white mb-1 font-semibold">{title}</h4>
        <p className="text-black/40 dark:text-white/40 text-xs">{description}</p>
        <div className="flex items-center mt-2 justify-between">
          <Link className="flex items-center text-black/40 dark:text-white/40 text-xs" href={"/"}>
            <Image src={Eye} className="mr-1 dark:invert" alt="" />
            Preview
          </Link>
          {children}
          {activated ? (
            <Link
              href={""}
              className="leading-5 flex items-center px-2 py-[2px] bg-primary-greenb text-white rounded-lg"
            >
              Activated
              <Image src={Check} className="ml-1" alt="" />
            </Link>
          ) : (
            ""
          )}
          {activate ? (
            <Link
              href={""}
              className="leading-5 flex items-center px-2 py-[2px] bg-blacklight text-white rounded-lg"
              onClick={() => setOpen(true)}
            >
              Activate
              <Image src={ArrowLineRight} className="ml-1" alt="" />
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} className={"max-w-[544px] w-full mx-auto "}>
        <div className="sm:px-2 pb-2">
          <div className="flex items-center justify-between md:pb-8 pb-5">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">
              Activate Theme Confirmation
            </h2>
            <Image src={closeico} alt="" onClick={() => setOpen(false)} className={"cursor-pointer dark:invert"} />
          </div>
          <p className="text-black/40 dark:text-white/40 sm:max-w-[443px] w-full mx-auto">
            Are you sure you want to activate the 'xyz' theme? Activating a new theme will change the visual appearance
            and layout of the storefront. Please confirm if you want to proceed with activating the 'xyz' theme.
          </p>
          <div className="flex justify-end sm:flex-nowrap flex-wrap items-center gap-4 mx-auto sm:mt-8 mt-5">
            <Button
              color="winered"
              name={"Cancel"}
              className={"sm:!py-[18px] !py-3 text-sm sm:!px-4 w-full rounded-[15px] font-semibold"}
            ></Button>
            <Button
              color="lightgrey"
              secondary="true"
              name={"Activate Now"}
              className={"sm:!py-[18px] !py-3 text-sm sm:!px-4 w-full rounded-[15px] font-semibold"}
            ></Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ThemesCard;
