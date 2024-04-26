import Topbar from "@/components/ui/Topbar";
import React from "react";
import QuickActions from "./_components/quickActions";
import EventsBoard from "./_components/EventsBoard";
import { StatusBoard } from "./_components/statusBoard";
import { Graph } from "./_components/graphs";

function page() {
  return (
    <>
      <Topbar heading="Overview" onOverviewPage />

      <div className="w-[90%] mt-10 h-[90%] m-auto pb-10">
        <StatusBoard />
        <div className="flex gap-x-8 mt-10">
          <div className="w-[65%]">
            <Graph />
          </div>
          <div className="flex-1">
            <QuickActions />
          </div>
        </div>

        <div className="my-8 w-full">
          <EventsBoard />
        </div>
      </div>
    </>
  );
}

export default page;
