import React, { useState } from "react";
import TabList from "@/components/store-settings/tab-list";
import shield from "@/assets/images/icon/shield-check.svg";
import google from "@/assets/images/icon/google.svg";
import github from "@/assets/images/icon/github.svg";
import upi from "@/assets/images/icon/upi-smaill-icon.svg";
import Toggle from "@/components/ui/Toggle.js";
import slack from "@/assets/images/icon/slack.svg";
import Note from "@/assets/images/icon/notepencil.svg";
import Image from "next/image";
import Button from "@/components/ui/Button";
import closeico from "@/assets/images/icon/close-circle.svg";
import Layout from "@/layouts/layout";
import Modal from "@/components/ui/Modal";
import Cod from "@/assets/images/icon/cod.svg";

const PaymentGatewaysrs = () => {
  const [open, setOpen] = useState(false);
  const [openupi, setOpenupi] = useState(false);
  const [learnMore, setLearnMore] = useState(false);
  const [edit, setEdit] = useState(false);
  const [cod, setCod] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const ToggelHandler = () => {
    setEnabled(!enabled);
  };
  const text =
    "Payment methods that are available with one of Becho's approved payment providers. ";
  const data = "";
  return (
    <Layout container>
      <TabList />
      {/* /********** payment-gateway start ************/}
      <>
        <div className="w-full bg-primary-light rounded-2xl md:p-6 md:pb-2 p-4 dark:bg-white/5">
          <h4 className="text-sm font-semibold mb-4">
            Supported payment methods
          </h4>
          <div className="bg-[#E5ECF6]/50 flex items-start py-4 px-4 rounded-lg	dark:bg-white/5">
            <Image src={shield} alt="" className="mr-1 dark:invert" />
            <div>
              <p className="text-xs leading-[18px] text-black/40 dark:text-white/40">
                {learnMore ? text : `${text.substring(0, 250)}`}
                <button
                  className="btn text-secondary-purplea"
                  onClick={() => setLearnMore(!learnMore)}
                >
                  {learnMore ? "Learn less " : "Learn more"}
                </button>
              </p>
            </div>
          </div>
          <div className="flex justify-between border-b border-b-black/10 dark:border-white/10 px-4 py-4">
            <div className="flex">
              <Image src={upi} alt="" className="mr-4 max-w-[32px] w-full" />
              <div>
                <p className="font-semibold text-sm	text-blacklight dark:text-white">
                  UPI
                </p>
                <p className="text-xs	leading-[18px] text-primary-greenb dark:text-white/40">
                  Activated successfully.
                </p>
              </div>
            </div>
            <Toggle turnOff turnOn setEnabled={setEnabled} enabled={enabled} />
          </div>
          <div className="flex justify-between border-b border-b-black/10 dark:border-white/10 px-4 py-4">
            <div className="flex ">
              <Image src={google} alt="" className="mr-4" />
              <div>
                <p className="font-semibold text-sm	text-blacklight dark:text-white">
                  Google Pay
                </p>
                <p
                  className="text-xs	leading-[18px] text-secondary-red dark:text-white/40 cursor-pointer"
                  onClick={() => setOpen(true)}
                >
                  Click here to setup.
                </p>
              </div>
            </div>
            <Toggle turnOff turnOn setEnabled={setEnabled} enabled={enabled} />
          </div>
          <div className="flex justify-between px-4 py-4">
            <div className="flex">
              <Image src={slack} alt="" className="mr-4" />
              <div>
                <p className="font-semibold text-sm	text-blacklight dark:text-white">
                  PayU Money
                </p>
                <p
                  className="text-xs	leading-[18px] text-black/40 dark:text-white/40 cursor-pointer"
                  onClick={() => setOpenupi(true)}
                >
                  Switch on to start setup.
                </p>
              </div>
            </div>
            <Toggle setEnabled={setEnabled} enabled={enabled} />
          </div>
        </div>
        <div className="w-full bg-primary-light rounded-2xl mt-[18px] md:p-6 p-4 max-w-[568px] dark:bg-white/5 ">
          <div className="flex justify-between mb-4 items-center">
            <h4 className="text-sm font-semibold ">
              Set up Cash on Delivery (COD)
            </h4>
            <Button
              color="primarygreen"
              className="text-xs leading-[18px]"
              size="small"
              onClick={() => setEdit(!edit)}
            >
              {edit ? "Save" : "Edit"}
            </Button>
          </div>

          <div className="border border-black/10 py-4 px-5 rounded-lg bg-white dark:bg-black/40 dark:border-white/10 mb-4">
            <label
              htmlFor={""}
              className="text-xs leading-[18px] text-black/40 dark:text-white/40"
            >
              Additional notes
            </label>
            <div
              contentEditable={edit}
              className={`text-sm w-full dark:bg-transparent outline-none ${
                edit
                  ? "text-black/80 dark:text-white"
                  : "text-black/40 dark:text-white/40"
              }`} 
            >
              Displays to customers when they’re choosing a payment method.
            </div>
          </div>
          <div className="border border-black/10 py-4 px-5 rounded-lg bg-white dark:bg-black/40 dark:border-white/10 mb-4">
            <label
              htmlFor={""}
              className="text-xs leading-[18px] text-black/40 dark:text-white/40"
            >
              Payment instructions
            </label>
            <div
              contentEditable={edit}
              className={`text-sm w-full dark:bg-transparent outline-none ${
                edit
                  ? "text-black/80 dark:text-white"
                  : "text-black/40 dark:text-white/40"
              }`}
            >
              Displays to customers after they place an order with this payment
              method.
            </div>
          </div>
          <Button
            name={"Activate Cash on Delivery (COD)"}
            color="primarygreen"
            className="text-xs leading-[18px]"
            size="small"
            onClick={() => setCod(true)}
          />
        </div>
      </>
      <Modal
        open={openupi}
        setOpen={setOpenupi}
        className={"max-w-[544px] w-full mx-auto"}
      >
        <div className="px-2">
          <div className="flex items-center justify-between md:pb-8 pb-5">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">
              Setup UPI Payments
            </h2>
            <Image
              src={closeico}
              alt=""
              onClick={() => setOpenupi(false)}
              className={"cursor-pointer dark:invert"}
            />
          </div>
          <form autocomplete="off" method="post" action="">
            <label
              htmlFor={""}
              className="text-graydark text-lg font-semibold pb-4 "
            >
              API Key
            </label>
            <div className="relative border border-black/20 dark:border-white/20 rounded-xl overflow-hidden">
              <input
                type="email"
                id="emailadress"
                className={"w-full pr-14 px-4 py-[18px] bg-transparent"}
                autoComplete="off"
              />
              <Image
                src={Note}
                alt=""
                className={
                  "dark:invert absolute right-5 top-[50%] translate-y-[-50%]"
                }
              />
            </div>
            <label
              htmlFor={""}
              className="text-graydark text-lg font-semibold pt-6 pb-4 "
            >
              API Secret{" "}
            </label>
            <div className="relative border border-black/20 dark:border-white/20 rounded-xl overflow-hidden">
              <input
                type="password"
                id="password"
                className="w-full pr-14 px-4 py-[18px] bg-transparent"
                data-sign="*"
                autoComplete="new-password"
              />
              <Image
                src={Note}
                alt=""
                className={
                  "dark:invert absolute right-5 top-[50%] translate-y-[-50%]"
                }
              />
            </div>
          </form>
          <div className="flex justify-between md:py-9 py-4">
            <p className="font-semibold text-sm	text-blacklight dark:text-white">
              Activate
            </p>
            <Toggle blueToggle={"true"} />
          </div>
          <Button
            color="bluedark"
            secondary="true"
            name={"Save Settings"}
            className={
              "sm:!py-[18px] !py-4 text-sm !px-4 w-full rounded-[15px] font-semibold"
            }
          ></Button>
          <div className="text-center mt-10">
            {learnMore ? data : `${data.substring(0, 0)}`}
            <button
              className="btn text-blue-1"
              onClick={() => setLearnMore(!learnMore)}
            >
              {learnMore ? "Learn less " : "Learn more"}
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        open={open}
        setOpen={setOpen}
        className={"max-w-[544px] w-full mx-auto"}
      >
        <div className="px-2">
          <div className="flex items-center justify-between md:pb-8 pb-5">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">
              Setup Google Pay
            </h2>
            <Image
              src={closeico}
              alt=""
              onClick={() => setOpen(false)}
              className={"cursor-pointer dark:invert"}
            />
          </div>
          <label
            htmlFor={""}
            className="text-graydark text-lg font-semibold pb-4 "
          >
            API Key
          </label>
          <div className="relative border border-black/20 dark:border-white/20 rounded-xl overflow-hidden">
            <input
              type="email"
              className={"w-full pr-14 px-4 py-[18px] bg-transparent"}
            />
            <Image
              src={Note}
              alt=""
              className={
                "dark:invert absolute right-5 top-[50%] translate-y-[-50%]"
              }
            />
          </div>
          <label
            htmlFor={""}
            className="text-graydark text-lg font-semibold pt-6 pb-4 "
          >
            API Secret
          </label>
          <div className="relative border border-black/20 dark:border-white/20 rounded-xl overflow-hidden">
            <input
              type="password"
              className={"w-full pr-14 px-4 py-[18px] bg-transparent"}
              autoComplete="new-password"
            />
            <Image
              src={Note}
              alt=""
              className={
                "dark:invert absolute right-5 top-[50%] translate-y-[-50%]"
              }
            />
          </div>
          <div className="flex justify-between md:py-9 py-4">
            <p className="font-semibold text-sm	text-blacklight dark:text-white">
              Activate
            </p>
            <Toggle blueToggle={"true"} />
          </div>
          <Button
            color="bluedark"
            secondary="true"
            name={"Save Settings"}
            className={
              "sm:!py-[18px] !py-4 text-sm !px-4 w-full rounded-[15px] font-semibold"
            }
          ></Button>
          <div className="text-center mt-10">
            {learnMore ? data : `${data.substring(0, 0)}`}
            <button
              className="btn text-blue-1"
              onClick={() => setLearnMore(!learnMore)}
            >
              {learnMore ? "Learn less " : "Learn more"}
            </button>
          </div>
        </div>
      </Modal>
      <Modal open={cod} setOpen={setCod}>
        <div className="sm:p-2">
          <Image src={Cod} className={"mx-auto"} />
          <div className="text-center md:py-8 py-5 max-w-[672px] w-full">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">
              Activate Cash on Delivery (COD)
            </h2>
            <p className="text-black/40 dark:text-white/40 md:pt-8 pt-5">
              Are you sure you want to activate Cash on Delivery (COD) payment
              method? Activating COD will allow customers to pay for their
              orders with cash upon delivery. Please confirm if you want to
              proceed with activating the COD payment method.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Button
              color="lightgrey"
              onClick={() => setCod(false)}
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
              name={"Activate COD"}
            ></Button>
          </div>
        </div>
      </Modal>
      {/* /********** payment-gateway end ************/}
    </Layout>
  );
};

export default PaymentGatewaysrs;
