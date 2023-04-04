import React, { useState } from "react";
import SetupUpdate from "@/components/ui/SetupUpdate";
import InputContent from "@/components/ui/InputContent";
import Button from "@/components/ui/Button";
import Layout from "@/layouts/layout";
import TextEditer from "@/components/ui/TextEditer";

const Policies = () => {
  return (
    <Layout container>
      <div className="bg-primary-light dark:bg-white/5 rounded-2xl p-4 md:p-6">
        <h3 className="text-blacklight dark:text-white text-sm font-semibold mb-4">
          Policies
        </h3>
        <InputContent title={"Refund policy"} titlestyle={"mb-0"}>
          <TextEditer
            className="mt-4"
            placeholder={"Here we need to have text editor."}
          />
        </InputContent>
        <InputContent title={"Privacy policy"} titlestyle={"mb-0"}>
          <TextEditer
            className="mt-4"
            placeholder={"Here we need to have text editor."}
          />
        </InputContent>
        <InputContent title={"Terms of service"} titlestyle={"mb-0"}>
          <TextEditer
            className="mt-4"
            placeholder={"Here we need to have text editor."}
          />
        </InputContent>
        <InputContent title={"Shipping policy"} titlestyle={"mb-0"}>
          <TextEditer
            className="my-4"
            placeholder={"Here we need to have text editor."}
          />
        </InputContent>
        <InputContent title={"Contact information"} titlestyle={"mb-0"}>
          <TextEditer
            className="mt-4"
            placeholder={"Here we need to have text editor."}
          />
        </InputContent>
        <SetupUpdate
          className={"!item-start"}
          color={"primarypurple"}
          title={"Get help writing your policies."}
          description={
            "Read our detailed piece on how to write your store’s policies."
          }
        >
          <Button
            color="lightgrey"
            name={"Details"}
            className={"whitespace-nowrap hover:bg-lightgrey-hover"}
            secondary={"true"}
          />
        </SetupUpdate>
      </div>
    </Layout>
  );
};

export default Policies;
