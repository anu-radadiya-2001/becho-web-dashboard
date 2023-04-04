import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import Alert from "@/components/ui/Alert";
import UnsavedChanges from "@/components/ui/UnsavedChanges";
import MultiselectDropdown from "@/components/ui/MultiselectDropdown";
import InputContent from "@/components/ui/InputContent";
import pillows from "@/assets/images/users/brown-throw-pillows.png";
import infoicon from "@/assets/images/icon/info-icon.svg";
import Restockicon from "@/assets/images/icon/restockicon.svg";
import userimg from "@/assets/images/users/userprofile.png";
import closeico from "@/assets/images/icon/close-circle.svg";
import Due from "@/assets/images/icon/Add-payment-due.svg";
import NoteCustomer from "@/assets/images/icon/warning-circle.svg";
import Layout from "@/layouts/layout";
import DateSelect from "@/components/ui/DateSelect";
import Modal from "@/components/ui/Modal";
import VarientDropdown from "@/components/ui/SelectOption";
import CountryDropdown from "@/components/ui/CountryStateDropdown/CountryDropdown";
import RegionDropdown from "@/components/ui/CountryStateDropdown/RegionDropdown";

const orders = () => {

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const Fulfilled = [
    {
      id: 1,
      productImg: pillows,
      product: "Brown Throw Pillows",
      productItem: "5",
      price: "₹19.99 × 5",
      totlePrice: "₹99.95",
    },
    {
      id: 2,
      productImg: pillows,
      product: "Brown Throw Pillows",
      productItem: "5",
      price: "₹19.99 × 5",
      totlePrice: "₹99.95",
    },
    {
      id: 3,
      productImg: pillows,
      product: "Brown Throw Pillows",
      productItem: "5",
      price: "₹19.99 × 5",
      totlePrice: "₹99.95",
    },
    {
      id: 4,
      productImg: pillows,
      product: "Brown Throw Pillows",
      productItem: "5",
      price: "₹19.99 × 5",
      totlePrice: "₹99.95",
    },
  ];

  const customer = [
    {
      id: 1,
      name: "Baalkrishan Lal Sani",
      phone: "",
      email: "",
      address:
        "Baalkrishan Lal Sani Exploit Cross-Platform Mindshare 52, Ekbal Society, ShwetaPur Pilani 459501 Pilani Rajasthan India",
      mobile: "+91 80735 89105",
    },
  ];

  const [open, setOpen] = useState(false);

  const [openreStock, setOpenreStock] = useState(false);
  const [information, setInformation] = useState(false);
  const [address, setAddress] = useState(false);
  return (
    <Layout container>
      <PageHeader
        arrow={true}
        className={"mb-[28px] gap-y-3"}
        orderid={"#CM9805"}
        Badgesdata={[
          { color: "yellow", name: "Payment pending" },
          { color: "red", name: "Unfulfilled" },
          { color: "dot", name: "Paid" },
          { color: "dot", name: "Fulfilled" },
        ]}
      >
        <button
          className="py-[5px] sm:px-2 px-[1px] sm:mr-2 text-xs"
          type="button"
          onClick={() => setOpenreStock(true)}
        >
          Restock
        </button>
        <button
          className="py-[5px] sm:px-2 px-[1px] sm:mr-2 text-xs"
          type="button"
        >
          Edit order
        </button>
        <Dropdown
          className="right-0 left-[unset] text-xs"
          itemsclass="left-2 top-[28px] 
        overflow-hidden inline-table sm:!w-full mt-2 origin-top-right divide-y divide-black/5 dark:divide-white/10 rounded-md bg-white dark:bg-black shadow-lg ring-1 ring-black/5 focus:outline-none md:!w-[240px] p-2 [&>a:nth-child(2)]:!border-0 [&>a:nth-child(3)]:!border-t [&>a:nth-child(4)]:!border-0 [&>a:nth-child(5)]:!border-0 !w-full sm:!w-[180px] left-0 transform opacity-100 scale-100"
          button={
            <div className="flex gap-2 items-center py-3 px-2 justify-end">
              More actions
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.646447 0.659675C0.841709 0.446775 1.15829 0.446775 1.35355 0.659675L4.64645 4.25C4.84171 4.4629 5.15829 4.4629 5.35355 4.25L8.64645 0.659676C8.84171 0.446776 9.15829 0.446776 9.35355 0.659676C9.54882 0.872575 9.54882 1.21775 9.35355 1.43065L6.06066 5.02098C5.47487 5.65967 4.52513 5.65968 3.93934 5.02098L0.646447 1.43065C0.451184 1.21775 0.451184 0.872574 0.646447 0.659675Z"
                  fill="black"
                  className="fill-black dark:fill-white"
                ></path>
              </svg>
            </div>
          }
          dropdownitem={[
            { id: 1, title: "Duplicate", link: "/" },
            { id: 2, title: "Unarchive", link: "/" },
            { id: 3, title: "Print order page", link: "/" },
            { id: 4, title: "Print packing slips", link: "/" },
          ]}
        />
      </PageHeader>
      <UnsavedChanges className={""}>
        <Button
          color={"white"}
          outline={"true"}
          size={"small"}
          name={"Discard"}
          className={"mr-5 dark:!border-blacklight dark:!text-blacklight !py-1"}
        />
        <Button
          color={"primarygreen"}
          name={"Save Changes"}
          className={"!py-[5px]"}
        />
      </UnsavedChanges>
      <div className="my-7">
        <Alert
          color={"green"}
          title={"Items fulfilled."}
          description={"20 items have been fulfilled."}
          alertStyle={
            "pb-3.5 outline-primary-greenb outline outline-1 border-0"
          }
        />
        <div className="mt-7">
          <Alert
            color={"green"}
            title={"Payment collected."}
            description={"Successfully marked payment as received."}
            alertStyle={
              "pb-3.5 outline-primary-greenb outline outline-1 border-0"
            }
          />
        </div>
        <div className="flex justify-between md:flex-row flex-col items-start xl:mt-9 mt-6 gap-y-8">
          <div className="bg-primary-light dark:bg-white/5 md:px-6 md:py-4 p-3 rounded-2xl w-full md:max-w-[52%]">
            <h2 className="text-blacklight dark:text-white font-semibold text-sm leading-5 pb-4">
              {" "}
              Unfulfilled(4)
            </h2>
            <div className="bg-white dark:bg-black/40">
              <div className="overflow-x-auto">
                <table className="w-[640px] sm:w-full">
                  <tbody>
                    {Fulfilled.map((item, index) => (
                      <tr
                        className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5"
                        key={index}
                      >
                        <td className="py-2 pl-4 pr-2 max-w-[4%] w-full">
                          <Image
                            src={item.productImg}
                            alt=""
                            className="w-full min-w-[24px] "
                          />
                        </td>
                        <td className="py-2 max-w-[41%] w-full text-xs leading-[18px] font-normal whitespace-nowrap">
                          {item.product}
                        </td>
                        <td className="py-2 px-4 max-w-[9%] w-full text-xs leading-[18px] font-normal">
                          {item.productItem}
                        </td>
                        <td className="py-2 pr-4 max-w-[13%] w-full text-xs leading-[18px] font-normal whitespace-nowrap">
                          {item.price}
                        </td>
                        <td className="py-2 px-4 max-w-[7%] w-full text-xs leading-[18px] font-normal">
                          {item.totlePrice}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-end gap-4 w-full py-4 pr-7 border-b border-black/10 dark:border-white/10">
                <Button
                  secondary={"true"}
                  name={"Hold fulfillment"}
                  outline={"true"}
                  color={"grey"}
                  className="text-sm leading-[18px]"
                  size={"medium"}
                />
                <Button
                  color={"primarygreen"}
                  name={"Fulfill items"}
                  className="text-sm whitespace-nowrap leading-5"
                  size={"medium"}
                />
              </div>
            </div>
            <h2 className="text-blacklight dark:text-white font-semibold text-sm leading-5 pt-4 pb-3.5">
              Pending
            </h2>
            <div className="bg-white dark:bg-black/40 mb-3.5">
              <div className="overflow-x-auto">
                <table className="w-[640px] sm:w-full">
                  <tbody className="w-full">
                    <tr className="text-blacklight border-b dark:text-white border-black/5 dark:border-white/5 w-full">
                      <td className="font-normal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] pl-4">
                        Subtotal
                      </td>
                      <td className="font-normal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] px-4">
                        20 items
                      </td>
                      <td className="font-normal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] text-right pr-4">
                        ₹1,019.91
                      </td>
                    </tr>
                    <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                      <td className="font-normal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] pl-4">
                        Tax
                      </td>
                      <td className="font-normal text-xs leading-[18px] text-green2 max-w-[33.33%] w-full py-[11px] px-4">
                        <Link
                          className="flex whitespace-nowrap text-primary-greenb"
                          href={"/"}
                        >
                          Show tax details
                          <Image src={infoicon} alt="" className="ml-[5px]" />
                        </Link>
                      </td>
                      <td className="font-normal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] text-right pr-4">
                        ₹183.58
                      </td>
                    </tr>
                    <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                      <td className="font-semibold text-sm max-w-[33.33%] w-full py-2.5 pl-4">
                        Total
                      </td>
                      <td className="max-w-[33.33%] w-full py-2.5	px-4"></td>
                      <td className="font-semibold text-sm max-w-[33.33%] w-full py-2.5	pr-4 text-right">
                        ₹1,203.49
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white dark:bg-black/40">
              <table className="w-full">
                <tbody className="w-full">
                  <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                    <td className="w-full max-w-[50%] pl-4 py-[11px] text-xs leading-[18px]">
                      Paid by customer
                    </td>
                    <td className="w-full max-w-[50%] pr-4 py-[11px] text-xs leading-[18px] text-right">
                      ₹0.00
                    </td>
                  </tr>
                  <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                    <td className="w-full max-w-[50%] pl-4 py-[11px] text-xs leading-[18px]">
                      No payment due date
                    </td>
                    <td className="w-full max-w-[50%] pr-4 py-[11px] font-normal text-xs leading-[18px] text-green2 relative">
                      <div className="flex justify-end text-primary-greenb">
                        <DateSelect
                          placeholder={"Add due date"}
                          className=""
                        ></DateSelect>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                    <td className="w-full max-w-[50%] pl-4 py-2.5 text-sm font-semibold">
                      Balance (owed by customer)
                    </td>
                    <td className="w-full max-w-[50%] pr-4 py-2.5 text-sm font-semibold text-right">
                      ₹1,203.49
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="py-4 px-4 flex gap-4 justify-end border-b items-center border-black/10 dark:border-white/10 sm:flex-nowrap flex-wrap">
                <Button
                  outline={"true"}
                  secondary={"true"}
                  color={"grey"}
                  name={"Send invoice"}
                  className="text-lg leading-[18px]"
                  size={"medium"}
                />
                <Dropdown
                  className="right-0 left-[unset] flex justify-end"
                  itemsclass="p-2 z-[1]"
                  button={
                    <div className="flex gap-2 items-center px-4 justify-end py-2 text-sm lg:text-lg font-semibold transition-all duration-500 rounded-lg text-white bg-primary-greenb">
                      Collect payment
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.55806 7.07459C4.80214 6.80847 5.19786 6.80847 5.44194 7.07459L9.55806 11.5625C9.80214 11.8286 10.1979 11.8286 10.4419 11.5625L14.5581 7.07459C14.8021 6.80847 15.1979 6.80847 15.4419 7.07459C15.686 7.34072 15.686 7.77219 15.4419 8.03832L11.3258 12.5262C10.5936 13.3246 9.40641 13.3246 8.67418 12.5262L4.55806 8.03831C4.31398 7.77219 4.31398 7.34072 4.55806 7.07459Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  }
                  dropdownitem={[
                    { id: 1, title: "Enter credit card", link: "/" },
                    { id: 2, title: "Mark as paid", link: "/" },
                    { id: 3, title: "Mark as COD", link: "/" },
                  ]}
                />
              </div>
            </div>
            <InputContent
              title={"Add tags"}
              className={"mt-4 w-full max-w-[400px] cursor-pointer"}
            >
              <MultiselectDropdown
                options={[
                  {
                    cat: "tag 1",
                    key: "tag 1",
                  },
                  {
                    cat: "tag 2",
                    key: "tag 2",
                  },
                  {
                    cat: "tag 3",
                    key: "tag 3",
                  },
                  {
                    cat: "tag 4",
                    key: "tag 4",
                  },
                ]}
                selectedValues={[
                  {
                    cat: "tag",
                    key: "tag",
                  },
                  {
                    cat: "tag",
                    key: "tag",
                  },
                ]}
              />
            </InputContent>
            <div className="max-w-[400px] w-full mt-4"></div>
          </div>
          <div className="bg-primary-light dark:bg-white/5 py-5 px-4 rounded-2xl w-full md:max-w-[46%]">
            <div className="bg-primary-purple/50 dark:bg-black/40 flex items-start p-4 rounded-lg">
              <Image
                src={NoteCustomer}
                alt=""
                className="mr-1 font-normal text-sm dark:invert"
              />
              <div>
                <h4 className="flex">Note from customer</h4>
                <p className="text-sm leading-[18px] text-black/40 dark:text-white/40">
                  Sample note from customer during checkout.
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between sm:flex-nowrap flex-wrap my-[15px] items-center gap-2">
                <h3 className="text-blacklight dark:text-white font-semibold text-sm">
                  Customer Details
                </h3>

                <div className="flex gap-1">
                  <Button
                    color={"blacklight"}
                    name={"Remove Customer"}
                    className="!py-2 px-[12px] leading-[18px]"                   
                  />
                  <Button
                    color={"blacklight"}
                    name={"Add Customer"}
                    className="!py-2 px-[12px] leading-[18px]"
                    onClick={() => setOpen(true)}
                  />
                </div>
              </div>

              <>
                {customer.map((item, index) => (
                  <div key={index}>
                    <div className="flex w-full mb-4 flex-wrap sm:flex-nowrap">
                      <p className="text-black/40 dark:text-white/40 text-xs leading-[18px] font-normal  sm:max-w-[44%] w-full">
                        Name
                      </p>
                      <p className="text-blacklight dark:text-white text-sm font-normal">
                        {item.name ? (
                          item.name
                        ) : (
                          <>
                            No name provided
                            <Button
                              secondary={"true"}
                              name={"Add Name"}
                              outline={"true"}
                              color={"grey"}
                              className="text-sm leading-[18px] ml-2"
                              size={"medium"}
                            />
                          </>
                        )}
                      </p>
                    </div>
                    <div className="flex mb-4 w-full flex-wrap sm:flex-nowrap items-center">
                      <p className="text-black/40 dark:text-white/40 text-xs leading-[18px] font-normal sm:max-w-[44%] w-full ">
                        Phone
                      </p>
                      <p className="text-blacklight dark:text-white text-sm font-normal ">
                        {item.phone ? (
                          item.phone
                        ) : (
                          <>
                            No phone provided
                            <Button
                              secondary={"true"}
                              name={"Add Phone"}
                              outline={"true"}
                              color={"grey"}
                              className="text-sm leading-[18px] ml-2"
                              size={"medium"}
                              onClick={() => setInformation(true)}
                            />
                          </>
                        )}
                      </p>
                    </div>
                    <div className="flex mb-4 w-full flex-wrap sm:flex-nowrap items-center">
                      <p className="text-black/40 dark:text-white/40 text-xs leading-[18px] font-normal sm:max-w-[44%] w-full">
                        Email
                      </p>
                      <p className="text-blacklight dark:text-white text-sm font-normal ">
                        {item.email ? (
                          item.email
                        ) : (
                          <>
                            No email provided
                            <Button
                              secondary={"true"}
                              name={"Add email"}
                              outline={"true"}
                              color={"grey"}
                              className="text-sm leading-[18px] ml-2"
                              size={"medium"}
                              onClick={() => setInformation(true)}
                            />
                          </>
                        )}
                      </p>
                    </div>
                    <div className="flex w-full flex-wrap sm:flex-nowrap">
                      <p className="text-black/40 dark:text-white/40 text-xs leading-[18px] font-normal sm:max-w-[44%] w-full">
                        Address
                      </p>
                      {item.address ? (
                        <div className="text-blacklight dark:text-white text-sm font-normal lg:max-w-[55%] w-full flex items-center ">
                          <p>
                            {item.address}
                            <Link className="block" href={""}>
                              {item.mobile}
                            </Link>
                          </p>
                          <Button
                            secondary={"true"}
                            size={"medium"}
                            color={"grey"}
                            outline={"true"}
                            name={"Edit"}
                            className="md:ml-2 leading-[18px]"
                            onClick={() => setAddress(true)}
                          />
                        </div>
                      ) : (
                        <>
                          No address provided
                          <Button
                            secondary={"true"}
                            name={"Add address"}
                            outline={"true"}
                            color={"grey"}
                            className="text-sm leading-[18px] ml-2"
                            size={"medium"}
                          />
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </>
            </div>
          </div>
        </div>
      </div>

      <Modal open={openreStock} setOpen={setOpenreStock}>
        <div className="sm:p-2">
          <Image src={Restockicon} className={"mx-auto"} />
          <div className="text-center md:py-8 py-5 max-w-[672px] w-full">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">
              Restock items in order?
            </h2>
            <p className="text-black/40 dark:text-white/40 md:pt-8 pt-5">
              Are you sure you want to restock the items in this order?
              Restocking the items in an order will increase their stock levels
              and make them available for purchase again. Please confirm if you
              want to proceed with restocking the items in this order.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Button
              color="lightgrey"
              onClick={() => setOpenreStock(false)}
              secondary="true"
              name={"Cancel"}
              className={
                "text-sm sm:!py-[18px] !py-3 max-w-[232px] w-full font-semibold rounded-[15px]"
              }
            ></Button>
            <Button
              color="bluedark"
              className={
                "sm:!py-[18px] !py-3 text-sm font-semibold max-w-[232px] w-full rounded-[15px]"
              }
              name={"Restock items"}
            ></Button>
          </div>
        </div>
      </Modal>
      <Modal
        open={open}
        setOpen={setOpen}
        className={"max-w-[544px] w-full mx-auto sm:px-6 px-3"}
      >
        <div className="sm:px-2">
          <div className="flex items-center justify-between md:pb-8 pb-5">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">
              Add customer to order
            </h2>
            <Image
              src={closeico}
              alt=""
              onClick={() => setOpen(false)}
              className={"cursor-pointer dark:invert"}
            />
          </div>
          <p className="text-black/80  dark:text-white/80 font-semibold">
            Select customer
          </p>
          <InputContent className={"mt-4 cursor-pointer py-3 px-4"}>
            <MultiselectDropdown
              className={"itemselect select-customer"}
              roundClose
              options={[
                {
                  cat: "tag 1",
                  key: "Kathryn Murphy",
                },
                {
                  cat: "tag 2",
                  key: "Kathryn Murphy2",
                },
                {
                  cat: "tag 3",
                  key: "Kathryn Murphy3",
                },
              ]}
              selectedValues={[
                {
                  cat: "heena09887@gmail.com",
                  key: "Kathryn Murphy",
                },
              ]}
            />
          </InputContent>
          <div className="flex justify-end items-center gap-4 md:pt-6 pt-2 mx-auto">
            <Button
              color="lightgrey"
              secondary="true"
              name={"Cancel"}
              className={
                "sm:!py-[18px] !py-3 text-sm !px-3 w-full rounded-[15px] font-semibold"
              }
              onClick={() => setOpen(false)}
            ></Button>
            <Button
              color="bluedark"
              secondary="true"
              name={"Add customer"}
              className={
                "sm:!py-[18px] !py-3 text-sm !px-3 w-full rounded-[15px] font-semibold"
              }
            ></Button>
          </div>
        </div>
      </Modal>
      <Modal
        open={information}
        setOpen={setInformation}
        className={"max-w-[544px] w-full mx-auto "}
      >
        <div className="sm:px-2 pb-2">
          <div className="flex items-center justify-between md:pb-8 pb-5">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl !leading-9 text-lg">
              Edit customer information
            </h2>
            <Image
              src={closeico}
              alt=""
              onClick={() => setInformation(false)}
              className={"cursor-pointer dark:invert"}
            />
          </div>
          <p className="mb-[15px] text-black/80 dark:text-white/40 text-sm	font-semibold">
            Email
          </p>
          <InputContent className={"!py-2.5 dark:bg-black/40 mb-3"}>
            <input
              type="email"
              name=""
              defaultValue={"abc2235@yahoo.co.in"}
              placeholder="Email"
              className="dark:bg-transparent dark:text-white dark:placeholder:text-white/20 placeholder:text-black/20 w-full"
            />
          </InputContent>
          <p className="mb-[15px] text-black/80 dark:text-white/40 text-sm	font-semibold">
            Phone number
          </p>
          <div className="grid sm:grid-cols-2 sm:gap-6">
            <InputContent title={"Country code"} className="dark:bg-black/40">
              <VarientDropdown
                selectitem={[
                  { name: "+91" },
                  { name: "Algeria (+213)" },
                  { name: "Andorra (+376)" },
                  { name: "Angola (+244)" },
                  { name: "Anguilla (+1264)" },
                  { name: "Antigua Barbuda (+1268)" },
                  { name: "Argentina (+54)" },
                  { name: "Armenia (+374)" },
                  { name: "Aruba (+297)" },
                  { name: "Australia (+61)" },
                  { name: "Austria (+43)" },
                  { name: "Azerbaijan (+994)" },
                  { name: "Bahamas (+1242)" },
                  { name: "Bahrain (+973)" },
                  { name: "Bangladesh (+880)" },
                  { name: "Barbados (+1246)" },
                  { name: "Belarus (+375)" },
                  { name: "Belgium (+32)" },
                  { name: "Belize (+501)" },
                  { name: "Benin (+229)" },
                  { name: "Bermuda (+1441)" },
                  { name: "Bhutan (+975)" },
                  { name: "Bolivia (+591)" },
                  { name: "Bosnia Herzegovina (+387)" },
                  { name: "Botswana (+267)" },
                  { name: "Brazil (+55)" },
                  { name: "Brunei (+673)" },
                  { name: "Bulgaria (+359)" },
                  { name: "Burkina Faso (+226)" },
                  { name: "Burundi (+257)" },
                  { name: "Cambodia (+855)" },
                  { name: "Cameroon (+237)" },
                  { name: "Canada (+1)" },
                  { name: "Cape Verde Islands (+238)" },
                  { name: "Cayman Islands (+1345)" },
                  { name: "Central African Republic (+236)" },
                  { name: "Chile (+56)" },
                  { name: "China (+86)" },
                  { name: "Colombia (+57)" },
                  { name: "Comoros (+269)" },
                  { name: "Congo (+242)" },
                  { name: "Cook Islands (+682)" },
                  { name: "Costa Rica (+506)" },
                  { name: "Croatia (+385)" },
                  { name: "Cuba (+53)" },
                  { name: "Cyprus North (+90392)" },
                  { name: "Cyprus South (+357)" },
                  { name: "Czech Republic (+42)" },
                  { name: "Denmark (+45)" },
                  { name: "Djibouti (+253)" },
                  { name: "Dominica (+1809)" },
                  { name: "Dominican Republic (+1809)" },
                  { name: "Ecuador (+593)" },
                  { name: "Egypt (+20)" },
                  { name: "El Salvador (+503)" },
                  { name: "Equatorial Guinea (+240)" },
                  { name: "Eritrea (+291)" },
                  { name: "Estonia (+372)" },
                  { name: "Ethiopia (+251)" },
                  { name: "Falkland Islands (+500)" },
                  { name: "Faroe Islands (+298)" },
                  { name: "Fiji (+679)" },
                  { name: "Finland (+358)" },
                  { name: "France (+33)" },
                  { name: "French Guiana (+594)" },
                  { name: "French Polynesia (+689)" },
                  { name: "Gabon (+241)" },
                  { name: "Gambia (+220)" },
                  { name: "Georgia (+7880)" },
                  { name: "Germany (+49)" },
                  { name: "Ghana (+233)" },
                  { name: "Gibraltar (+350)" },
                  { name: "Greece (+30)" },
                  { name: "Greenland (+299)" },
                  { name: "Grenada (+1473)" },
                  { name: "Guadeloupe (+590)" },
                  { name: "Guam (+671)" },
                  { name: "Guatemala (+502)" },
                  { name: "Guinea (+224)" },
                  { name: "Guinea - Bissau (+245)" },
                  { name: "Guyana (+592)" },
                  { name: "Haiti (+509)" },
                  { name: "Honduras (+504)" },
                  { name: "Hong Kong (+852)" },
                  { name: "Hungary (+36)" },
                  { name: "Iceland (+354)" },
                  { name: "India (+91)" },
                  { name: "Indonesia (+62)" },
                  { name: "Iran (+98)" },
                  { name: "Iraq (+964)" },
                  { name: "Ireland (+353)" },
                  { name: "Israel (+972)" },
                  { name: "Italy (+39)" },
                  { name: "Jamaica (+1876)" },
                  { name: "Japan (+81)" },
                  { name: "Jordan (+962)" },
                  { name: "Kazakhstan (+7)" },
                  { name: "Kenya (+254)" },
                  { name: "Kiribati (+686)" },
                  { name: "Korea North (+850)" },
                  { name: "Korea South (+82)" },
                  { name: "Kuwait (+965)" },
                  { name: "Kyrgyzstan (+996)" },
                  { name: "Laos (+856)" },
                  { name: "Latvia (+371)" },
                  { name: "Lebanon (+961)" },
                  { name: "Lesotho (+266)" },
                  { name: "Liberia (+231)" },
                  { name: "Libya (+218)" },
                  { name: "Liechtenstein (+417)" },
                  { name: "Lithuania (+370)" },
                  { name: "Luxembourg (+352)" },
                  { name: "Macao (+853)" },
                  { name: "Macedonia (+389)" },
                  { name: "Madagascar (+261)" },
                  { name: "Malawi (+265)" },
                  { name: "Malaysia (+60)" },
                  { name: "Maldives (+960)" },
                  { name: "Mali (+223)" },
                  { name: "Malta (+356)" },
                  { name: "Marshall Islands (+692)" },
                  { name: "Martinique (+596)" },
                  { name: "Mauritania (+222)" },
                  { name: "Mayotte (+269)" },
                  { name: "Mexico (+52)" },
                  { name: "Micronesia (+691)" },
                  { name: "Moldova (+373)" },
                  { name: "Monaco (+377)" },
                  { name: "Mongolia (+976)" },
                  { name: "Montserrat (+1664)" },
                  { name: "Morocco (+212)" },
                  { name: "Mozambique (+258)" },
                  { name: "Myanmar (+95)" },
                  { name: "Namibia (+264)" },
                  { name: "Nauru (+674)" },
                  { name: "Nepal (+977)" },
                  { name: "Netherlands (+31)" },
                  { name: "New Caledonia (+687)" },
                  { name: "New Zealand (+64)" },
                  { name: "Nicaragua (+505)" },
                  { name: "Niger (+227)" },
                  { name: "Nigeria (+234)" },
                  { name: "Niue (+683)" },
                  { name: "Norfolk Islands (+672)" },
                  { name: "Northern Marianas (+670)" },
                  { name: "Norway (+47)" },
                  { name: "Oman (+968)" },
                  { name: "Palau (+680)" },
                  { name: "Panama (+507)" },
                  { name: "Papua New Guinea (+675)" },
                  { name: "Paraguay (+595)" },
                  { name: "Peru (+51)" },
                  { name: "Philippines (+63)" },
                  { name: "Poland (+48)" },
                  { name: "Portugal (+351)" },
                  { name: "Puerto Rico (+1787)" },
                  { name: "Qatar (+974)" },
                  { name: "Reunion (+262)" },
                  { name: "Romania (+40)" },
                  { name: "Russia (+7)" },
                  { name: "Rwanda (+250)" },
                  { name: "San Marino (+378)" },
                  { name: "Sao Tome Principe (+239)" },
                  { name: "Saudi Arabia (+966)" },
                  { name: "Senegal (+221)" },
                  { name: "Serbia (+381)" },
                  { name: "Seychelles (+248)" },
                  { name: "Sierra Leone (+232)" },
                  { name: "Singapore (+65)" },
                  { name: "Slovak Republic (+421)" },
                  { name: "Slovenia (+386)" },
                  { name: "Solomon Islands (+677)" },
                  { name: "Somalia (+252)" },
                  { name: "South Africa (+27)" },
                  { name: "Spain (+34)" },
                  { name: "Sri Lanka (+94)" },
                  { name: "St. Helena (+290)" },
                  { name: "St. Kitts (+1869)" },
                  { name: "St. Lucia (+1758)" },
                  { name: "Sudan (+249)" },
                  { name: "Suriname (+597)" },
                  { name: "Swaziland (+268)" },
                  { name: "Sweden (+46)" },
                  { name: "Switzerland (+41)" },
                  { name: "Syria (+963)" },
                  { name: "Taiwan (+886)" },
                  { name: "Tajikstan (+7)" },
                  { name: "Thailand (+66)" },
                  { name: "Togo (+228)" },
                  { name: "Tonga (+676)" },
                  { name: "Trinidad Tobago (+1868)" },
                  { name: "Tunisia (+216)" },
                  { name: "Turkey (+90)" },
                  { name: "Turkmenistan (+7)" },
                  { name: "Turkmenistan (+993)" },
                  { name: "Turks Caicos Islands (+1649)" },
                  { name: "Tuvalu (+688)" },
                  { name: "Uganda (+256)" },
                  { name: "Ukraine (+380)" },
                  { name: "United Arab Emirates (+971)" },
                  { name: "Uruguay (+598)" },
                  { name: "Uzbekistan (+7)" },
                  { name: "Vanuatu (+678)" },
                  { name: "Vatican City (+379)" },
                  { name: "Venezuela (+58)" },
                  { name: "Vietnam (+84)" },
                  { name: "Virgin Islands - British (+1284)" },
                  { name: "Virgin Islands - US (+1340)" },
                  { name: "Wallis Futuna (+681)" },
                  { name: "Yemen (North)(+969)" },
                  { name: "Yemen (South)(+967)" },
                  { name: "Zambia (+260)" },
                  { name: "Zimbabwe (+263)" },
                ]}
                className="dark:!text-white/80 !text-black/80"
              />
            </InputContent>
            <InputContent title={"Phone number"} className="dark:bg-black/40">
              <input
                type="number"
                name=""
                defaultValue="8073589105"
                className="w-full dark:bg-transparent"
              />
            </InputContent>
          </div>
          <div className="flex justify-end sm:flex-nowrap flex-wrap items-center gap-4 mx-auto sm:mt-6   mt-5">
            <Button
              color="lightgrey"
              secondary="true"
              name={"Cancel"}
              className={
                "sm:!py-[18px] !py-3 text-sm !px-3 w-full rounded-[15px] font-semibold"
              }
              onClick={() => setInformation(false)}
            ></Button>
            <Button
              color="bluedark"
              secondary="true"
              name={"Save"}
              className={
                "sm:!py-[18px] !py-3 text-sm !px-3 w-full rounded-[15px] font-semibold"
              }
            ></Button>
          </div>
        </div>
      </Modal>
      <Modal
        open={address}
        setOpen={setAddress}
        className={"max-w-[544px] w-full mx-auto "}
      >
        <div className="sm:px-2 pb-2">
          <div className="flex items-center justify-between md:pb-8 pb-5">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">
              Edit shipping address
            </h2>
            <Image
              src={closeico}
              alt=""
              onClick={() => setAddress(false)}
              className={"cursor-pointer dark:invert"}
            />
          </div>
          <InputContent
            className={"!py-[10px] dark:bg-black/40 dark:text-white/40 mb-3 mt-4"}
          >
            <CountryDropdown onChange={setSelectedCountry}/>
            {/* <VarientDropdown
              selectitem={[
                { id: 1, name: "Select Country..." },
                { id: 2, name: "Select 1" },
                { id: 3, name: "Select 2" },
              ]}
              className="dark:text-white/40 "
            /> */}
          </InputContent>
          <div className="grid sm:grid-cols-2 sm:gap-6 ">
            <InputContent
              ontent
              title={"First name"}
              className="dark:bg-black/40 mb-3"
            >
              <input
                type="text"
                name=""
                defaultValue="Baalkrishans"
                className="w-full dark:bg-transparent"
              />
            </InputContent>
            <InputContent title={"Last name"} className="dark:bg-black/40 mb-3">
              <input
                type="text"
                name=""
                defaultValue="Lal Sani"
                className="w-full dark:bg-transparent"
              />
            </InputContent>
          </div>
          <InputContent title={"Company"} className="dark:bg-black/40 mb-3">
            <input
              type="text"
              name=""
              defaultValue="Company name"
              className="w-full dark:bg-transparent"
            />
          </InputContent>
          <InputContent title={"Address"} className="dark:bg-black/40 mb-3">
            <input
              type="text"
              name=""
              defaultValue="Exploit Cross-Platform Mindshare 52, Ekbal Society, ShwetaPur Pilani"
              className="w-full dark:bg-transparent"
            />
          </InputContent>
          <InputContent
            title={"Apartment etc."}
            className="dark:bg-black/40 mb-3"
          >
            <input
              type="text"
              name=""
              defaultValue="Apartment, suite, etc"
              className="w-full dark:bg-transparent"
            />
          </InputContent>
          <div className="grid sm:grid-cols-2 sm:gap-6">
            
            <InputContent
              title={"State"}
              className="dark:bg-black/40 dark:text-white/40 mb-3"
            >
              <RegionDropdown  onChange={setSelectedState} country={selectedCountry} className="dark:bg-transparent"/>
              
            </InputContent>
            <InputContent title={"City"} className="dark:bg-black/40 mb-3">
              <input
                type="text"
                name=""
                defaultValue="Pilani"
                className="w-full dark:bg-transparent"
              />
            </InputContent>
          </div>
          <div className="grid sm:grid-cols-2 sm:gap-6 mb-[42px]">
            <InputContent
              title={"Country code"}
              className="dark:bg-black/40"
            >
              <VarientDropdown
                selectitem={[
                  { name: "+91" },
                  { name: "Algeria (+213)" },
                  { name: "Andorra (+376)" },
                  { name: "Angola (+244)" },
                  { name: "Anguilla (+1264)" },
                  { name: "Antigua Barbuda (+1268)" },
                  { name: "Argentina (+54)" },
                  { name: "Armenia (+374)" },
                  { name: "Aruba (+297)" },
                  { name: "Australia (+61)" },
                  { name: "Austria (+43)" },
                  { name: "Azerbaijan (+994)" },
                  { name: "Bahamas (+1242)" },
                  { name: "Bahrain (+973)" },
                  { name: "Bangladesh (+880)" },
                  { name: "Barbados (+1246)" },
                  { name: "Belarus (+375)" },
                  { name: "Belgium (+32)" },
                  { name: "Belize (+501)" },
                  { name: "Benin (+229)" },
                  { name: "Bermuda (+1441)" },
                  { name: "Bhutan (+975)" },
                  { name: "Bolivia (+591)" },
                  { name: "Bosnia Herzegovina (+387)" },
                  { name: "Botswana (+267)" },
                  { name: "Brazil (+55)" },
                  { name: "Brunei (+673)" },
                  { name: "Bulgaria (+359)" },
                  { name: "Burkina Faso (+226)" },
                  { name: "Burundi (+257)" },
                  { name: "Cambodia (+855)" },
                  { name: "Cameroon (+237)" },
                  { name: "Canada (+1)" },
                  { name: "Cape Verde Islands (+238)" },
                  { name: "Cayman Islands (+1345)" },
                  { name: "Central African Republic (+236)" },
                  { name: "Chile (+56)" },
                  { name: "China (+86)" },
                  { name: "Colombia (+57)" },
                  { name: "Comoros (+269)" },
                  { name: "Congo (+242)" },
                  { name: "Cook Islands (+682)" },
                  { name: "Costa Rica (+506)" },
                  { name: "Croatia (+385)" },
                  { name: "Cuba (+53)" },
                  { name: "Cyprus North (+90392)" },
                  { name: "Cyprus South (+357)" },
                  { name: "Czech Republic (+42)" },
                  { name: "Denmark (+45)" },
                  { name: "Djibouti (+253)" },
                  { name: "Dominica (+1809)" },
                  { name: "Dominican Republic (+1809)" },
                  { name: "Ecuador (+593)" },
                  { name: "Egypt (+20)" },
                  { name: "El Salvador (+503)" },
                  { name: "Equatorial Guinea (+240)" },
                  { name: "Eritrea (+291)" },
                  { name: "Estonia (+372)" },
                  { name: "Ethiopia (+251)" },
                  { name: "Falkland Islands (+500)" },
                  { name: "Faroe Islands (+298)" },
                  { name: "Fiji (+679)" },
                  { name: "Finland (+358)" },
                  { name: "France (+33)" },
                  { name: "French Guiana (+594)" },
                  { name: "French Polynesia (+689)" },
                  { name: "Gabon (+241)" },
                  { name: "Gambia (+220)" },
                  { name: "Georgia (+7880)" },
                  { name: "Germany (+49)" },
                  { name: "Ghana (+233)" },
                  { name: "Gibraltar (+350)" },
                  { name: "Greece (+30)" },
                  { name: "Greenland (+299)" },
                  { name: "Grenada (+1473)" },
                  { name: "Guadeloupe (+590)" },
                  { name: "Guam (+671)" },
                  { name: "Guatemala (+502)" },
                  { name: "Guinea (+224)" },
                  { name: "Guinea - Bissau (+245)" },
                  { name: "Guyana (+592)" },
                  { name: "Haiti (+509)" },
                  { name: "Honduras (+504)" },
                  { name: "Hong Kong (+852)" },
                  { name: "Hungary (+36)" },
                  { name: "Iceland (+354)" },
                  { name: "India (+91)" },
                  { name: "Indonesia (+62)" },
                  { name: "Iran (+98)" },
                  { name: "Iraq (+964)" },
                  { name: "Ireland (+353)" },
                  { name: "Israel (+972)" },
                  { name: "Italy (+39)" },
                  { name: "Jamaica (+1876)" },
                  { name: "Japan (+81)" },
                  { name: "Jordan (+962)" },
                  { name: "Kazakhstan (+7)" },
                  { name: "Kenya (+254)" },
                  { name: "Kiribati (+686)" },
                  { name: "Korea North (+850)" },
                  { name: "Korea South (+82)" },
                  { name: "Kuwait (+965)" },
                  { name: "Kyrgyzstan (+996)" },
                  { name: "Laos (+856)" },
                  { name: "Latvia (+371)" },
                  { name: "Lebanon (+961)" },
                  { name: "Lesotho (+266)" },
                  { name: "Liberia (+231)" },
                  { name: "Libya (+218)" },
                  { name: "Liechtenstein (+417)" },
                  { name: "Lithuania (+370)" },
                  { name: "Luxembourg (+352)" },
                  { name: "Macao (+853)" },
                  { name: "Macedonia (+389)" },
                  { name: "Madagascar (+261)" },
                  { name: "Malawi (+265)" },
                  { name: "Malaysia (+60)" },
                  { name: "Maldives (+960)" },
                  { name: "Mali (+223)" },
                  { name: "Malta (+356)" },
                  { name: "Marshall Islands (+692)" },
                  { name: "Martinique (+596)" },
                  { name: "Mauritania (+222)" },
                  { name: "Mayotte (+269)" },
                  { name: "Mexico (+52)" },
                  { name: "Micronesia (+691)" },
                  { name: "Moldova (+373)" },
                  { name: "Monaco (+377)" },
                  { name: "Mongolia (+976)" },
                  { name: "Montserrat (+1664)" },
                  { name: "Morocco (+212)" },
                  { name: "Mozambique (+258)" },
                  { name: "Myanmar (+95)" },
                  { name: "Namibia (+264)" },
                  { name: "Nauru (+674)" },
                  { name: "Nepal (+977)" },
                  { name: "Netherlands (+31)" },
                  { name: "New Caledonia (+687)" },
                  { name: "New Zealand (+64)" },
                  { name: "Nicaragua (+505)" },
                  { name: "Niger (+227)" },
                  { name: "Nigeria (+234)" },
                  { name: "Niue (+683)" },
                  { name: "Norfolk Islands (+672)" },
                  { name: "Northern Marianas (+670)" },
                  { name: "Norway (+47)" },
                  { name: "Oman (+968)" },
                  { name: "Palau (+680)" },
                  { name: "Panama (+507)" },
                  { name: "Papua New Guinea (+675)" },
                  { name: "Paraguay (+595)" },
                  { name: "Peru (+51)" },
                  { name: "Philippines (+63)" },
                  { name: "Poland (+48)" },
                  { name: "Portugal (+351)" },
                  { name: "Puerto Rico (+1787)" },
                  { name: "Qatar (+974)" },
                  { name: "Reunion (+262)" },
                  { name: "Romania (+40)" },
                  { name: "Russia (+7)" },
                  { name: "Rwanda (+250)" },
                  { name: "San Marino (+378)" },
                  { name: "Sao Tome Principe (+239)" },
                  { name: "Saudi Arabia (+966)" },
                  { name: "Senegal (+221)" },
                  { name: "Serbia (+381)" },
                  { name: "Seychelles (+248)" },
                  { name: "Sierra Leone (+232)" },
                  { name: "Singapore (+65)" },
                  { name: "Slovak Republic (+421)" },
                  { name: "Slovenia (+386)" },
                  { name: "Solomon Islands (+677)" },
                  { name: "Somalia (+252)" },
                  { name: "South Africa (+27)" },
                  { name: "Spain (+34)" },
                  { name: "Sri Lanka (+94)" },
                  { name: "St. Helena (+290)" },
                  { name: "St. Kitts (+1869)" },
                  { name: "St. Lucia (+1758)" },
                  { name: "Sudan (+249)" },
                  { name: "Suriname (+597)" },
                  { name: "Swaziland (+268)" },
                  { name: "Sweden (+46)" },
                  { name: "Switzerland (+41)" },
                  { name: "Syria (+963)" },
                  { name: "Taiwan (+886)" },
                  { name: "Tajikstan (+7)" },
                  { name: "Thailand (+66)" },
                  { name: "Togo (+228)" },
                  { name: "Tonga (+676)" },
                  { name: "Trinidad Tobago (+1868)" },
                  { name: "Tunisia (+216)" },
                  { name: "Turkey (+90)" },
                  { name: "Turkmenistan (+7)" },
                  { name: "Turkmenistan (+993)" },
                  { name: "Turks Caicos Islands (+1649)" },
                  { name: "Tuvalu (+688)" },
                  { name: "Uganda (+256)" },
                  { name: "Ukraine (+380)" },
                  { name: "United Arab Emirates (+971)" },
                  { name: "Uruguay (+598)" },
                  { name: "Uzbekistan (+7)" },
                  { name: "Vanuatu (+678)" },
                  { name: "Vatican City (+379)" },
                  { name: "Venezuela (+58)" },
                  { name: "Vietnam (+84)" },
                  { name: "Virgin Islands - British (+1284)" },
                  { name: "Virgin Islands - US (+1340)" },
                  { name: "Wallis Futuna (+681)" },
                  { name: "Yemen (North)(+969)" },
                  { name: "Yemen (South)(+967)" },
                  { name: "Zambia (+260)" },
                  { name: "Zimbabwe (+263)" },
                ]}
                className="dark:!text-white/80 !text-black/80"
              />
            </InputContent>
            <InputContent
              title={"Phone number"}
              className="dark:bg-black/40"
            >
              <input
                type="number"
                name=""
                defaultValue="8073589105"
                className="w-full dark:bg-transparent"
              />
            </InputContent>
          </div>
          <div className="flex justify-end sm:flex-nowrap flex-wrap items-center gap-4 mx-auto sm:mt-8 mt-5">
            <Button
              color="lightgrey"
              secondary="true"
              name={"Cancel"}
              className={
                "sm:!py-[18px] !py-3 text-sm !px-3 w-full rounded-[15px] font-semibold "
              }
              onClick={() => setAddress(false)}
            ></Button>
            <Button
              color="bluedark"
              secondary="true"
              name={"Save"}
              className={
                "sm:!py-[18px] !py-3 text-sm !px-3 w-full rounded-[15px] font-semibold"
              }
            ></Button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default orders;
