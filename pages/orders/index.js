import React, { useState } from "react";
import Card from "@/components/ui/Card";
import PageHeader from "@/components/ui/PageHeader";
import ordersCard from "@/assets/images/img/orders-card.svg";
import Addicon from "@/assets/images/icon/Add.svg";
import FunnelSimple from "@/assets/images/icon/FunnelSimple.svg";
import ArrowsDownUp from "@/assets/images/icon/ArrowsDownUp.svg";
import Searchicon from "@/assets/images/icon/searchico.svg";
import ArrowLineLeft from "@/assets/images/icon/ArrowLineLeft.svg";
import Button from "@/components/ui/Button";
import Dleleteico from "@/assets/images/icon/deletered.svg";
import Pagetitle from "@/components/ui/Pagetitle";
import SelectPlanTable from "@/components/orders/SelectPlanTable";
import Dots from "@/assets/images/icon/Union.svg";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/layouts/layout";
import CheckBox from "@/components/ui/CheckBox";
import User from "@/assets/images/icon/userimg.svg";
import Calender from "@/assets/images/icon/CalendarBlank.svg";
import User1 from "@/assets/images/icon/user1.svg";
import User2 from "@/assets/images/icon/user2.svg";
import User3 from "@/assets/images/icon/user3.svg";
import User4 from "@/assets/images/icon/user4.svg";
import Dropdown from "@/components/ui/Dropdown";
import Modal from "@/components/ui/Modal";
import PopupStyle from "@/components/ui/PopupStyle";
import Shopping from "@/assets/images/icon/shoppingbagopen.svg";
const tableData = [
  {
    id: 1,
    orderId: "#CM9808",
    userName: "Krishna H",
    payment: "Paid",
    deliveryMethod: "Cash on Delivery",
    date: "Today, 2:34 pm",
    img: User,
    icon: Calender,
    items: "3 items",
    orderStatus: "On hold",
    orderStatusData: "status",
    union: Dots,
    dot: "dot-active pl-4 before:dark:bg-white",
    orderStatusData: "bg-[#f2994ab3] ml-0 rounded-[18px] px-[6px] leading-normal !text-white",
    name: "Cash",
  },
  {
    id: 2,
    orderId: "#CM9807",
    userName: "Sahil Kohli",
    payment: "Paid",
    deliveryMethod: "UPI",
    date: "Today, 1:50 pm",
    img: User1,
    items: "5 items",
    icon: Calender,
    union: Dots,
    orderStatus: "Fulfilled",
    dot: "dot-active pl-4 before:dark:bg-white",
    name: "Paid",
  },
  {
    id: 3,
    orderId: "#CM9806",
    userName: "Asmita Modi",
    payment: "Payment pending",
    date: "Today, 12:34 pm",
    img: User2,
    items: "10 items",
    icon: Calender,
    orderStatus: "Unfulfilled",
    tablesec: "text-color",
    union: Dots,
    orderStatusdata: "pending",
    orderStatus: "Unfulfilled",
    paymentdata: "bg-amber-200 dark:!text-black",
    orderStatusData: "bg-red-400 ml-0 rounded-[18px] px-[6px] leading-normal !text-white",
    name: "Payment",
  },
  {
    id: 4,
    orderId: "#CM9805",
    userName: "Ajay Nagar",
    payment: "Payment pending",
    date: "Today, 10:14 am",
    img: User3,
    items: "5 items",
    icon: Calender,
    orderStatus: "Unfulfilled",
    tablesec: "text-color",
    union: Dots,
    paymentdata: "bg-amber-200 dark:!text-black",
    orderStatusData: "bg-red-400 ml-0 rounded-[18px] px-[6px] leading-normal !text-white",
    name: "paymentpending",
  },
  {
    id: 5,
    orderId: "#CM9804",
    userName: "Vijaya Divan",
    payment: "Paid",
    deliveryMethod: "UPI",
    date: "Yesterday",
    img: User4,
    items: "11 items",
    icon: Calender,
    orderStatus: "Fulfilled",
    union: Dots,
    dot: "dot-active pl-4 before:dark:bg-white",
    dots: "dot-active pl-4 before:dark:bg-white",
    name: "paidcash",
  },
  {
    id: 6,
    orderId: "#CM9808",
    userName: "Krishna H",
    payment: "Paid",
    deliveryMethod: "Cash on Delivery",
    date: "Today, 2:34 pm",
    img: User,
    icon: Calender,
    items: "3 items",
    orderStatus: "Unfulfilled",
    orderStatusData: "status",
    union: Dots,
    dot: "dot-active pl-4 before:dark:bg-white",
    orderStatusData: "bg-red-400 ml-0 rounded-[18px] px-[6px] leading-normal !text-white",
    name: "deleviry",
  },
  {
    id: 7,
    orderId: "#CM9807",
    userName: "Sahil Kohli",
    payment: "Paid",
    deliveryMethod: "UPI",
    date: "Today, 1:50 pm",
    img: User1,
    items: "5 items",
    icon: Calender,
    union: Dots,
    orderStatus: "Fulfilled",
    dot: "dot-active pl-4 before:dark:bg-white",
    dots: "dot-active pl-4 before:dark:bg-white",
    name: "kohil",
  },
  {
    id: 8,
    orderId: "#CM9806",
    userName: "Asmita Modi",
    payment: "Payment pending",
    date: "Today, 12:34 pm",
    img: User2,
    items: "10 items",
    icon: Calender,
    orderStatus: "Unfulfilled",
    tablesec: "text-color",
    union: Dots,
    orderStatus: "Unfulfilled",
    orderStatusData: "pending",
    paymentdata: "bg-amber-200 dark:!text-black",
    orderStatusData: "bg-red-400 ml-0 rounded-[18px] px-[6px] leading-normal !text-white",
    name: "modi",
  },
  {
    id: 9,
    orderId: "#CM9805",
    userName: "Ajay Nagar",
    payment: "Payment pending",
    date: "Today, 10:14 am",
    img: User3,
    items: "5 items",
    icon: Calender,
    orderStatus: "Unfulfilled",
    tablesec: "text-color",
    union: Dots,
    paymentdata: "bg-amber-200 dark:!text-black",
    orderStatusData: "bg-red-400 ml-0 rounded-[18px] px-[6px] leading-normal !text-white",
    name: "nagar",
  },
  {
    id: 10,
    orderId: "#CM9804",
    userName: "Vijaya Divan",
    payment: "Paid",
    deliveryMethod: "UPI",
    date: "Yesterday",
    img: User4,
    items: "11 items",
    icon: Calender,
    orderStatus: "Fulfilled",
    union: Dots,
    dot: "dot-active pl-4 before:dark:bg-white",
    name: "divan",
  },
];

const orders = () => {
  const [selectPlanOpen, setSelectPlanOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState([]);
  const [activeBtn, setActiveBtn] = useState(false);
  const SelectPlanHandler = () => {
    setSelectPlanOpen(true);
    setActiveBtn(true);
  };
  const [opentablepage, setopentablepage] = useState(false);
  const opentableHandler = () => {
    setopentablepage(true);
  };
  const [open, setOpen] = useState(false);

  const selectOrderItem = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelected([...selected, parseInt(value)]);
    } else {
      setSelected(selected.filter((e) => e != parseInt(value)));
    }
  };

  const selectAllCheckboxes = (e) => {
    let tempSelectAll = [];

    if (e.target.checked) {
      tableData.forEach((el, index) => {
        tempSelectAll.push(index);
      });
    }
    setSelected(tempSelectAll);
  };
  return (
    <>
      <Layout>
        {!opentablepage ? (
          <>
            <div className="flex items-center justify-between">
              <Pagetitle title={"orders"} />
              {!selectPlanOpen ? (
                <div>

                </div>
              ) : (<div><Button color={"green"} name={"Create Order"} className="!py-[5px]" /></div>)}
            </div>
            <div className="mb-8 Fvmt-5 ">

              {!selectPlanOpen ? (
                <div>
                  <Card
                    className={"md:mt-16 mt-5"}
                    cardImage={ordersCard}
                    title={"Your orders will show here"}
                    discription={
                      "Select a plan to receive orders and accept payments. Billing starts after free trial ends."
                    }
                  >
                    <Button
                      color={"lightgreen"}
                      name={"Select plan"}
                      className={"font-semibold !text-xs !py-1 !leading-[18px] active-effect"}
                      onClick={SelectPlanHandler}
                    />
                  </Card>
                </div>
              ) : (
                <>

                  <div className="bg-primary-light dark:bg-white/5 rounded-lg p-2 mb-2 flex items-center justify-between flex-wrap gap-5 mt-5">
                    <div className="flex items-center">
                      <div className="flex items-center mr-4">
                        <Image
                          src={Addicon}
                          alt=""
                          className="dark:invert mr-2 cursor-pointer rounded-lg hover:bg-black/5 transition-all duration-300 w-7 h-7 p-1"
                        />
                        <Dropdown
                          className="left-0"
                          itemsclass="w-[240px] left-0 p-2 !divide-y-0"
                          button={
                            <div className="flex  items-center w-7 h-7 p-1 justify-center hover:bg-black/5 hover:dark:bg-black/5 cursor-pointer rounded-lg">
                              <Image src={FunnelSimple} alt="" className="dark:invert" />
                            </div>
                          }
                          dropdownitem={[
                            { id: 1, title: "Date", link: "/" },
                            { id: 2, title: "Order number", link: "/" },
                            { id: 3, title: "Payment status", link: "/" },
                            { id: 4, title: "Mark as paid (or Mark as Unpaid if already paid)", link: "/" },
                            { id: 5, title: "Fulfilment status", link: "/" },
                            { id: 6, title: "Amount", link: "/" },
                          ]}
                        />
                        <Dropdown
                          className="left-0"
                          itemsclass="left-0 p-2 !divide-y-0 whitespace-nowrap"
                          button={
                            <div className="flex  items-center w-7 h-7 p-1 justify-center hover:bg-black/5 cursor-pointer rounded-lg">
                              <Image src={ArrowsDownUp} alt="" className="dark:invert" />
                            </div>
                          }
                          dropdownitem={[
                            { id: 1, title: "Lowest to highest", link: "/" },
                            { id: 2, title: "Highest to lowest", link: "/" },
                          ]}
                        />
                        <Dropdown
                          className="left-0"
                          itemsclass="w-[240px] -left-[72px] sm:left-0 p-2 [&>a:nth-child(2)]:!border-0 [&>a:nth-child(3)]:border-t [&>a:nth-child(4)]:!border-0 [&>a:nth-child(5)]:!border-0 [&>a:nth-child(6)]:!border-t [&>a:nth-child(7)]:!border-0"
                          button={
                            <div className="flex  items-center w-7 h-7 p-1 justify-center hover:bg-black/5 cursor-pointer rounded-lg">
                              <Image src={Dots} alt="" className="dark:invert" />
                            </div>
                          }
                          dropdownitem={[
                            { id: 1, title: "Print packing slips", link: "/" },
                            { id: 2, title: "Archive orders", link: "/" },
                            { id: 3, title: "Put on Hold (or Unhold orders)", link: "/" },
                            { id: 4, title: "Mark as paid (or Mark as Unpaid if already paid)", link: "/" },
                            { id: 5, title: "Fulfil orders (or Mark as Unfulfilled)", link: "/" },
                            { id: 6, title: "Add tags", link: "/" },
                            { id: 7, title: "Remove tags", link: "/" },
                          ]}
                        />
                      </div>
                      <div className="flex items-center">
                        <span className="bg-black/20 w-[1px] h-5 mr-4 dark:bg-white/20"></span>
                        <span className="mr-4 text-xs">{selected.length} Selected</span>
                        <Button
                          color={"lightgrey"}
                          secondary={"true"}
                          name={"Delete"}
                          className={"text-sm leading-5 !py-1"}
                          onClick={() => setOpen(true)}
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <input
                        placeholder="Search"
                        className="rounded-lg max-w-[160px] w-full pl-[26px] placeholder:text-black/20 dark:placeholder:text-white/20 text-sm border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/5 p-[3px] pr-3 focus-visible:outline-none"
                      />
                      <Image
                        src={Searchicon}
                        alt=""
                        className="absolute top-1/2 -translate-y-[50%] left-[7px] dark:invert"
                      />
                    </div>
                  </div>
                  <div className="xl:overflow-x-visible overflow-x-auto min-h-[470px]">
                    <table className="xl:w-full lgm:w-[900px] lg:w-full w-[1020px]">
                      <thead>
                        <tr className="text-black/40 dark:text-white/40 border-b text-xs">
                          <th className="whitespace-nowrap font-normal pl-[5px] px-3 py-[11px] pr-[10px] before:top-0 before:right-0 before:h-full before:absolute relative h-full text-start heading-border flex">
                            <CheckBox name={"select all"} onChange={selectAllCheckboxes} />
                            <p>Order ID</p>
                          </th>
                          <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                            Date
                          </th>
                          <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                            Customer
                          </th>
                          <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border whitespace-nowrap">
                            Payment status
                          </th>
                          <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border whitespace-nowrap">
                            Fulfillment status
                          </th>
                          <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border">
                            Items
                          </th>
                          <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start whitespace-nowrap">
                            Delivery method
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <SelectPlanTable
                          selectAll={selectAll}
                          handleChange={selectOrderItem}
                          opentableHandler={opentableHandler}
                          tableData={tableData}
                          selected={selected}
                        />
                      </tbody>
                    </table>
                  </div>
                  <div className="flex justify-end mt-5">
                    <ul className="flex">
                      <li className="mr-2">
                        <Link
                          href={""}
                          className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
                        >
                          <Image src={ArrowLineLeft} alt="" className="dark:invert" />
                        </Link>
                      </li>
                      <li className="mr-2">
                        <Link
                          href={""}
                          onClick={setActive}
                          className={`rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center ${!active ? "bg-black/5 dark:bg-white/5" : ""
                            }`}
                        >
                          1
                        </Link>
                      </li>
                      <li className="mr-2">
                        <Link
                          href={""}
                          className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
                        >
                          2
                        </Link>
                      </li>
                      <li className="mr-2">
                        <Link
                          href={""}
                          className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
                        >
                          3
                        </Link>
                      </li>
                      <li className="mr-2">
                        <Link
                          href={""}
                          className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
                        >
                          4
                        </Link>
                      </li>
                      <li className="mr-2">
                        <Link
                          href={""}
                          className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
                        >
                          5
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={""}
                          className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
                        >
                          <Image src={ArrowLineLeft} alt="" className="dark:invert rotate-180" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
            <>
              <Modal open={open} setOpen={setOpen} className={"max-w-[544px] w-full mx-auto"}>
                <div className="px-2 ">
                  <div className="bg-[#f9cdce] rounded-full border w-20 h-20 mx-auto">
                    <Image src={Dleleteico} className="h-full mx-auto " />
                  </div>
                  <h2 className="md:text-2xl text-lg text-black/80 dark:text-white/80 font-semibold text-center pt-4">
                    Do you want to delete this item?
                  </h2>
                  <p className="text-black/40 dark:text-white/40 text-center pt-2">This action can’t be undone</p>
                  <div className="flex justify-end items-center gap-4 pt-8">
                    <Button
                      color="winered"
                      className={"sm:!py-[18px] !py-3 text-sm rounded-[15px] font-semibold w-full"}
                      name={"Delete"}
                    ></Button>
                    <Button
                      color="lightgrey"
                      onClick={() => setOpen(false)}
                      secondary="true"
                      name={"Cancel"}
                      className={"sm:!py-[18px] !py-3 text-sm rounded-[15px] !px-4 w-full"}
                    ></Button>
                  </div>
                </div>
              </Modal>
            </>
          </>
        ) : (
          ""
        )}
      </Layout>
      <PopupStyle
        icon={Shopping}
        color={"blue"}
        title={"5 Tips to increase your orders and customers"}
        description={"Learn how to set up your business online step by step and sell effectively."}
        className={"w-full max-w-[280px] mx-auto"} />

    </>
  );
};

export default orders;
