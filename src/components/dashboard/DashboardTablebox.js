import Image from "next/image";
import Calender from "@/assets/images/icon/CalendarBlank.svg";
import User from "@/assets/images/icon/userimg.svg";
import User1 from "@/assets/images/icon/user1.svg";
import User2 from "@/assets/images/icon/user2.svg";
import User3 from "@/assets/images/icon/user3.svg";
import User4 from "@/assets/images/icon/user4.svg";
import Dots from "@/assets/images/icon/Union.svg";
import Dropdown from "@/components/ui/Dropdown";

const TableRow = [
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
    orderStatus: "Unfulfilled",
    orderStatusData: "status",
    union: Dots,
    dot: "dot-active pl-4 before:dark:bg-white",
    orderStatusData: "bg-secondary-red/70 ml-0 rounded-[18px] px-[6px] leading-normal !text-white",
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
    dots: "dot-active pl-4 before:dark:bg-white",
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
    tableSec: "text-color",
    union: Dots,
    orderStatusData: "pending",
    paymentData: "bg-amber-200 dark:!text-black",
    orderStatusData: "bg-secondary-red/70 ml-0 rounded-[18px] px-[6px] leading-normal !text-white",
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
    tableSec: "text-color",
    union: Dots,
    paymentData: "bg-amber-200 dark:!text-black",
    orderStatusData: "bg-secondary-red/70 ml-0 rounded-[18px] px-[6px] leading-normal !text-white",
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
  },
];
export default function DashboardTablebox() {
  return (
    <>
      {TableRow.map((dashboardRowData, index) => (
        <tr
          className={`border-b border-black/5  hover:bg-primary-light hover:border-primary-light dark:border-white/5 dark:hover:bg-white/5 group transition-all duration-300 cursor-pointer text-xs ${dashboardRowData.tableSec}`}
          key={index}
        >
          <td className="pl-0 py-2.5 pr-[10px]">{dashboardRowData.orderId}</td>
          <td className="px-3 py-2.5 whitespace-nowrap">
            <Image src={dashboardRowData.icon} alt="" className="dark:invert inline-block mr-[6px]" />
            {dashboardRowData.date}
          </td>
          <td className="px-3 py-2.5 gap-2 whitespace-nowrap">{dashboardRowData.userName}</td>
          <td className="px-3 pr-0 py-2.5 whitespace-nowrap">
            <h3
              className={`rounded-2xl leading-normal relative text-black/80 dark:text-white/80 inline-block px-[6px] ${dashboardRowData.dot} ${dashboardRowData.paymentData}`}
            >
              {dashboardRowData.payment}
            </h3>
          </td>
          <td className="px-4 py-2.5">
            <h3
              className={`text-black-80 relative inline-block text-black/80 dark:white/80 dark:text-white ${dashboardRowData.dots} ${dashboardRowData.orderStatusData}`}
            >
              {dashboardRowData.orderStatus}
            </h3>
          </td>
          <td className="px-3 pr-[10px] py-2.5 whitespace-nowrap">{dashboardRowData.items}</td>
          <td className="px-3 py-2.5 max-w-[210px] whitespace-nowrap">{dashboardRowData.deliveryMethod}</td>
          <td className="opacity-0 group-hover:opacity-100 pr-4">
            <Dropdown
              className="right-0 left-[unset]"
              itemsclass="w-[200px] p-2 divide-y-0"
              button={
                <div className="flex gap-2 items-center py-3 px-2 justify-end">
                  <Image src={Dots} alt="" className="dark:invert" />
                </div>
              }
              dropdownitem={[
                {id:1, title: "Print packing slip", link: "/" },
                {id:2, title: "Archive order", link: "/" },
                {id:3, title: "Put on Hold (or Unhold order)", link: "/" },
                {id:4, title: "Mark as paid (or Mark as Unpaid if already paid)", link: "/" },
                {id:5, title: "Fulfil order (or Mark as Unfulfilled)", link: "/" },
                {id:6, title: "View details", link: "/" },

              ]}
            />
          </td>
        </tr>
      ))}
    </>
  );
}
