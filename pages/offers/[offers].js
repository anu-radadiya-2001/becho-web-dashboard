import React, { useState } from "react";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/ui/PageHeader";
import Alert from "@/components/ui/Alert";
import Link from "next/link";
import InputContent from "@/components/ui/InputContent";
import VarientDropdown from "@/components/ui/SelectOption";
import CheckBox from "@/components/ui/CheckBox";
import UnsavedChanges from "@/components/ui/UnsavedChanges";
import DateSelect from "@/components/ui/DateSelect";
import Layout from "@/layouts/layout";
import Modal from "@/components/ui/Modal";

const offers = () => {
  const [open, setOpen] = useState(false);
  const [deleteOffer, setDeleteOffer] = useState(false);

  const [isActive, setIsActive] = useState(true);
  const [automatic, setAutomaticBtn] = useState(false);
  const ActiveHandler = () => {
    setIsActive(true);
    setAutomaticBtn(false);
  };
  const AutomaticBtnHandler = () => {
    setIsActive(false);
    setAutomaticBtn(true);
  };

  return (
    <Layout container>
      <UnsavedChanges>
        <Button
          color={"white"}
          name={"Discard"}
          size={"small"}
          outline={"true"}
          className={
            "!text-xs md:mr-5 mr-4 dark:border-blacklight  dark:text-blacklight"
          }
        />
        <Button color={"green"} size={"medium"} name={"Save Changes"} />
      </UnsavedChanges>
      <PageHeader
        arrow={true}
        size={"small"}
        className={"!text-xs mb-5 flex-wrap gap-5"}
        orderid={"EKHKSS3S266H"}
        orderidcopy={"Copy of EKHKSS3S266H"}
        Badgesdata={[{ color: "green", name: "Active" }]}
      >
        <Link
          href={"#/"}
          className={
            "hover:bg-black/20 hover:dark:bg-white/20 text-black/40 dark:text-white/40 text-xs rounded-lg sm:px-2 py-[5px] hover:text-black/80"
          }
        >
          Duplicate
        </Link>

        <div
          onClick={() => setOpen(true)}          
          className="hover:bg-black/20 hover:dark:bg-white/20 text-black/40 dark:text-white/40 text-xs rounded-lg sm:px-2 py-[5px] hover:text-black/80"
        >
          Deactivate
        </div>

        <div
          onClick={() => setDeleteOffer(true)}
          className="py-[5px] sm:px-2 sm:mr-2 whitespace-nowrap text-xs text-secondary-red"
        >
          Delete Offer
        </div>
      </PageHeader>
      <div className="mb-7">
        <Alert
          color={"red"}
          title={"There is 1 error with this offer:"}
          description={"Start date can’t be blank"}
        />
      </div>
      <div className="mb-7">
        <Alert
          color={"green"}
          title={"Copy of EKHKSS3S266H was created successfully. What’s next?"}
          description={
            "Promote your discount code via email or social media by sharing a unique link. Customers will receive the discount when they use this link during checkout."
          }
        />
      </div>
      <div className="flex justify-between  flex-wrap">
        <div className="w-full md:max-w-[63%] max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl py-4 lg:px-6 sm:px-5 px-3">
          <h2 className="text-blacklight font-semibold text-lg leading-5 pb-4 dark:text-white">
            Amount off on order
          </h2>
          <div>
            <InputContent title={"Type"}>
              <div className="flex md:items-center items-start sm:flex-nowrap flex-wrap gap-1 sm:gap-5">
                <div
                  className={`checkbox-icon inline-block relative`}
                  onClick={ActiveHandler}
                >
                  <input
                    className="styled-checkbox"
                    id="discount"
                    type="radio"
                    name="discount"
                  />
                  <label
                    htmlFor="discount"
                    className="relative cursor-pointer text-sm flex sm:items-center"
                  >
                    Discount code
                  </label>
                </div>
                <div
                  className={`checkbox-icon inline-block relative `}
                  >
                  <input
                    className="styled-checkbox"
                    id="automatic"
                    type="radio"
                    name="discount"
                    onClick={AutomaticBtnHandler}
                  />
                  <label
                    htmlFor="automatic"
                    className="relative cursor-pointer text-sm flex sm:items-center"
                  >
                    Automatic discount
                  </label>
                </div>
              </div>
            </InputContent>
            {isActive ? 
              <InputContent title={"Discount Code"}>
                <input
                  type="text"
                  name=""
                  defaultValue="EKHKSS3S266H"
                  className="bg-transparent w-full"
                />
              </InputContent>
              :
              ""
            }
            {automatic ? 
              <InputContent title={"Title"}>
                <input
                  type="text"
                  name=""
                  defaultValue="20% Diwali offer activated"
                  className="bg-transparent w-full"
                />
              </InputContent>
              :
              ""
            }
            <InputContent title={"Value Type"}>
              <div className="flex md:items-center items-start sm:flex-nowrap flex-wrap gap-1 sm:gap-5">
                <div className={`checkbox-icon inline-block relative `}>
                  <input
                    className="styled-checkbox"
                    id="percentage"
                    type="radio"
                    name="percentage"
                  />
                  <label
                    htmlFor="percentage"
                    className="relative cursor-pointer text-sm flex sm:items-center"
                  >
                    Percentage
                  </label>
                </div>
                <div className={`checkbox-icon inline-block relative `}>
                  <input
                    className="styled-checkbox"
                    id="amount"
                    type="radio"
                    name="percentage"
                  />
                  <label
                    htmlFor="amount"
                    className="relative cursor-pointer text-sm flex sm:items-center"
                  >
                    Fixed amount
                  </label>
                </div>
              </div>
            </InputContent>
            <InputContent title={"Percentage %"}>
              <input
                type="number"
                name=""
                defaultValue="40"
                className="bg-transparent w-full"
              />
            </InputContent>
            <InputContent>
              <VarientDropdown
                className={"py-2.5 "}
                selectitem={[
                  { id: 1, name: "Minimum purchase requirement" },
                  { id: 2, name: "Minimum purchase requirement 2" },
                  { id: 3, name: "Minimum purchase requirement 3" },
                ]}
              />
            </InputContent>
            <InputContent>
              <VarientDropdown
                className={"py-2.5"}
                selectitem={[
                  { id: 1, name: "Customer eligibility criteria" },
                  { id: 2, name: "Customer eligibility criteria 2" },
                  { id: 3, name: "Customer eligibility criteria 3" },
                ]}
              />
            </InputContent>
            <InputContent>
              <VarientDropdown
                className={"py-2.5"}
                arrowdown
                selectitem={[
                  { id: 1, name: "Maximum discount uses" },
                  { id: 2, name: "Maximum discount uses 2" },
                  { id: 3, name: "Maximum discount uses 3" },
                ]}
              />
            </InputContent>
            <InputContent title={"Start date"} titlestyle={"mb-1"}>
              <DateSelect placeholder={"Pick a date"}></DateSelect>
            </InputContent>
            <InputContent title={"End date (optional)"} titlestyle={"!mb-1"}>
              <DateSelect placeholder={"Pick a date"}></DateSelect>
            </InputContent>
            <div className="border-y border-black/5 dark:border-white/5 py-[18px] flex justify-end items-center">
              <Button
                color="lightgrey"
                size="large"
                name={"Discard"}
                secondary={"true"}
                className={"text-sm px-4"}
              ></Button>
              <Button
                color="blacklight"
                size="large"
                className={"ml-4 text-sm font-semibold mr-7"}
                name={"Save Changes"}
              ></Button>
            </div>
          </div>
        </div>
        <div className="w-full md:max-w-[35%] max-w-[100%] mt-4 md:mt-0">
          <div className="bg-primary-light dark:bg-white/5 rounded-2xl pt-4 pb-5 lg:px-6 sm:px-5  px-3">
            <h3 className="text-lg font-semibold">Summary</h3>
            {isActive ? 
              <h4 className="text-2xl text- font-semibold ">EKH KSS3S266H</h4>
             : 
              <h4 className="text-2xl text- font-semibold ">
                20% Diwali offer activated
              </h4>
            }
            <div>
              <ul className="mt-1 text-xs leading-[18px]">
                type and method
                <li className="list-disc ml-[26px]">Amount off order</li>
                <li className="list-disc ml-[26px]">Code</li>
              </ul>
              <ul className="text-xs leading-[18px]">
                details
                <li className="list-disc ml-[26px]">40% off entire order</li>
                <li className="list-disc ml-[26px]">
                  No minimum purchase requirement
                </li>
                <li className="list-disc ml-[26px]">All customers</li>
                <li className="list-disc ml-[26px]">
                  Limit of 5 uses, one per customer
                </li>
                <li className="list-disc ml-[26px]">
                  Can’t combine with other discounts
                </li>
                <li className="list-disc ml-[26px]">
                  Active from today until Feb 17
                </li>
              </ul>
              <ul className="font-semibold mt-5 leading-[18px] text-xs">
                Performance
                <li className="list-disc ml-[26px] font-normal">0 used </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        className={"max-w-[544px] w-full mx-auto sm:px-8 px-3"}
      >
        <div className="sm:px-2 pb-2">
          <div className="flex items-center justify-between md:pb-2 pb-5">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl !leading-9 text-lg mx-auto text-center">
              Deactivate this offer?
            </h2>
          </div>
          <p className="text-black/40 dark:text-white/40 mb-8">
            Are you sure you want to deactivate this offer? Deactivating an
            offer will make it inactive and prevent customers from viewing or
            using the offer. Please confirm if you want to proceed with
            deactivating this offer.{" "}
          </p>
          <div className="flex justify-end sm:flex-nowrap flex-wrap items-center gap-4 mx-auto">
            <Button
              color="winered"
              name={"Deactivate offer"}
              className={
                "sm:!py-[18px] !py-3 text-sm sm:!px-4 w-full rounded-[15px] font-semibold"
              }
            ></Button>
            <Button
              color="lightgrey"
              secondary="true"
              name={"Cancel"}
              className={
                "sm:!py-[18px] !py-3 text-sm sm:!px-4 w-full rounded-[15px] font-semibold"
              }
              onClick={() => setOpen(false)}
            ></Button>
          </div>
        </div>
      </Modal>
      <Modal
        open={deleteOffer}
        setOpen={setDeleteOffer}
        className={"max-w-[544px] w-full mx-auto sm:px-8 px-3"}
      >
        <div className="sm:px-2 pb-2">
          <div className="flex items-center justify-between md:pb-2 pb-5">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl !leading-9 text-lg mx-auto text-center">
              Delete this offer?
            </h2>
          </div>
          <p className="text-black/40 dark:text-white/40 mb-8">
            Are you sure you want to delete this discount? Deleting a discount
            will remove it from the system and prevent any further actions from
            being taken on it. Additionally, any customers who have used this
            discount code will no longer be able to use it. Please confirm if
            you want to proceed with deleting this discount.
          </p>
          <div className="flex justify-end sm:flex-nowrap flex-wrap items-center gap-4 mx-auto">
            <Button
              color="winered"
              name={"Delete offer"}
              className={
                "sm:!py-[18px] !py-3 text-sm sm:!px-4 w-full rounded-[15px] font-semibold"
              }
            ></Button>
            <Button
              color="lightgrey"
              secondary="true"
              name={"Cancel"}
              className={
                "sm:!py-[18px] !py-3 text-sm sm:!px-4 w-full rounded-[15px] font-semibold"
              }
              onClick={() => setDeleteOffer(false)}
            ></Button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default offers;
