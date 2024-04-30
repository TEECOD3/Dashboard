import UserIcon from "@/components/custom_icons/UserIcon";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tabs } from "@radix-ui/react-tabs";
import React from "react";
import { CardProps } from "../Card";
import CourseCard from "./tabs/CourseCard";
import Overview from "./tabs/Overview";
import Sessions from "./tabs/Sessions";

const StudentInformation = ({ ...data }: Partial<CardProps>) => {
  return (
    <div>
      <div className="flex space-x-4 border-b border-grey-white pb-8 items-center">
        <span className="grid place-items-center min-w-[4rem] h-16 w-16 rounded-full bg-cultured">
          <UserIcon className="text-main-blue max-w-full max-h-full w-[2.4rem] h-[2.4rem]" />
        </span>
        <span className="block">
          <h3 className="text-base mb-2 font-semibold text-main-blue -tracking-[0.3px]">
            {data?.name}
          </h3>
          <h6 className="text-xs text-dark-blue opacity-50">{data?.mat_no}</h6>
        </span>
      </div>
      <Tabs defaultValue="overview" className="w-full mt-4">
        <TabsList className="w-full bg-transparent mb-6">
          <TabsTrigger
            className="w-full font-semibold text-xs border-b-2 border-black/20 data-[state=active]:border-black"
            value="overview"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            className="w-full font-semibold text-xs border-b-2 border-black/20 data-[state=active]:border-black"
            value="courses"
          >
            Course List
          </TabsTrigger>
          <TabsTrigger
            className="w-full font-semibold text-xs border-b-2 border-black/20 data-[state=active]:border-black"
            value="sessions"
          >
            Sessions
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Overview />
        </TabsContent>
        <TabsContent value="courses">
          <div className="space-y-4">
            {Array(5)
              .fill("")
              .map((d, i) => (
                <CourseCard key={i} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="sessions">
          <Sessions />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentInformation;
