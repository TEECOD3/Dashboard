"use client";

import CloseSquareIcon from "@/components/custom_icons/CloseSquareIcon";
import { SortButton } from "@/components/ui/Filters";
import Search from "@/components/ui/search";
import Topbar from "@/components/ui/Topbar";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import BroadcastMessageForm from "@/components/Forms/BroadcastMessageForm";
import Card from "./Card";

const tabs = [
  {
    name: "all",
    no_of_messages: 10,
  },
  {
    name: "reports",
    no_of_messages: 0,
  },
  {
    name: "complaints",
    no_of_messages: 0,
  },
];

function DefaultPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [isViewingMessageDetails, setViewingMessageDetailsState] =
    useState(false);
  return (
    <>
      <Topbar
        heading="Messages"
        showActionBtn
        actionButtonLabel="Send Broadcast"
        overlayTitle="Create Broadcast Message"
      >
        <BroadcastMessageForm />
      </Topbar>
      <div className="flex">
        <div className="px-4 w-full lg:px-[3.5rem] pt-8">
          <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row mb-8 items-center justify-between">
            <Search placeholder="Search Messages" />
            <div className="flex flex-wrap lg:flex-nowrap w-full lg:w-fit items-center gap-3">
              <SortButton label="All Unread" name="status" options={[]} />
              <SortButton label="Sort By" name="sortBy" options={[]} />
            </div>
          </div>
          <div className="mb-6 space-x-4 flex items-center">
            {tabs.map((tab) => (
              <button
                onClick={() => setActiveTab(tab?.name)}
                key={tab?.name}
                className={cn(
                  "text-dark-blue duration-75 transition-all border-b-4 border-transparent space-x-2 pb-4 text-sm capitalize flex items-center",
                  {
                    "border-main-blue": activeTab === tab?.name,
                  }
                )}
              >
                <span>{tab?.name}</span>
                {tab?.no_of_messages > 0 && (
                  <span className="bg-light-main-blue h-[1.1875rem] w-[1.5625rem] grid place-items-center rounded text-white text-[0.625rem] font-bold">
                    {tab?.no_of_messages}
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            {Array(5)
              .fill("")
              .map((d, i) => (
                <Card
                  key={i}
                  clickHandler={() => setViewingMessageDetailsState(true)}
                />
              ))}
          </div>
        </div>
        <div
          className={cn(`overflow-hidden relative duration-75 transition-all`, {
            "bg-white w-full max-w-[24rem] opacity-100":
              isViewingMessageDetails,
            "w-0 opacity-0": !isViewingMessageDetails,
          })}
        >
          <button
            onClick={() => setViewingMessageDetailsState(false)}
            className="absolute top-4 right-4"
          >
            <CloseSquareIcon />
          </button>
          <div className="pt-6 px-4 border-b border-grey-white pb-6">
            <span className="bg-primary-30 mb-3 block w-fit rounded-2xl p-3 border border-primary-30 text-xs text-primary-800">
              Support Request
            </span>
            <h3 className="text-base font-semibold text-primary-900">
              Hi, Please I need help
            </h3>
          </div>
          <div className="flex items-start space-x-3 mt-8 px-4">
            <span className="min-w-[1.5rem] min-h-[1.5rem] rounded-full text-white bg-main-blue grid place-items-center text-[0.625rem] font-bold">
              D
            </span>
            <div>
              <h4 className="text-sm text-primary-900 font-bold mb-2">
                Dele Chukwudele
              </h4>
              <h6 className="text-[0.625rem] text-grey-black mb-5">
                Thu, 6 Jul, 13:35
              </h6>
              <p className="text-sm text-gray-black">
                🎓 Graduation is approaching, and I&apos;m feeling nervous about
                the future. Can you share some insights from your
                post-graduation experiences? 🎉🎓
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DefaultPage;
