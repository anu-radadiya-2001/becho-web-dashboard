import React, { useState, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";
import Link from "next/link";
import Bechologo from "@/assets/images/icon/becho-black-logo.svg";
import WarningCircle from "@/assets/images/icon/warning-circle.svg";
import Bechoproimg from "@/assets/images/icon/becho-pro.svg";
import CheckBox from "@/components/ui/CheckBox";
import Upi from "@/assets/images/icon/upi-icon.svg";
import Bechostore from "@/assets/images/icon/bechostoreicon.svg";
import Button from "@/components/ui/Button";
import ThemesCard from "@/components/becho-pro/ThemesCard";
import Layout from "@/layouts/layout";
import Badges from "@/components/ui/Badges";
import Modal from "@/components/ui/Modal";
import closeico from "@/assets/images/icon/close-circle.svg";
import DownloadSimple from "@/assets/images/icon/DownloadSimple.svg";
import InputContent from "@/components/ui/InputContent";
import MultiselectDropdown from "@/components/ui/MultiselectDropdown";
import VarientDropdown from "@/components/ui/SelectOption";
import Toggle from "@/components/ui/Toggle";
import GreenCheck from "@/assets/images/icon/green-check.svg";
import BalckCheck from "@/assets/images/icon/balck-check.svg";
import Wish from "@/assets/images/icon/Wish.svg";

const BillingHistory = [
  {
    id: 1,
    date: "Nov 01, 2022",
    description: "Invoice for Ocrober 2022",
    amount: "₹123.79",
    invoice: "PDF",
  },
  {
    id: 2,
    date: "Oct 08, 2022",
    description: "Invoice for September 2022",
    amount: "₹123.79",
    invoice: "PDF",
  },
  {
    id: 3,
    date: "Aug 24, 2022",
    description: "5% Commission",
    amount: "₹123.79",
    invoice: "PDF",
  },
  {
    id: 4,
    date: "Aug 01, 2022",
    description: "Invoice for July 2022",
    amount: "₹123.79",
    invoice: "PDF",
  },
  {
    id: 5,
    date: "Jul 01, 2022",
    description: "Invoice for June 2022",
    amount: "₹123.79",
    invoice: "PDF",
  },
];

const Information = [
  {
    id: 1,
    name: "full name",
    title: "Successful payments",
    discription: "Receive a notification for every successful payment.",
  },
  {
    id: 2,
    name: "full name2",
    title: "Paid orders",
    discription:
      "Receive a notification each time you collect a fee from sales.",
  },
  {
    id: 3,
    name: "full name3",
    title: "Unpaid orders",
    discription:
      "Receive a notification if a payment is disputed by a customer and for dispute purposes.",
  },
  {
    id: 4,
    name: "full name4",
    title: "Refund requests",
    discription:
      "Receive a notification if a payment is stated as risk by the Finance Department.",
  },
  {
    id: 5,
    name: "full name5",
    title: "Invoice Payments",
    discription:
      "Receive a notification if a customer sends an incorrect amount to pay their invoice.",
  },
  {
    id: 6,
    name: "full name6",
    title: "Order delivery status",
    discription:
      "Receive notifications for consistently failing webhook API endpoints.",
    border: "border-none",
  },
];

const Bechopro = () => {
  const [enabled, setEnabled] = useState(false);
  const ToggelHandler = () =>{
    setEnabled(!enabled)
  }
  const [learnMore, setLearnMore] = useState(false);
  const text =
    "For extra security, this requires you to confirm your email and phone number confirm your email. ";

  const [open, setOpen] = useState(false);
  const [openStore, setOpenStore] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [sendOtp, setSendOtp] = useState("true");
  const [deleteStore, setDeleteStore] = useState(false);
  const [editDomain, setEditDomain] = useState(false);
  const [editAddress, setEditAddress] = useState(false);
  const [editComAddress, setEditComAddress] = useState(false);
  const [editAdressBill, setAddress] = useState(false);
  const [updatePlan, setUpdatePlan] = useState(false);

  const sendOtpHandler = (e) => {
    if (!e.target.value == 0) {
      setSendOtp("");
      return;
    } else {
      setSendOtp("true");
    }
  };

  const permanentlyHandler = () => {
    if (sendOtp == "") {
      setDeleteStore(true);
    } else {
      setDeleteStore(false);
    }
  };
  return (
    <Layout container>
      <div className="flex justify-center items-center mt-[6px] mb-11">
        <Image src={Bechologo} alt="" className="mr-4 dark:invert" />
        <Image src={Bechoproimg} alt="" className="" />
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Billing</Tab>
            <Tab>Custom Domain</Tab>
            <Tab>Themes</Tab>
          </TabList>
          <TabPanel>
            <>
              <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl mb-6 md:p-6 p-4">
                <h4 className="text-lg font-semibold mb-6">
                  Your plan details
                </h4>
                <div className="flex items-center gap-4 justify-between border-b pb-4 border-b-black/10 flex-wrap sm:flex-nowrap dark:border-b-white/10">
                  <div>
                    <h4 className="font-semibold text-2xl	text-blacklight dark:text-white">
                      Essential (Monthly)
                    </h4>
                    <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40">
                      Base plan with 20 products
                    </p>
                  </div>
                  <Link
                    href={""}
                    className="font-semibold text-lg flex items-center px-[21px] py-2 bg-primary-greenb text-white rounded-md "
                    onClick={() => setUpdatePlan(true)}
                  >
                    Update plan
                    <svg
                      className="ml-2"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"  
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.07459 15.4419C6.80847 15.1979 6.80847 14.8021 7.07459 14.5581L11.5625 10.4419C11.8286 10.1979 11.8286 9.80214 11.5625 9.55806L7.07459 5.44194C6.80847 5.19786 6.80847 4.80214 7.07459 4.55806C7.34072 4.31398 7.77219 4.31398 8.03831 4.55806L12.5262 8.67418C13.3246 9.40641 13.3246 10.5936 12.5262 11.3258L8.03831 15.4419C7.77219 15.686 7.34072 15.686 7.07459 15.4419Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center gap-4 justify-between border-b py-4 border-b-black/10 flex-wrap sm:flex-nowrap dark:border-b-white/10">
                  <div>
                    <h5 className="font-semibold text-sm	text-blacklight dark:text-white">
                      ₹101 per month
                    </h5>
                    <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40">
                      Next billing date: 03/03/2023
                    </p>
                  </div>
                  <Button
                    name={"Change billing cycle"}
                    className="leading-[18px] !px-[13px] !py-1 "
                    size={"smaill"}
                    outline={"true"}
                    secondary={"true"}
                    color={"grey"}
                    onClick={() => setUpdatePlan(true)}
                  />
                </div>
                <div className="flex justify-between items-center pt-4 flex-wrap gap-4 sm:flex-nowrap dark:border-b-white/10">
                  <div>
                    <h5 className="font-semibold text-sm	text-blacklight dark:text-white">
                      Payment method
                    </h5>
                    <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40 flex items-center">
                      <Image src={Upi} alt="" className="mr-[2px]" />
                      heena7786@oksbi
                    </p>
                  </div>
                  <Button
                    name={"Change payment method"}
                    className="leading-[18px] px-[10px] !py-1"
                    size={"smaill"}
                    outline={"true"}
                    secondary={"true"}
                    color={"grey"}
                  />
                </div>
              </div>
              <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl md:p-6 p-4 mb-6">
                <div className="flex justify-between mb-[15px] flex-wrap">
                  <h4 className="text-sm font-semibold">Billing History</h4>
                  <div>
                    <Link
                      href={""}
                      className="text-xs text-blacklight dark:text-white py-1 px-2 font-semibold"
                    >
                      Month
                    </Link>
                    <Link
                      href={""}
                      className="text-xs text-black/40 dark:text-white/40 ml-1 py-1 px-2"
                    >
                      Year
                    </Link>
                    <Link
                      href={""}
                      className="text-xs text-black/40 dark:text-white/40 ml-1 py-1 px-2"
                    >
                      All Time
                    </Link>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="sm:w-full w-[640px]">
                    <tbody className="w-full">
                      <tr className="w-full border-b pb-4 mb-4 border-b-black/20 dark:border-b-white/20">
                        <th className="text-black/40 text-xs font-normal leading-[18px] py-[11px] pr-4 max-w-[19%] w-full text-left dark:text-white/40">
                          Date
                        </th>
                        <th className="text-black/40 text-xs font-normal leading-[18px] py-[11px] pr-4 max-w-[27%] w-full text-left dark:text-white/40">
                          Description
                        </th>
                        <th className="text-black/40 text-xs font-normal leading-[18px] py-[11px] pr-4 max-w-[22%] w-full text-left dark:text-white/40">
                          Amounts
                        </th>
                        <th className="text-black/40 text-xs font-normal leading-[18px] py-[11px] pr-4 max-w-[22%] w-full text-left dark:text-white/40">
                          Invoice
                        </th>
                      </tr>
                      {BillingHistory.map((item, index) => (
                        <tr key={index}>
                          <td className="text-xs leading-[18px] text-blacklight text-left py-[11px] pr-4 dark:text-white">
                            {item.date}
                          </td>
                          <td className="text-xs leading-[18px] text-blacklight text-left py-[11px] pr-4 dark:text-white">
                            {item.description}
                          </td>
                          <td className="text-xs leading-[18px] text-blacklight text-left py-[11px] pr-4 dark:text-white">
                            {item.amount}
                          </td>
                          <td className="text-xs leading-[18px] text-secondary-purplea text-left flex py-[11px] pr-4 ">
                            <Button
                              name={"PDF Download"}
                              className="leading-[18px] !py-[2px] flex items-center"
                              size={"medium"}
                              outline={"true"}
                              secondary={"true"}
                              color={"grey"}
                            >
                              <Image
                                src={DownloadSimple}
                                alt=""
                                className="ml-1 dark:invert"
                              />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl md:p-6 p-4 mb-6">
                <h4 className="text-sm font-semibold mb-4">Billing Address</h4>
                <div className="bg-primary-purple/50 dark:bg-black/40 rounded-2xl p-4">
                  <div className="flex justify-between items-center">
                    <h4 className="dark:text-white text-blacklight font-semibold">
                      Heena Vinayak’s Address
                    </h4>
                    <Button
                      color={editAdressBill ? "primarygreen" : "lightgrey"}
                      name={editAdressBill ? "Save" : "Edit"}
                      secondary={"true"}
                      className={"leading-[18px] px-2 !py-[5px] "}
                      onClick={() => setAddress(!editAdressBill)}
                    ></Button>
                  </div>
                  <div
                    className={`w-full outline-none ${
                      editAdressBill
                        ? "text-black dark:text-white"
                        : "text-black/40 dark:text-white/40"
                    }`}
                    contentEditable={editAdressBill}
                  >
                    Exploit Cross-Platform Mindshare <br />
                    52, Ekbal Society, ShwetaPur Pilani <br /> 459501 Pilani
                    Rajasthan India
                  </div>
                </div>
                <div className="bg-primary-purple/50 dark:bg-black/40 rounded-2xl p-4 mt-4">
                  <div className="flex justify-between items-center">
                    <h4 className="dark:text-white text-blacklight font-semibold">
                      Company - ABC Services Private Limited
                    </h4>
                    <Button
                      color={editComAddress ? "primarygreen" : "lightgrey"} 
                      name={editComAddress ? "Save" : "Edit"}
                      secondary={"true"}
                      className={"leading-[18px] px-2 !py-[5px]"}
                      onClick={() => setEditComAddress(!editComAddress)}
                      ></Button>
                  </div>
                  <div
                    className={`w-full outline-none ${
                      editComAddress
                        ? "text-black dark:text-white"
                        : "text-black/40 dark:text-white/40"
                    }`}
                    contentEditable={editComAddress}
                  >
                    Exploit Cross-Platform Mindshare <br />
                    52, Ekbal Society, ShwetaPur Pilani <br /> 459501 Pilani
                    Rajasthan India
                  </div>
                </div>
                <p className="w-full text-black/40 dark:text-white/40 mt-4">
                  Tax Location : India - 18% GST
                </p>
              </div>
              <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl md:p-6 md:pb-2 p-4 mb-6">
                <div className="flex justify-between items-center flex-wrap gap-5">
                  <h2 className="font-semibold text-sm leading-5">
                    Email Preferences
                  </h2>
                  <div className="flex justify-end items-center gap-2">
                    <Button
                      color="lightgrey"
                      size="small"
                      name={"Discard"}
                      secondary={"true"}
                      className={"leading-[18px]"}
                    ></Button>
                    <Button
                      color="blacklight"
                      size="small"
                      className={"leading-[18px]"}
                      name={"Save Changes"}
                    ></Button>
                  </div>
                </div>
                <>
                  {Information.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center md:items-center gap-3 sm:px-5 py-4 border-b border-black/10 dark:border-white/10 ${item.border}`}
                    >
                      <CheckBox name={item.name}></CheckBox>
                      <div>
                        <p className="text-sm font-semibold">{item.title}</p>
                        <span className="text-xs text-black/40 dark:text-white/40 ">
                          {item.discription}
                        </span>
                      </div>
                    </div>
                  ))}
                </>
              </div>
              <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl md:p-6 md:pb-[30px] p-4 mb-6">
                <div className="flex justify-between items-center flex-wrap gap-5 mb-4">
                  <h2 className="font-semibold text-sm leading-5">
                    Deactivate Account & Store
                  </h2>
                  <div className="flex justify-end items-center gap-2">
                    <Button
                      color="secondary-red"
                      size="small"
                      name={"Deactivate store"}
                      onClick={() => setOpenStore(true)}
                    ></Button>
                  </div>
                </div>
                <div className="bg-primary-purple/50 flex items-start py-4 px-4 rounded-lg	dark:bg-white/5">
                  <Image
                    src={WarningCircle}
                    className="mr-1 dark:invert"
                    alt=""
                  />
                  <div>
                    <h4 className="text-xs leading-[18px]">
                      You Are Deactivating Your Account
                    </h4>
                    <p className="text-xs leading-[18px] text-black/40 dark:text-white/40">
                      {learnMore ? text : ` ${text.substring(0, 77)}`}
                      <button
                        className="btn text-secondary-purplea"
                        onClick={() => setLearnMore(!learnMore)}
                      >
                        {learnMore ? "Learn less " : " Learn more"}
                      </button>
                    </p>
                  </div>
                </div>
                <div className="flex items-center mt-5">
                  <CheckBox name={"confirm my account"} className="ml-4">
                    <h4>I confirm my account deactivation</h4>
                  </CheckBox>
                </div>
              </div>
            </>
          </TabPanel>
          <TabPanel>
            <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl mb-7 md:p-6 p-4">
              <div className="flex items-center gap-4 justify-between border-b pb-4 border-b-black/10 flex-wrap sm:flex-nowrap dark:border-b-white/10">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-2xl	text-blacklight dark:text-white">
                      Custom Domain
                    </h4>
                    <Badges color={"green"} name={"Activated"} />
                  </div>
                  <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40">
                    https://thehustlecompany.com/
                  </p>
                </div>
                <div className="flex gap-3">
                  <Link
                    href={""}
                    onClick={() => setOpen(true)}
                    className="text-xs flex items-center px-2 py-[5px] bg-primary-greenb text-white rounded-lg"
                  >
                    Edit domain
                    <svg
                      className="ml-1"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.65967 12.3536C5.44678 12.1583 5.44678 11.8417 5.65967 11.6464L9.25 8.35355C9.4629 8.15829 9.4629 7.84171 9.25 7.64645L5.65968 4.35355C5.44678 4.15829 5.44678 3.84171 5.65968 3.64645C5.87257 3.45118 6.21775 3.45118 6.43065 3.64645L10.021 6.93934C10.6597 7.52513 10.6597 8.47487 10.021 9.06066L6.43065 12.3536C6.21775 12.5488 5.87257 12.5488 5.65967 12.3536Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                  <Link
                    href={""}
                    onClick={() => setEditDomain(true)}
                    className="text-xs flex items-center px-2 py-[5px] border-black/10 border rounded-lg"
                  >
                    Remove domain
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-between border-b py-4 border-b-black/10 flex-wrap sm:flex-nowrap dark:border-b-white/10">
                <div>
                  <h5 className="font-semibold text-sm	text-blacklight dark:text-white">
                    Becho.io domain
                  </h5>
                  <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40">
                    hustle.becho.io
                  </p>
                </div>
                <Button
                  name={"Edit"}
                  className="leading-[18px] !px-[11px] !py-1 hover:!bg-primary-light-hover"
                  size={"smaill"}
                  outline={"true"}
                  secondary={"true"}
                  color={"grey"}
                  onClick={() => setOpenEdit(true)}
                />
              </div>
              <div className="flex justify-between items-center pt-4 flex-wrap gap-4 sm:flex-nowrap dark:border-b-white/10">
                <div>
                  <h5 className="font-semibold text-sm	text-blacklight dark:text-white">
                    Docs/help
                  </h5>
                  <p className="text-xs	leading-[18px] text-black/40 dark:text-white/40 flex items-center">
                    Read our docs on how to use a custom domain name with
                    becho.io.
                  </p>
                </div>
                <Button
                  name={"Read docs"}
                  className="leading-[18px] px-[11px] !py-1 hover:!bg-primary-light-hover"
                  size={"smaill"}
                  outline={"true"}
                  secondary={"true"}
                  color={"grey"}
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div
              className={
                "grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[10px]"
              }
            >
              <ThemesCard
                badgesName={"All store types"}
                badgeColor={"bg-secondary-greenb"}
                title={"Bharat (Default)"}
                description={
                  "Start with our default theme, fit for all types of ecommerce stores."
                }
                activated
              />
              <ThemesCard
                badgesName={"Clothing"}
                badgeColor={"bg-secondary-blueb"}
                title={"Bharat 2"}
                description={
                  "Start with our default theme, fit for all types of ecommerce stores."
                }
                activate
              />
              <ThemesCard
                badgesName={"Food/Beverages"}
                badgeColor={"bg-secondary-greena"}
                title={"Bharat 3"}
                description={
                  "Start with our default theme, fit for all types of ecommerce stores."
                }
                activate
              />
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <Modal
        open={editDomain}
        setOpen={setEditDomain}
        className={"max-w-[544px] w-full mx-auto "}
      >
        <div className="sm:px-2 pb-2">
          <div className="flex items-center justify-between pb-2">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg text-center mx-auto">
              Remove/Update custom domain?
            </h2>
          </div>
          <p className="text-black/40 dark:text-white/40 sm:max-w-[443px] w-full mx-auto text-center">
            Would you like to update or remove the custom domain?
          </p>
          <div className="flex justify-end sm:flex-nowrap flex-wrap items-center gap-4 mx-auto sm:mt-8 mt-5">
            <Button
              color="winered"
              name={"Remove"}
              className={
                "sm:!py-[18px] !py-3 text-sm sm:!px-4 w-full rounded-[15px] font-semibold"
              }
            ></Button>
            <Button
              color="lightgrey"
              secondary="true"
              name={"Cancel"}
              onClick={() => setEditDomain(false)}
              className={
                "sm:!py-[18px] !py-3 text-sm sm:!px-4 w-full rounded-[15px] font-semibold"
              }
            ></Button>
          </div>
        </div>
      </Modal>
      <Modal
        open={openEdit}
        setOpen={setOpenEdit}
        className={"max-w-[544px] w-full mx-auto"}
      >
        <div className="px-2">
          <div className="flex items-center justify-between md:pb-8 pb-5">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg leading-9">
              Custom Becho.io sub-domain
            </h2>
            <Image
              src={closeico}
              alt=""
              onClick={() => setOpenEdit(false)}
              className={"cursor-pointer dark:invert"}
            />
          </div>
          <p className="text-black/80 mb-[15px] dark:text-white/80 font-semibold">
            Current becho.io domain
          </p>
          <InputContent
            className={"dark:bg-black/40 px-4 dark:text-white/40 flex"}
          >
            <input
              Value={"firststore.becho.io"}
              readOnly
              className={
                "bg-primary-blue rounded-lg p-[3px] max-w-[127px] w-full"
              }
            />
          </InputContent>
          <p className="text-black/80 mb-[15px] dark:text-white/80 font-semibold">
            Enter the sub-domain you want to use
          </p>
          <InputContent
            className={"dark:bg-black/40 px-4 dark:text-white/40 flex mb-8"}
          >
            <input
              defaultValue={"secondstore"}
              className={"bg-transparent max-w-[83px] w-full"}
            />
            <strong>.becho.io </strong>
          </InputContent>
          <div className="flex justify-end items-center gap-4 mx-auto">
            <Button
              color="lightgrey"
              secondary="true"
              name={"Cancel"}
              className={
                "sm:!py-[18px] !py-3 text-sm !px-4 w-full rounded-[15px] font-semibold"
              }
              onClick={() => setOpenEdit(false)}
            ></Button>
            <Button
              color="bluedark"
              secondary="true"
              name={"Save"}
              className={
                "sm:!py-[18px] !py-3 text-sm !px-4 w-full rounded-[15px] font-semibold"
              }
            ></Button>
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
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg leading-9">
              Custom domain
            </h2>
            <Image
              src={closeico}
              alt=""
              onClick={() => setOpen(false)}
              className={"cursor-pointer dark:invert"}
            />
          </div>
          <p className="text-black/80 dark:text-white/80 font-semibold text-sm mb-[15px]">
            Enter the domain you want to use
          </p>
          <InputContent
            className={"dark:bg-black/40 px-4 mb-8 py-[15px] border-2"}
          >
            <input
              defaultValue={"www.myfirststore.com"}
              className={
                "bg-transparent w-full text-sm p-[3px] dark:text-white/80 text-black/80"
              }
            />
          </InputContent>
          <div className="flex justify-end items-center gap-4 mx-auto">
            <Button
              color="lightgrey"
              secondary="true"
              name={"Cancel"}
              className={
                "sm:!py-[18px] !py-3 text-sm !px-4 w-full rounded-[15px] font-semibold"
              }
              onClick={() => setOpen(false)}
            ></Button>
            <Button
              color="bluedark"
              secondary="true"
              name={"Save"}
              className={
                "sm:!py-[18px] !py-3 text-sm !px-4 w-full rounded-[15px] font-semibold"
              }
            ></Button>
          </div>
        </div>
      </Modal>

      <Modal
        open={openStore}
        setOpen={setOpenStore}
        className={"max-w-[544px] w-full mx-auto "}
      >
        <div className="sm:px-2 pb-2">
          <div className="flex items-center justify-between md:pb-8 pb-5">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">
              Delete Store Confirmation
            </h2>
            <Image
              src={closeico}
              alt=""
              onClick={() => setOpenStore(false)}
              className={"cursor-pointer dark:invert"}
            />
          </div>
          <p className="text-black/40 dark:text-white/40 sm:max-w-[443px] w-full mx-auto leading-5">
            Are you sure you want to delete this store? Deleting the store will
            permanently remove all products, orders, customer data, and settings
            associated with the store.
            <strong>Please note that this action cannot be undone.</strong>{" "}
            Please confirm if you want to proceed with deleting the store.
          </p>
          <div className="flex items-center sm:py-8 py-5 justify-between gap-5 flex-wrap">
            <div className="flex items-center gap-4">
              <Image src={Bechostore} alt="" />
              <div>
                <h3 className="text-black/80 dark:text-white/80 text-sm font-semibold">
                  Becho Store
                </h3>
                <p className="text-black/80 dark:text-white/80 text-xs pt-2">
                  42 products, 122 orders
                </p>
              </div>
            </div>
            <p className="text-black/80 dark:text-white/80 text-sm font-semibold">
              Store information
            </p>
          </div>
          <div className="sm:mb-8 mb-5">
            <h3 className="text-black/80 dark:text-white/80 text-sm font-semibold pb-4">
              Type DELETEMYSTORE in the box below to activate the delete button.
            </h3>
            <InputContent className={"mb-0"}>
              <input
                type="text"
                onChange={sendOtpHandler}
                className="text-black/80 dark:text-white/80 uppercase w-full"
              />
            </InputContent>
          </div>
          {deleteStore ? (
            <div>
              <div className="sm:mb-8 mb-5">
                <h3 className="text-black/80 dark:text-white/80 text-sm font-semibold pb-4">
                  Enter the 6 digit OTP Sent on your registered email address.
                </h3>
                <InputContent className={"mb-0"}>
                  <input
                    type="number"
                    className="text-black/80 dark:text-white/80"
                  />
                </InputContent>
              </div>
              <div className="sm:mb-8 mb-5">
                <h3 className="text-black/80 dark:text-white/80 text-sm font-semibold pb-4">
                  Enter the 6 digit OTP Sent on your registered mobile number.
                </h3>
                <InputContent className={"mb-0"}>
                  <input
                    type="number"
                    className="text-black/80 dark:text-white/80"
                  />
                </InputContent>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="flex justify-end sm:flex-nowrap flex-wrap items-center gap-4 mx-auto">
            <Button
              color="winered"
              disable={sendOtp}
              name={!deleteStore ? "Send OTP" : "Permanently Delete My Store"}
              onClick={permanentlyHandler}
              className={
                "sm:!py-[18px] !py-3 text-sm  sm:!px-4 w-full rounded-[15px] font-semibold"
              }
            ></Button>
            <Button
              color="lightgrey"
              secondary="true"
              name={"Cancel"}
              className={
                "sm:!py-[18px] !py-3 text-sm sm:!px-4 w-full rounded-[15px] font-semibold"
              }
            ></Button>
          </div>
        </div>
      </Modal>
      <Modal
        open={updatePlan}
        setOpen={setUpdatePlan}
        className={"w-full mx-auto max-w-[1371px] xl:px-[41px] pt-[57px]"}
      >
        <div>
          <div>
            <div className="flex items-center justify-between pb-2">
              <h2 className="text-blacklight dark:text-white/80 font-semibold md:text-2xl text-lg text-center mx-auto">
                Update Plan
              </h2>
            </div>
            <p className="text-black/40 dark:text-white/40 sm:max-w-[375px] w-full mx-auto text-center mb-[54px] ">
              Upgrade your current plan to get access to more features and
              benefits. Choose from our available plans to get the most out of
              your Becho store.
            </p>
            <div className="xl:text-xl text-lg font-semibold w-full max-w-fit mx-auto mb-10 flex items-center flex-wrap	">
              Pay Monthly
              <div className="xl:px-8 md:px-3 px-1 inline-block" onclick={ToggelHandler}>
                <Toggle bigToggle={"true"}  setEnabled={setEnabled}
                enabled={enabled}/>
              </div>
              Pay Yearly <strong>(Save 35%)</strong>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 lg:gap-8 md:gap-4 mb-[52px]">
              <div className="border shadow-[0px_12px_16px_rgba(0,0,0,0.0364401)] rounded-3xl border-solid border-black300 xl:p-10 p-6">
                <div className="sm:min-h-[194px]"pb-3>
                  <h4 className="xl:text-22 md:text-xl text-lg font-bold text-black800 mb-[7px]">
                    Lite
                  </h4>
                  <p className="text-base text-darkpurple mb-[19px]">
                    For startups
                  </p>
                  <h2 className="xl:text-5xl md:text-3xl text-[26px] font-bold text-black800 mb-[7px] dark:text-white">
                  {enabled ? "₹501" : "₹770"} <span className="text-xl">/mo</span>
                  </h2>
                  <p className="text-base text-darkpurple">Per store</p>
                </div>
                <ul className="flex flex-wrap xl:mt-[31px] mt-5 xl:mb-20 md:mb-14 mb-10">
                  <li className="w-full flex md:mb-3 mb-2 xl:text-lg text-base">
                    <Image src={GreenCheck} alt="" className="mr-[6px]" /> Up to
                    20 products
                  </li>
                  <li className="w-full flex md:mb-3 mb-2 xl:text-lg text-base">
                    <Image src={GreenCheck} alt="" className="mr-[6px]" /> 2
                    staff accounts
                  </li>
                  <li className="w-full flex md:mb-3 mb-2 xl:text-lg text-base">
                    <Image src={GreenCheck} alt="" className="mr-[6px]" />{" "}
                    Professional reports
                  </li>
                  <li className="w-full flex md:mb-3 mb-2 xl:text-lg text-base">
                    <Image src={GreenCheck} alt="" className="mr-[6px]" /> 6%
                    commission per order
                  </li>
                  <li className="w-full flex md:mb-3 mb-2 xl:text-lg text-base">
                    <Image src={GreenCheck} alt="" className="mr-[6px]" /> Free
                    templates
                  </li>
                </ul>
                <button
                  type=""
                  className="bg-[#121212]/50 lgMm:text-22 text-lg leading-tight text-white w-full rounded-[96px] lgm:py-[19px] py-3 px-4 font-bold flex gap-1 justify-center items-center"
                >
                  Current plan
                </button>
              </div>
              <div className="pricing-pro-box auth-bg relative border shadow-[0px_12px_16px_rgba(0,0,0,0.0364401)] rounded-3xl border-solid border-black300 xl:p-10 p-6">
                <Image src={Wish} alt="" className="absolute top-10 right-10" />
                <div className="sm:min-h-[194px]"pb-3>
                  <h4 className="xl:text-22 md:text-xl text-lg font-bold text-brand05 mb-[7px]">
                    Pro
                  </h4>
                  <p className="text-base text-brand05 mb-[19px]">
                    Everything + More
                  </p>
                  <h2 className="xl:text-5xl md:text-3xl text-[26px] font-bold text-brand05 mb-[7px]">
                  {enabled ? "₹1001" : "₹1540"}<span className="text-xl">/mo</span>
                  </h2>
                  <p className="text-base text-brand05">Per store</p>
                </div>
                <ul className="flex flex-wrap xl:mt-[31px] mt-5 xl:mb-20 md:mb-14 mb-10">
                  <li className="text-brand05 w-full flex md:mb-3 mb-2 xl:text-lg text-base">
                    <Image src={BalckCheck} alt="" className="mr-[6px]" /> Up to
                    100 products
                  </li>
                  <li className="text-brand05 w-full flex md:mb-3 mb-2 xl:text-lg text-base">
                    <Image src={BalckCheck} alt="" className="mr-[6px]" /> 3
                    staff accounts
                  </li>
                  <li className="text-brand05 w-full flex md:mb-3 mb-2 xl:text-lg text-base">
                    <Image src={BalckCheck} alt="" className="mr-[6px]" />{" "}
                    Professional reports
                  </li>
                  <li className="text-brand05 w-full flex md:mb-3 mb-2 xl:text-lg text-base">
                    <Image src={BalckCheck} alt="" className="mr-[6px]" /> 3%
                    commission per order
                  </li>
                  <li className="text-brand05 w-full flex md:mb-3 mb-2 xl:text-lg text-base">
                    <Image src={BalckCheck} alt="" className="mr-[6px]" /> Free
                    templates
                  </li>
                </ul>
                <button
                  type=""
                  className="bg-black900  lgMm:text-22 text-lg leading-tight text-white w-full rounded-[96px] lgm:py-[19px] py-3 px-4 font-bold flex gap-1 justify-center items-center"
                >
                  Choose
                </button>
              </div>
              <div className="border shadow-[0px_12px_16px_rgba(0,0,0,0.0364401)] rounded-3xl border-solid border-black300 xl:p-10 p-6">
                <div className="sm:min-h-[194px] pb-3">
                  <h4 className="lgm:text-22 md:text-xl text-lg font-bold dark:text-white text-black800 mb-[7px]">
                    Premier
                  </h4>

                  <p className="text-base text-darkpurple md:mb-[19px] mb-[14px]">
                    Custom plan
                  </p>
                  <h2 className="xl:text-5xl md:text-3xl text-[26px] font-bold text-brand05 dark:text-white mb-[7px]">
                    On request
                  </h2>
                </div>
                {/* <h2 className="lgm:text-5xl text-40 font-bold text-black800 pb-[29px]">
                  On request
                </h2> */}
                <ul className="flex flex-wrap xl:mt-[31px] mt-5 xl:mb-20 md:mb-14 mb-10">
                  <li className="text-brand05 w-full flex md:mb-3 mb-2 xl:text-lg text-base dark:text-white">
                    <Image
                      src={GreenCheck}
                      alt=""
                      className="mr-[6px] md:w-6 w-5"
                    />{" "}
                    Unlimited products
                  </li>
                  <li className="text-brand05 w-full flex md:mb-3 mb-2 xl:text-lg text-base dark:text-white">
                    <Image
                      src={GreenCheck}
                      alt=""
                      className="mr-[6px] md:w-6 w-5"
                    />{" "}
                    Unlimited staff accounts
                  </li>
                  <li className="text-brand05 w-full flex md:mb-3 mb-2 xl:text-lg text-base dark:text-white">
                    <Image
                      src={GreenCheck}
                      alt=""
                      className="mr-[6px] md:w-6 w-5"
                    />{" "}
                    Professional reports
                  </li>
                  <li className="text-brand05 w-full flex md:mb-3 mb-2 xl:text-lg text-base dark:text-white">
                    <Image
                      src={GreenCheck}
                      alt=""
                      className="mr-[6px] md:w-6 w-5"
                    />{" "}
                    Custom commission rates
                  </li>
                  <li className="text-brand05 w-full flex md:mb-3 mb-2 xl:text-lg text-base dark:text-white">
                    <Image
                      src={GreenCheck}
                      alt=""
                      className="mr-[6px] md:w-6 w-5"
                    />{" "}
                    Free templates
                  </li>
                </ul>
                <button
                  type=""
                  className="bg-black900 lgm:text-22 text-lg leading-tight text-white w-full rounded-[96px] lgm:py-[19px] py-3 px-4 font-bold flex gap-1 justify-center items-center"
                >
                  Get started
                </button>
              </div>
            </div>

            <ul className="flex gap-3 text-black/60 justify-end">
              <li>Help</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
        </div>
        {/* </div> */}
      </Modal>
    </Layout>
  );
};

export default Bechopro;
