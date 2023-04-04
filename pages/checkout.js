import React from "react";
import TabList from "@/components/store-settings/tab-list";
import Button from "@/components/ui/Button";
import CheckBox from "@/components/ui/CheckBox";
import SetupUpdate from "@/components/ui/SetupUpdate";
import Layout from "@/layouts/layout";

const Information = [
  {
    id: 1,
    name: "fullname",
    title: "Require full name",
    discription: "Select if full name is required for checkout. If not selected, only the first name will be required.",
  },
  {
    id: 2,
    name: "companyname",
    title: "Require company name",
    discription: "Select if customer’s company name is required.",
  },
  {
    id: 3,
    name: "phonenumber",
    title: "Require phone number",
    discription: "Select if customer’s phone number is required.",
  },
  {
    id: 4,
    name: "address",
    title: "Use shipping address as billing address by default",
    discription: "If not selected, the customer will be required to add both addresses before checkout.",
    border: "border-none",
  },
];

const checkout = () => {
  return (
    <Layout container>
      <TabList />
      {/* ********** checkout start *********** */}
        <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl lg:p-6 lg:pb-8 py-6 sm:px-5 px-3">
          <div className="flex justify-between items-center flex-wrap gap-5 pb-3">
            <h2 className="font-semibold text-sm leading-5">Checkout</h2>
            <div className="flex justify-end items-center gap-2">
              <Button
                color="lightgrey"
                size="small"
                name={"Discard"}
                secondary={"true"}
                className={"leading-[18px] text-xs !px-2 !py-[5px] "}
              ></Button>
              <Button
                color="blacklight"
                size="small"
                className={"text-xs !px-2 !py-[5px] leading-[18px]"}
                name={"Save Changes"}
              ></Button>
            </div>
          </div>
          <div className="flex justify-between items-center sm:px-3 pb-[22px] pt-[7px] border-b border-black/10 dark:border-white/10 mb-5 gap-5">
            <h2 className="text-sm leading-5">Customer contact method</h2>
            <div className="flex justify-end items-center gap-2">
              <div className="flex md:items-center items-start sm:flex-nowrap flex-wrap gap-1 sm:gap-9">
                <CheckBox name={"percentage"}>Email</CheckBox>
                <CheckBox name={"fixed"}>Phone</CheckBox>
              </div>
            </div>
          </div>
          <SetupUpdate
            color={"red"}
            className={"mb-4 !p-4"}
            title={"Email updates"}
            description={"To send email updates, please enter details."}
          >
            <Button color={"redlight"} name={"Setup emails"} className={"whitespace-nowrap !py-[5px] hover:bg-secondary-red-light-hover"} />
          </SetupUpdate>
          <SetupUpdate
            color={"red"}
            title={"SMS Updates"}
            description={"To send SMS updates, please enter details."}
            className={"!p-4"}
          >
            <Button color={"redlight"} name={"Setup SMS"} className={"whitespace-nowrap !py-[5px] hover:bg-secondary-red-light-hover"} />
          </SetupUpdate>
        </div>
        <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl lg:p-6 lg:pt-5 lg:pb-[9px] sm:px-5 py-6 px-3 mt-7">
          <div className="flex justify-between items-center flex-wrap gap-5">
            <h2 className="font-semibold text-sm leading-5">Customer information for checkout</h2>
            <div className="flex justify-end items-center gap-2">
              <Button
                color="lightgrey"
                size="small"
                name={"Discard"}
                secondary={"true"}
                className={"leading-[18px] text-xs !px-2 !py-[5px]"}
              ></Button>
              <Button
                color="blacklight"
                size="small"
                className={"text-xs !px-2 !py-[5px] leading-[18px]"}
                name={"Save Changes"}
              ></Button>
            </div>
          </div>
          <div>
            <>
              {Information.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center md:items-center gap-3 sm:px-5 py-4 border-b border-black/10 dark:border-white/10 ${item.border}`}
                >
                  <CheckBox name={item.name}></CheckBox>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <span className="text-xs text-black/40 dark:text-white/40 ">{item.discription}</span>
                  </div>
                </div>
              ))}
            </>
          </div>
        </div> 
      {/* /********** checkout end************/}
    </Layout>
  );
};

export default checkout;
