import React, { useState } from "react";
import TabList from "@/components/store-settings/tab-list";
import clock from "@/assets/images/icon/clock.svg";
import shield from "@/assets/images/icon/shield-check.svg";
import google from "@/assets/images/icon/google.svg";
import github from "@/assets/images/icon/github.svg";
import userimg from "@/assets/images/users/userprofile.png";
import slack from "@/assets/images/icon/slack.svg";
import closeico from "@/assets/images/icon/close-circle.svg";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Select from "@/components/dashboard/Select";
import Layout from "@/layouts/layout";
import Modal from "@/components/ui/Modal";
import InputContent from "@/components/ui/InputContent";
import MultiselectDropdown from "@/components/ui/MultiselectDropdown";
import VarientDropdown from "@/components/ui/SelectOption";
import Link from "next/link";

const Sessions = [
  { id: 1, location: "USA(5)", device: "Chrome - Windows", IP: "236.125.56.78", clock: { clock }, time: "2 mins ago" },
  {
    id: 2,
    location: "United Kingdom(10)",
    device: "Safari - Mac OS",
    IP: "236.125.56.69",
    clock: { shield },
    time: "10 mins ago",
  },
  {
    id: 3,
    location: "Norway(-)",
    device: "Safari - Mac OS",
    IP: "236.125.56.69",
    clock: { google },
    time: "10 mins ago",
  },
  {
    id: 4,
    location: "Japan(112)",
    device: "iOS - iPhone Pro",
    IP: "236.125.56.54",
    clock: { github },
    time: "30 mins ago",
  },
  {
    id: 5,
    location: "Italy(5)",
    device: "Samsung Noted 5- Android",
    IP: "236.100.56.50",
    clock: { slack },
    time: "40 mins ago",
  },
];

const permissions = () => {
  const [open, setOpen] = useState(false);
  const [openownership, setOpenownership] = useState(false);
  return (
    <Layout container>
      <TabList />
      {/* /********** permission start ************/}
      <div className="">
        <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl mb-7 md:p-6 p-4">
          <h4 className="text-lg font-semibold mb-4">Permissions</h4>
          <div className="flex items-center gap-4 justify-between border-b pb-4 mb-4 border-b-black/10 flex-wrap sm:flex-nowrap dark:border-b-white/10">
            <div>
              <p className="font-semibold text-sm	text-blacklight dark:text-white">Sanjeev Bhardwaj</p>
              <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40">
                Last login was Monday, January 30, 2023 9:52 AM GMT+5:30
              </p>
            </div>
            <Button
              name={"Transfer ownership"}
              color={"redlight"}
              className="font-normal text-xs px-3"
              size="small"
              onClick={() => setOpenownership(true)}
            />
          </div>
          <div className="flex justify-between items-center border-b-black/10 flex-wrap gap-4 sm:flex-nowrap dark:border-b-white/10">
            <div>
              <p className="font-semibold text-sm	text-blacklight dark:text-white">Staff (0 of 2)</p>
              <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40">
                Customize what your staff members can edit and access.
              </p>
            </div>
            <Button
              name={"Add staff"}
              color="yellow"
              size={"small"}
              className="font-normal text-xs !text-black/80 px-[14px]"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
        <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl md:p-6 p-4">
          <div className="flex justify-between">
            <h4 className="text-lg font-semibold">Login Sessions</h4>
            <Select
              options={[
                { id: 1, name: "7 days" },
                { id: 2, name: "24 hours" },
                { id: 3, name: "30 days" },
                { id: 4, name: "60 days" },
              ]}
            />
          </div>
          <div className="mb-2">
            <div className="overflow-x-auto">
              <table className="sm:w-full w-[640px]">
                <tbody className="w-full">
                  <tr className="w-full border-b pb-4 mb-4 border-b-black/20 dark:border-b-white/20">
                    <th className="text-black/40 text-xs font-normal leading-[18px] py-[11px] pr-4 max-w-[19%] w-full text-left dark:text-white/40">
                      Location
                    </th>
                    <th className="text-black/40 text-xs font-normal leading-[18px] py-[11px] pr-4 max-w-[27%] w-full text-left dark:text-white/40">
                      Device
                    </th>
                    <th className="text-black/40 text-xs font-normal leading-[18px] py-[11px] pr-4 max-w-[22%] w-full text-left dark:text-white/40">
                      IP Address
                    </th>
                    <th className="text-black/40 text-xs font-normal leading-[18px] py-[11px] pr-4 max-w-[22%] w-full text-left dark:text-white/40">
                      Time
                    </th>
                  </tr>
                  {Sessions.map((item, index) => (
                    <tr key={index}>
                      <td className="text-xs leading-[18px] text-blacklight text-left py-[11px] pr-4 dark:text-white">
                        {item.location}
                      </td>
                      <td className="text-xs leading-[18px] text-blacklight text-left py-[11px] pr-4 dark:text-white">
                        {item.device}
                      </td>
                      <td className="text-xs leading-[18px] text-blacklight text-left py-[11px] pr-4 dark:text-white">
                        {item.IP}
                      </td>
                      <td className="text-xs leading-[18px] text-blacklight text-left flex py-[11px] pr-4 dark:text-white">
                        <Image src={clock} alt="" className="mr-1 dark:invert" />
                        <p>{item.time}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Modal open={openownership} setOpen={setOpenownership} className={"max-w-[544px] w-full mx-auto"}>
        <div className="px-2 pb-2">
          <div className="flex items-center justify-between md:pb-8 pb-5">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">
              Transfer Store Ownership
            </h2>
            <Image
              src={closeico}
              alt=""
              onClick={() => setOpenownership(false)}
              className={"cursor-pointer dark:invert"}
            />
          </div>
          <p className="text-black/40 dark:text-white/40">
            Are you sure you want to transfer the ownership of this store? Transferring the ownership of the store will
            grant the recipient full control over the store and its contents.{" "}
            <strong>
              Please note that by transferring the ownership, you will no longer have ownership or control over the
              store.
            </strong>{" "}
            Please confirm if you want to proceed with transferring the ownership of the store.
          </p>
          <div className="flex items-center justify-between py-8 flex-wrap gap-5">
            <div className="flex items-center gap-4">
              <Image src={userimg} alt="" />
              <div>
                <h3 className="font-semibold text-black/80 dark:text-white/80">Kathryn Murphy</h3>
                <Link href={""} className={"text-black/80 dark:text-white/80 pt-2 block break-all"}>
                  KathrynMurphy5286@email.com
                </Link>
              </div>
            </div>
            <h4 className="font-semibold text-black/80 dark:text-white/80">Current owner</h4>
          </div>
          <p className="text-black/80  dark:text-white/80 font-semibold">Enter email address of new owner</p>
          <InputContent className={"mt-4 cursor-pointer py-3 px-4"}>
            <MultiselectDropdown
              className={"itemselect select-customer"}
              roundClose
              avatar={'github'} 
              options={[
                {
                  cat: "tag 1",
                  key: "heena09887@gmail.com",
                },
                {
                  cat: "tag 2",
                  key: "heena09888@gmail.com",
                },
                {
                  cat: "tag 3",
                  key: "heena09889@gmail.com",
                },
              ]}
              selectedValues={[
                {
                  cat: "heena09887@gmail.com",
                  key: "heena09887@gmail.com",
                },
              ]}
            />
          </InputContent>
          <div className="flex justify-end items-center gap-4 pt-4 mx-auto">
            <Button
              color="winered"
              name={"Transfer ownership"}
              className={"sm:!py-[18px] !py-3 text-sm sm:!px-4 w-full rounded-[15px] font-semibold"}
            ></Button>
            <Button
              color="lightgrey"
              secondary="true"
              name={"Cancel"}
              className={"sm:!py-[18px] !py-3 text-sm sm:!px-4 w-full rounded-[15px] font-semibold"}
              onClick={() => setOpenownership(false)}
            ></Button>
          </div>
        </div>
      </Modal>

      <Modal open={open} setOpen={setOpen} className={"max-w-[544px] w-full mx-auto"}>
        <div className="px-2">
          <div className="flex items-center justify-between md:pb-8 pb-5">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">Add staff member</h2>
            <Image src={closeico} alt="" onClick={() => setOpen(false)} className={"cursor-pointer dark:invert"} />
          </div>
          <p className="text-black/80  dark:text-white/80 font-semibold">Enter email address of staff member</p>
          <InputContent className={"mt-4 cursor-pointer py-3 px-4"}>
            <MultiselectDropdown
              className={"itemselect select-customer"}
              roundClose
              options={[
                {
                  cat: "tag 1",
                  key: "heena09887@gmail.com",
                },
                {
                  cat: "tag 2",
                  key: "heena09888@gmail.com",
                },
                {
                  cat: "tag 3",
                  key: "heena09889@gmail.com",
                },
              ]}
              selectedValues={[
                {
                  cat: "heena09887@gmail.com",
                  key: "heena09887@gmail.com",
                },
              ]}
            />
          </InputContent>
          <InputContent className={"!py-[18px] px-4 dark:bg-black/40 dark:text-white/40 "}>
            <VarientDropdown
              selectitem={[
                { id: 1, name: "User Role" },
                { id: 2, name: "Select 1" },
                { id: 3, name: "Select 2" },
              ]}
              className="dark:text-white/40 text-graydark font-semibold"
            />
          </InputContent>
          <div className="flex justify-end items-center gap-4 pt-6 mx-auto">
            <Button
              color="lightgrey"
              secondary="true"
              name={"Cancel"}
              className={"sm:!py-[18px] !py-3 text-sm !px-4 w-full rounded-[15px] font-semibold"}
              onClick={() => setOpen(false)}
            ></Button>
            <Button
              color="bluedark"
              secondary="true"
              name={"Save"}
              className={"sm:!py-[18px] !py-3 text-sm !px-4 w-full rounded-[15px] font-semibold"}
            ></Button>
          </div>
        </div>
      </Modal>
      {/* /********** permission end ************/}
    </Layout>
  );
};

export default permissions;
