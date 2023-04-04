import Image from "next/image";
import Arrow from "@/assets/images/icon/arrowblack.svg";
import Arrowdown from "@/assets/images/icon/downblackarrow.svg";

const ProductData = [
  {
    title: "Customers",
    count: "3,781",
    growth: "+5.27%",
    img: Arrow,
    bgColor: "bg-sky-100",
  },
  {
    title: "Orders",
    count: "3,219",
    growth: "+10.78%",
    img: Arrow,
  },
  {
    title: "Revenue",
    count: "₹6,10,895",
    growth: "-0.56%",
    img: Arrowdown,
    bgColor: "thirdbox",
    counttext: "md:!text-lg",
    boxcontain: "2xl:!gap-2 gap-[1px]",
  },
  {
    title: "Product Sales",
    count: "6,766",
    growth: "-0.56%",
    img: Arrow,
    bgColor: "bg-blue-50",
  },
];

export default function Dashboardbox() {
  return (
    <>
      <div className="lg:col-span-2 lg:row-span-2">
        <div className="grid grid-cols-2 sm:gap-x-7 gap-2 lg:!gap-2 lg:gap-y-3  md:gap-y-8 gap-y-5 h-full">
          {ProductData.map((dashboardData, index) => (
            <div
              key={index}
              className={`xl:p-6 p-4 lg:px-2  px-3 bg-primary-light font-semibold rounded-2xl text-blacklight xl:max-w-[202px] w-full ${dashboardData.bgColor}`}
            >
              <h3 className="md:text-sm text-xs font-semibold">{dashboardData.title}</h3>
              <div
                className={`flex pt-3 items-center 2xl:gap-[26px] xl:gap-2 lg:gap-[6px] sm:gap-3 gap-1 justify-between lg:justify-start ${dashboardData.boxcontain}`}
              >
                <span className={`2xl:text-2xl md:text-xl  sm:text-lg text-sm ${dashboardData.counttext}`}>
                  {dashboardData.count}
                </span>
                <div className="flex gap-[6px]">
                  <p className="sm:text-xs text-[10px] font-normal">{dashboardData.growth}</p>
                  <Image src={dashboardData.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
