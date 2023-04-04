import React, { useState } from "react";
import TabList from "@/components/store-settings/tab-list";
import CheckBox from "@/components/ui/CheckBox";
import Image from "next/image";
import InputContent from "@/components/ui/InputContent";
import LinkIcon from "@/assets/images/icon/Link.svg";
import EnvelopeSimple from "@/assets/images/icon/envelopeSimple.svg";
import Phone from "@/assets/images/icon/phone.svg";
import Bechopro from "@/assets/images/icon/Bechogreen.svg";
import Info from "@/assets/images/icon/info.svg";
import Link from "next/link";
import Badges from "@/components/ui/Badges";
import Alert from "@/components/ui/Alert";
import Layout from "@/layouts/layout";
import Button from "@/components/ui/Button";
import SelectOption from "@/components/ui/SelectOption";
import CountryDropdown from "@/components/ui/CountryStateDropdown/CountryDropdown";
import RegionDropdown from "@/components/ui/CountryStateDropdown/RegionDropdown";
const StoreDetaildData = [
  {
    id: 1,
    title: "Legal business name",
    data: "Becho Ecommerce Pvt Ltd",
    color: "hidden",
  },
  {
    id: 2,
    title: "Contact Phone",
    icon: Info,
    verified: "Verified",
    data: "+91 8276 454 935",
  },
  {
    id: 3,
    title: "Address",
    data: "Exploit Cross-Platform Mindshare 52, Ekbal Society, ShwetaPur Pilani",
    color: "hidden",
  },
  {
    id: 4,
    title: "Country",
    color: "hidden",
    indiaState: "true",
  },
  {
    id: 5,
    title: "State, City",
    color: "hidden",
    cityState: "true",
  },
  {
    id: 6,
    title: "PIN code",
    data: "133496",
    color: "hidden",
  },
  {
    id: 7,
    title: "Store contact email",
    email: "StoreEmail",
    color: "hidden",
  },
  {
    id: 8,
    title: "Sender email",
    email: "senderEmail",
    color: "hidden",
  },
];

const StoreDetails = () => {
  const [openinput, setOpeninput] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const [storeEmail, setStoreEmail] = useState('');
  const [senderEmail, setSenderEmail] = useState('');

  const emailRegex = /\S+@\S+\.\S+/;
  const validatestoreEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setStoreEmail('true');
    } else {
      setStoreEmail('false');
    }
  };  
  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setSenderEmail('true');
    } else {
      setSenderEmail('false');
    }
  };
  function saveValidForm() {
    console.log((storeEmail === 'true' && senderEmail === 'true'))
    if((storeEmail === 'true' || storeEmail === '') || (senderEmail === 'true' || senderEmail === '')){
      setOpeninput(false)
    } else {
      setOpeninput(true)
    }
  }
  return (
    <Layout container>
      <TabList />
      {/************* store details start *************/}
      <div className={"mt-5"}>
        <div className="w-full bg-primary-light dark:bg-white/5 rounded-2xl md:p-6 p-4">
          <div className="mb-1 flex items-center justify-between">
            <h4 className="text-lg font-semibold">Becho Store</h4>
            <Image src={Bechopro} alt="" />
          </div>
          <div className="flex items-center gap-x-4 mb-4 sm:flex-nowrap flex-wrap ">
            <div className="sm:pt-0 pt-3">
              <Link
                href={"#"}
                className="ml-1 flex items-center gap-1 text-black/40 text-xs dark:text-white/40"
              >
                <Image src={LinkIcon} alt="" className={"dark:invert"} />
                mystore.becho.io
              </Link>
            </div>
            <div className="sm:pt-0 pt-3">
              <Link
                href="tel:to+91 8276 454 935"
                className="ml-1 flex items-center gap-1 text-black/40 text-xs dark:text-white/40"
              >
                <Image src={Phone} alt="" className={"dark:invert"} />
                +91 8276 454 935
              </Link>
            </div>
            <div className="sm:pt-0 pt-3">
              <Link
                href="mailto:hello@mystore.com"
                className="ml-1 flex items-center gap-1  text-black/40 text-xs dark:text-white/40"
              >
                <Image src={EnvelopeSimple} alt="" className={"dark:invert"} />
                hello@mystore.com
              </Link>
            </div>
          </div>
          <div className="sm:flex items-start grid grid-cols-1">
            <div className="flex flex-col pt-5 sm:pt-0 sm:pr-7 sm:border-r border-black/10 dark:border-white/10 lg:flex-grow-0 flex-grow md:flex-grow">
              <p className="text-sm text-blacklight dark:text-white ">
                Profile Compleation
              </p>
              <div className="w-[168px] bg-black/5 h-7 relative rounded-lg mt-1 dark:bg-white/20">
                <span className="absolute top-[18%] left-1/2 -translate-x-1/2 font-semibold text-blacklight ">
                  51%
                </span>
                <div className="w-[51%] bg-secondary-purpleb h-7 rounded-l-lg"></div>
              </div>
            </div>
            <div className="flex flex-col pt-5 sm:pt-0 sm:px-7 sm:border-r border-black/10 dark:border-white/10 lg:flex-grow-0 flex-grow md:flex-grow ">
              <p className="text-sm text-blacklight dark:text-white">
                Earnings
              </p>
              <p className="text-lg font-semibold mt-1">₹1,45,000</p>
            </div>
            <div className="flex flex-col pt-5 sm:pt-0 sm:px-7 sm:border-r border-black/10 dark:border-white/10 lg:flex-grow-0 flex-grow md:flex-grow">
              <p className="text-sm text-blacklight dark:text-white">Orders</p>
              <p className="text-lg font-semibold mt-1">75</p>
            </div>
            <div className="flex flex-col pt-5 sm:pt-0 sm:pl-7 lg:flex-grow-0 flex-grow md:flex-grow">
              <p className="text-sm text-blacklight dark:text-white">
                Returning customers
              </p>
              <p className="text-lg font-semibold mt-1">10%</p>
            </div>
          </div>
        </div>
          <div className="bg-primary-light dark:bg-white/5 w-full rounded-2xl md:p-6 p-4 mt-7">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-semibold text-blacklight dark:text-white">
                Store Details
              </h4>
              {!openinput ? (
                <Link
                  href={""}
                  className="text-black/40 dark:text-white/40"
                  onClick={() => setOpeninput(true)}
                >
                  Edit Profile
                </Link>
              ) : (
                <Button
                  name={"Save"}
                  color={"green"}
                  size={"medium"}
                  onClick={() => saveValidForm()}
                />
              )}
            </div>
            <>
              {StoreDetaildData.map((item, index) => (
                <div className="flex flex-col" key={index}>
                  <div className="flex pb-[18px] flex-wrap sm:flex-nowrap">
                    <p className="sm:min-w-[225px] text-black/40 dark:text-white/40 text-xs pb-[6px] sm:pb-0 flex items-center sm:w-auto w-full flex-grow sm:flex-grow-0">
                      {item.title}
                      <Image
                        src={item.icon}
                        className={`ml-1 opacity-20 dark:invert ${item.color}`}
                        alt=""
                      />
                    </p>
                    {item.data && (
                      <div className="max-w-full w-full flex items-center">
                        <input
                          type="text"
                          readOnly={!openinput}
                          defaultValue={item.data}
                          className={`${
                            openinput
                              ? "dark:bg-blacklight bg-white px-3 py-2 rounded-lg border-black/10 border dark:border-white/10"
                              : "bg-transparent"
                          } w-full`}
                        />
                        {!openinput ? (
                          <Badges
                            color={"green"}
                            name={item.verified}
                            className={"ml-2"}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    )}

                    {item.email == "StoreEmail" && (
                      <div className="max-w-full w-full">
                        <input
                          type="email"
                          readOnly={!openinput}
                          defaultValue={'hello@mystore.com'}
                          onChange={validatestoreEmail}
                          className={`${
                            openinput
                              ? "dark:bg-blacklight bg-white px-3 py-2 rounded-lg border-black/10 border dark:border-white/10"
                              : "bg-transparent"
                              
                          } 
                          ${storeEmail === 'false' && "text-red-600"}
                          w-full`}
                        />
                      </div>
                    )}
                    
                    {item.email == "senderEmail" && (
                      <div className="max-w-full w-full flex items-center">
                        <input
                          type="email"
                          readOnly={!openinput}
                          defaultValue={'contact@mystore.com'}
                          onChange={validateEmail}
                          className={`${
                            openinput
                              ? "dark:bg-blacklight bg-white px-3 py-2 rounded-lg border-black/10 border dark:border-white/10"
                              : "bg-transparent"
                          }
                          ${senderEmail === 'false' && "text-red-600"}
                           w-full`}
                        />
                      </div>
                    )}

                    {item.indiaState == "true" && (
                      <div className="w-full items-center">
                        <div
                          className={`${
                            openinput
                              ? "dark:bg-blacklight bg-white px-3 py-2 rounded-lg border-black/10 border dark:border-white/10"
                              : "pointer-events-none [&>div>div>button>span:last-child]:!invisible"
                          }`}
                        >
                          <CountryDropdown
                            onChange={setSelectedCountry}
                            className={"bg-transparent"}
                            removearrow={openinput ? "" : "true"}
                          />
                        </div>
                      </div>
                    )}

                    {item.cityState == "true" && (
                      <div className="w-full items-center grid grid-cols-2 gap-4">
                        <div
                          className={`${
                            openinput
                              ? "dark:bg-blacklight bg-white px-3 py-2 rounded-lg border-black/10 border dark:border-white/10"
                              : "pointer-events-none [&>div>div>button>span:last-child]:!invisible"
                          }`}
                        >
                          <RegionDropdown
                            onChange={setSelectedState}
                            country={selectedCountry}
                            removearrow={openinput ? "" : "true"}
                            className={"bg-transparent"}
                          />
                        </div>

                        <input
                          type="email"
                          readOnly={!openinput}
                          Value={item.email}
                          placeholder={"City"}
                          onChange={validateEmail}
                          className={`${
                            openinput
                              ? "dark:bg-blacklight bg-white px-3 py-2 rounded-lg border-black/10 border dark:border-white/10"
                              : "bg-transparent"
                          } w-full`}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </>
            <Alert
              color={"reddark"}
              title={"We need your attention!"}
              description={
                "Confirm that you have access to contact@mystore.com in"
              }
              deatil={"sender email settings."}
            />
          </div> 
      </div>
      {/************* store details end ***********/}
    </Layout>
  );
};

export default StoreDetails;
