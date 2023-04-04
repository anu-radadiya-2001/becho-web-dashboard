import React, { useState } from "react";
import Button from "@/components/ui/Button";
import SetupUpdate from "@/components/ui/SetupUpdate";
import Layout from "@/layouts/layout";
import UnsavedChanges from "@/components/ui/UnsavedChanges";

const SeoSettings = () => {
  const [text, setTest] = useState("The title of your store’s homepage");
  const [searchResults, setSearchResults] = useState(
    "Used in meta data and search results"
  );

  const handleHomePage = (event) => {
    setTest(event.target.value);
  };
  const handleSearchResults = (event) => {
    setSearchResults(event.target.value);
  };

  return (
    <Layout container>
     
      <div className="bg-primary-light dark:bg-white/5 rounded-2xl p-4 md:p-6">
        <h3 className="text-blacklight dark:text-white text-sm font-semibold mb-4">
          Store SEO settings
        </h3>
        <div className="px-5 py-4 bg-white dark:bg-black/40 rounded-2xl mb-4 border border-black/10 dark:border-white/10 max-w-[520px] w-full">
          <lable className="text-black/40 dark:text-white/40 text-xs leading-[18px] pb-1">
            Page title: <span className="font-bold">70</span> characters
            recommended. You've used{" "}
            <span className="text-primary-greenb font-bold">{text.length}</span>
          </lable>
          <input
            onChange={handleHomePage}
            type="text"
            name=""
            defaultValue={text}
            className="text-blacklight dark:bg-transparent dark:text-white text-sm w-full	outline-none"
          />
        </div>
        <div className="px-5 py-4 bg-white dark:bg-black/40 rounded-2xl mb-4 border border-black/10 dark:border-white/10 max-w-[520px] w-full">
          <lable className="text-black/40 dark:text-white/40 text-xs leading-[18px] pb-1">
            Meta description: <span className="font-bold">156</span> characters
            recommended. You've used{" "}
            <span className="text-primary-greenb font-bold">
              {searchResults.length}
            </span>
          </lable>
          <input
            onChange={handleSearchResults}
            type="text"
            name=""
            defaultValue={searchResults}
            className="dark:bg-transparent text-blacklight dark:text-white text-sm w-full	outline-none"
          />
        </div>
        <SetupUpdate
          className={"!item-start"}
          color={"primarypurple"}
          title={"Get help in writing the SEO title & description"}
          description={
            "Read our detailed piece on how to write the perfect SEO title & description for your store."
          }
        >
          <Button
            color="lightgrey"
            name={"Details"}
            className={"whitespace-nowrap"}
            secondary={"true"}
          />
        </SetupUpdate>
      </div>
    </Layout>
  );
};

export default SeoSettings;
