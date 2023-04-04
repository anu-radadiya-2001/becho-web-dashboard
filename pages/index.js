import React, { useState } from "react";
import Head from "next/head";
import DashboardContent from "@/components/dashboard/DashboardContent";
import SetupGuide from "@/components/dashboard/SetupGuide";
import SellerCommunity from "@/components/dashboard/SellerCommunity";
import PopupStyle from "@/components/ui/PopupStyle";
import Star from "@/assets/images/icon/Star.svg";
import Layout from "@/layouts/layout";

export default function Dashboard() {
  const [openDashboard, setOpenDashboard] = useState(false);
  return (
    <>
      <Head>
        <title>Becho</title>
        <meta name="description" content="Becho dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PopupStyle
        icon={Star}
        color={"green"}
        title={"5 Tips to increase your orders and customers"}
        description={"Learn how to set up your business online step by step and sell effectively."}
        className={"w-full max-w-[280px] mx-auto"}
      />

      <Layout container>
        {openDashboard ? <DashboardContent /> : <SetupGuide setOpenDashboard={setOpenDashboard} />}
        <SellerCommunity />
      </Layout>
    </>
  );
}
