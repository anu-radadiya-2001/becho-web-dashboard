import React, { useState } from "react";
import TabList from "@/components/store-settings/tab-list";
import UnsavedChanges from "@/components/ui/UnsavedChanges";
import Button from "@/components/ui/Button";
import Add from "@/assets/images/icon/addb.svg";
import Threedot from "@/assets/images/icon/threedot.svg";
import Image from "next/image";
import Layout from "@/layouts/layout";
import Modal from "@/components/ui/Modal";
import OrserEmail from "@/assets/images/icon/orderEmail.svg";
import InputContent from "@/components/ui/InputContent";
import TextEditer from "@/components/ui/TextEditer";
// import TextEditer from "@/components/ui/TextEditer";

const Emailorder = [
  {
    id: 1,
    icon: Add,
    title: "Order confirmation",
    discription:
      "Sent automatically to the customer after they place their order.",
  },
  {
    id: 2,
    icon: Threedot,
    title: "Order edited",
    discription:
      "Sent to the customer after their order is edited (if you select this option).",
  },
  {
    id: 3,
    icon: Add,
    title: "Order invoice",
    discription:
      "Sent automatically to the customer after they place their order.",
  },
  {
    id: 4,
    icon: Add,
    title: "Order cancelled",
    discription:
      "Sent automatically to the customer after they place their order.",
  },
  {
    id: 4,
    icon: Add,
    title: "Order refund",
    discription:
      "Sent automatically to the customer after they place their order.",
  },
  {
    id: 5,
    icon: Threedot,
    title: "Draft order invoice",
    discription:
      "Sent to the customer after their order is edited (if you select this option).",
  },
  {
    id: 6,
    icon: Threedot,
    title: "Abandoned POS checkout",
    discription:
      "Sent to the customer after their order is edited (if you select this option).",
  },
  {
    id: 7,
    icon: Add,
    title: "POS exchange receipt",
    discription:
      "Sent automatically to the customer after they place their order.",
  },
  {
    id: 8,
    icon: Threedot,
    title: "Payment error",
    discription:
      "Sent to the customer after their order is edited (if you select this option).",
  },
  {
    id: 9,
    icon: Threedot,
    title: "Pending payment error",
    discription:
      "Sent to the customer after their order is edited (if you select this option).",
  },
  {
    id: 10,
    icon: Add,
    title: "Pending payment success",
    discription:
      "Sent automatically to the customer after they place their order.",
  },
  {
    id: 11,
    icon: Add,
    title: "Payment reminder",
    discription:
      "Sent automatically to the customer after they place their order.",
  },
];

const Emailshipping = [
  {
    id: 1,
    icon: Add,
    title: "Fulfillment request",
    discription:
      "Sent automatically to the customer after they place their order.",
  },
  {
    id: 2,
    icon: Add,
    title: "Shipping confirmation",
    discription:
      "Sent automatically to the customer after they place their order.",
  },
  {
    id: 3,
    icon: Add,
    title: "Shipping update",
    discription:
      "Sent automatically to the customer after they place their order.",
  },
  {
    id: 4,
    icon: Threedot,
    title: "Out for delivery",
    discription:
      "Sent to the customer after their order is edited (if you select this option).",
  },
  {
    id: 5,
    icon: Threedot,
    title: "Delivered",
    discription:
      "Sent to the customer after their order is edited (if you select this option).",
  },
  {
    id: 6,
    icon: Threedot,
    title: "Payment error",
    discription:
      "Sent to the customer after their order is edited (if you select this option).",
  },
];
const Localdelivery = [
  {
    id: 1,
    icon: Add,
    title: "Local order out for delivery",
    discription:
      "Sent automatically to the customer after they place their order.",
  },
  {
    id: 2,
    icon: Add,
    title: "Local order delivered",
    discription:
      "Sent automatically to the customer after they place their order.",
  },
  {
    id: 3,
    icon: Add,
    title: "Local order missed delivery",
    discription:
      "Sent automatically to the customer after they place their order.",
  },
];
const Localpickup = [
  {
    id: 1,
    icon: Add,
    title: "Ready for pickup",
    discription:
      "Sent automatically to the customer after they place their order.",
  },
  {
    id: 2,
    icon: Add,
    title: "Picked up",
    discription:
      "Sent automatically to the customer after they place their order.",
  },
];
const Emailcustomer = [
  {
    id: 1,
    icon: Add,
    title: "Customer account invite",
    discription:
      "Sent automatically to the customer after they place their order.",
  },
  {
    id: 2,
    icon: Add,
    title: "Customer account welcome",
    discription:
      "Sent automatically to the customer after they place their order.",
  },
  {
    id: 3,
    icon: Add,
    title: "Customer account password reset",
    discription:
      "Sent automatically to the customer after they place their order.",
  },
  {
    id: 4,
    icon: Threedot,
    title: "B2B access email",
    discription:
      "Sent to the customer after their order is edited (if you select this option).",
  },
  {
    id: 5,
    icon: Threedot,
    title: "Contact customer",
    discription:
      "Sent to the customer after their order is edited (if you select this option).",
  },
];
const Emailmarketing = [
  {
    id: 1,
    icon: Add,
    title: "Customer marketing confirmation",
    discription:
      "Sent automatically to the customer after they place their order.",
  },
];
const Emailreturns = [
  {
    id: 1,
    icon: Add,
    title: "Return label/tracking for a return",
    discription:
      "Sent automatically to the customer after they place their order.",
  },
  {
    id: 2,
    icon: Add,
    title: "Return label for an order",
    discription:
      "Sent automatically to the customer after they place their order.",
  },
  {
    id: 3,
    icon: Add,
    title: "Return request confirmation",
    discription:
      "Sent automatically to the customer after they place their order.",
  },
  {
    id: 4,
    icon: Threedot,
    title: "Return request approved",
    discription:
      "Sent to the customer after their order is edited (if you select this option).",
  },
  {
    id: 5,
    icon: Threedot,
    title: "Return request declined",
    discription:
      "Sent to the customer after their order is edited (if you select this option).",
  },
];

const EmailSettings = () => {
  const [open, setOpen] = useState(false);


  return (
    <Layout container>
      <TabList />
      {/* /********** Email Settings start************/}
      <UnsavedChanges className={"!pr-[18px] mx-[5px]"}>
        <Button
          color={"white"}
          name={"Discard"}
          outline={"true"}
          className={"mr-5 dark:border-blacklight dark:text-blacklight"}
        />
        <Button color={"primarygreen"} name={"Save"} />
      </UnsavedChanges>

      {/* <TextEditer/> */}
      <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
        <h3 className="text-lg font-semibold text-blacklight dark:text-white">
          Orders
        </h3>
        {Emailorder.map((item, index) => (
          <div
            className="border-b pb-4 py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10"
            key={index}
          >
            <div>
              <h5 className="font-semibold text-sm">{item.title}</h5>
              <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">
                {item.discription}
              </p>
            </div>
            <Image
                src={item.icon}
                alt=""
                className="md:mr-[18px] dark:invert cursor-pointer"
                onClick={() => setOpen(true)}
              />
          </div>
        ))}
      </div>
      <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
        <h3 className="text-lg font-semibold text-blacklight dark:text-white">
          Shipping
        </h3>
        {Emailshipping.map((item, index) => (
          <div
            className="border-b pb-4 py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10"
            key={index}
          >
            <div>
              <h5 className="font-semibold text-sm color-blacklight">
                {item.title}
              </h5>
              <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">
                {item.discription}
              </p>
            </div>
            <Image
                src={item.icon}
                alt=""
                className="md:mr-[18px] dark:invert cursor-pointer"
                onClick={() => setOpen(true)}
              />
          </div>
        ))}
      </div>
      <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
        <h3 className="text-lg font-semibold text-blacklight dark:text-white">
          Local delivery
        </h3>
        {Localdelivery.map((item, index) => (
          <div
            className="border-b pb-4 py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10"
            key={index}
          >
            <div>
              <h5 className="font-semibold text-sm color-blacklight">
                {item.title}
              </h5>
              <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">
                {item.discription}
              </p>
            </div>
            <Image
                src={item.icon}
                alt=""
                className="md:mr-[18px] dark:invert cursor-pointer"
                onClick={() => setOpen(true)}
              />
           
          </div>
        ))}
      </div>
      <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
        <h3 className="text-lg font-semibold text-blacklight dark:text-white">
          Local pickup
        </h3>
        {Localpickup.map((item, index) => (
          <div
            className="border-b pb-4 py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10 "
            key={index}
          >
            <div>
              <h5 className="font-semibold text-sm color-blacklight">
                {item.title}
              </h5>
              <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">
                {item.discription}
              </p>
            </div>
            <Image
                src={item.icon}
                alt=""
                className="md:mr-[18px] dark:invert cursor-pointer"
                onClick={() => setOpen(true)}
              />
          </div>
        ))}
      </div>
      <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
        {Emailcustomer.map((item, index) => (
          <div
            className="border-b pb-4 py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10"
            key={index}
          >
            <div>
              <h5 className="font-semibold text-sm color-blacklight">
                {item.title}
              </h5>
              <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">
                {item.discription}
              </p>
            </div>
            <Image
                src={item.icon}
                alt=""
                className="md:mr-[18px] dark:invert cursor-pointer"
                onClick={() => setOpen(true)}
              />
          </div>
        ))}
      </div>
      <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
        <h3 className="text-lg font-semibold text-blacklight dark:text-white">
          Email marketing
        </h3>
        {Emailmarketing.map((item, index) => (
          <div
            className="border-b pb-4 py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10"
            key={index}
          >
            <div>
              <h5 className="font-semibold text-sm color-blacklight">
                {item.title}
              </h5>
              <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">
                {item.discription}
              </p>
            </div>
            <Image
                src={item.icon}
                alt=""
                className="md:mr-[18px] dark:invert cursor-pointer"
                onClick={() => setOpen(true)}
              />
          </div>
        ))}
      </div>
      <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
        <h3 className="text-lg font-semibold text-blacklight dark:text-white">
          Returns
        </h3>
        {Emailreturns.map((item, index) => (
          <div
            className="border-b pb-4 py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10"
            key={index}
          >
            <div>
              <h5 className="font-semibold text-sm color-blacklight">
                {item.title}
              </h5>
              <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">
                {item.discription}
              </p>
            </div>
            <Image
                src={item.icon}
                alt=""
                className="md:mr-[18px] dark:invert cursor-pointer"
                onClick={() => setOpen(true)}
              />
          </div>
        ))}
      </div>
      <Modal open={open} setOpen={setOpen} className="max-w-[972px] w-full">
        <div className="sm:p-2">
          <Image src={OrserEmail} className={"mx-auto"} />
          <div className="text-center md:py-8 py-5 max-w-[900px] w-full mx-4">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">
              Order confirmation Email
            </h2>
            <p className="font-semibold text-sm text-left mt-8 mb-6">
              Email Subject
            </p>
            <InputContent
              className={
                "!py-2.5 dark:bg-black/40 mb-3 bg-transparent border-2"
              }
            >
              <input
                type="email"
                name=""
                defaultValue={""}
                placeholder="Sent automatically to the customer after they place their order."
                className="dark:bg-transparent dark:text-white dark:placeholder:text-white/20 placeholder:text-black/20 w-full text-graydark bg-transparent"
              />
            </InputContent>
            <p className="font-semibold text-sm text-left mt-6 mb-8">
              Email Content
            </p>
            <TextEditer className="my-4" />
          </div>
          <div className="flex justify-center gap-4">
            <Button
              color="lightgrey"
              onClick={() => setOpen(false)}
              secondary="true"
              name={"Cancel"}
              className={
                "text-sm sm:!py-[18px] !py-3 max-w-[232px] w-full rounded-[15px] font-semibold"
              }
            ></Button>
            <Button
              color="bluedark"
              className={
                "sm:!py-[18px] !py-3 text-sm font-semibold max-w-[232px] rounded-[15px] w-full"
              }
              name={"Save"}
            ></Button>
          </div>
        </div>
      </Modal>
      {/* /********** Email Settings end************/}
    </Layout>
  );
};

export default EmailSettings;
