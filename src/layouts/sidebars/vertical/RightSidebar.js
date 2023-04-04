import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Orderreceive from "@/assets/images/icon/order-receive.svg";
import Customerico from "@/assets/images/icon/customer.svg";
import Cancleicon from "@/assets/images/icon/cancleicon.svg";
import Milistone from "@/assets/images/icon/milistoneicon.svg";
import Update from "@/assets/images/icon/updatewifi.svg";
import Closebtn from "@/assets/images/icon/closeicon.svg";
import Button from "@/components/ui/Button";

const navigation = [
  {
    title: "New order #CM9808 received",
    time: "Today, 2:34 pm",
    icon: Orderreceive,
  },
  {
    title: "New customer, Saumil Kohli, registered",
    time: "Today, 1:23 pm",
    icon: Customerico,
  },
  {
    title: "Order cancelled by customer",
    time: "Today, 10:16 am",
    icon: Cancleicon,
  },
  {
    title: "Reached new milestone of 1000 orders",
    time: "Yesterday",
    icon: Milistone,
  },
  {
    title: "Reached new milestone of 100 customers",
    time: "Yesterday",
    icon: Milistone,
  },
  {
    title: "New theme update available",
    time: "Yesterday 12:39 AM",
    icon: Update,
  },
  {
    title: "New order #CM9804 received",
    time: "Yesterday",
    icon: Orderreceive,
  },
];

const RightSidebar = ({ showMobilesidebar }) => {
  let curl = useRouter();
  const location = curl.pathname;

  return (
    <div className="p-4 md:pr-6 md:pl-5 py-[26px]">
      <div className="flex justify-between">
        <h2 className="text-sm font-semibold">Notifications</h2>
        <button onClick={showMobilesidebar} className="lgm:hidden block">
          <Image src={Closebtn} alt="" className="w-6 dark:invert" />
        </button>
      </div>
      <div vertical={`true`} className="sidebarNav">
        {navigation.map((navi, index) => (
          <div key={index} className="sidenav-bg pt-5">
            <Link href="" className="flex gap-2 items-start pl-1">
              <Image src={navi.icon} alt="" />
              <div>
                <span className="font-normal text-sm text-blacklight dark:text-white">{navi.title}</span>
                <p className="text-xs text-black/40 dark:text-white/40">{navi.time}</p>
              </div>
            </Link>
          </div>
        ))}
        <Button color="lightgrey" size={"small"} name="Load More" secondary={"true"} className="mt-7" />
      </div>
    </div>
  );
};

export default RightSidebar;
