"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { CircleChevronRight } from "lucide-react";
import Link from "next/link";

type Props = {};

function EventsBoard(props: Props) {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="bg-white w-full shadow-lg rounded-lg divide-x-2 flex h-[380px] ">
      <div className="p-6 h-full ">
        <div className="w-full h-full  ">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      </div>
      <div className="p-6 flex-1">
        <div className="w-full flex justify-between items-center">
          <div className="capitalize flex gap-x-6 items-center">
            <span className="text-2xl font-semibold text-space-cadet">
              1 june 2023
            </span>
            <span className="text-base font-semibold text-space-cadet/55">
              upcoming Events
            </span>
          </div>
          <Link href="/events" className="flex items-center gap-x-1">
            <span className="text-[12px] text-main-blue  font-semibold capitalize cursor-pointer">
              see more
            </span>
            <CircleChevronRight size={12} />
          </Link>
        </div>
        <div className="flex flex-col gap-y-4 mt-6">
          <EventWidget />
          <EventWidget />
          <EventWidget />
        </div>
      </div>
    </div>
  );
}

export default EventsBoard;

type TEventWidgetProps = {};

function EventWidget(props: TEventWidgetProps) {
  return (
    <div className="p-4 bg-white w-full shadow-lg rounded-lg h-[4.4rem] ring-[1px] ring-pale text-space-cadet">
      <div className="flex justify-between  items-center">
        <div className="flex flex-col gap-y-2">
          <span className="text-[8px] uppercase">assignments</span>
          <span className="text-[12px] capitalize">
            this is an assignment for you
          </span>
        </div>
        <span className="text-[10px] capitalize">12th may 2013</span>
      </div>
    </div>
  );
}
