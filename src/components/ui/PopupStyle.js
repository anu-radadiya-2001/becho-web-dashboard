import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import XCircle from "@/assets/images/icon/XCircle.svg";
import Link from "next/link";

const PopupStyle = ({ className, icon, title, description, color }) => {
  const [open, setopenpopup] = useState(true);
  const openpopupHandler = () => {
    setopenpopup(false);
  };
  return (
    <>
      <div
        className={`pt-[22px] pb-3 px-7 w-full sm:max-w-[408px] rounded-2xl outline-[1px] outline fixed sm:right-11 sm:left-auto left-[50%] bottom-14 sm:translate-x-[0] translate-x-[-50%] lgm:z-50 z-10 ${className} ${
          open ? "" : "hidden"
        }`}
        style={
          color == "green"
            ? ({background: "linear-gradient(180deg, #BAEDBD 0%, #6FCF97 100%)", outlineColor: "#6FCF97"})
            : "" || color == "blue"
            ? ({ background: "linear-gradient(180deg, #B1E3FF 0%, #56CCF2 100%)", outlineColor: "#56CCF2"})
            : "" || color == "yellow"
            ? ({ background: "linear-gradient(180deg, #FFE999 0%, #F2C94C 100%)", outlineColor: "#F2C94C"})
            : "" || color == "purple"
            ? ({ background: "linear-gradient(180deg, #C6C7F8 0%, #BB6BD9 100%)", outlineColor: "#BB6BD9"})
            : ""
          }
      >
        <div className="flex justify-between items-center mb-5">
          <Image src={icon} alt="" />
          <span>
            <Button name={"Start now"} color={"greydark"} />
          </span>
        </div>
        <h3 className="text-lg sm:text-2xl text-blacklight font-semibold sm:leading-[34px]">{title}</h3>
        <p className=" text-xs text-blacklight pt-1 mb-1.5">{description}</p>
        <Link href="" className="mr-[10px] flex justify-end" onClick={openpopupHandler}>
          <Image src={XCircle} alt="" className="mr-1" />
          <span className="text-blacklight">Close</span>
        </Link>
      </div>
    </>
  );
};

export default PopupStyle;
