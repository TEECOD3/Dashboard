"use client";
import { Chevrodown } from "@/components/custom_icons/Chevrondown";
import React from "react";
import ReactApexChart from "react-apexcharts";

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
interface TGraphsProps {}

export const Graph: React.FC<TGraphsProps> = () => {
  const option = {
    chart: {
      id: "apexchart-example",
      stroke: {
        curve: "straight",
        width: 0.4,
      },
    },
  };

  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  return (
    <div className="bg-white p-6 h-[350px] w-full shadow-lg rounded-lg">
      <div className="flex gap-x-2 items-center text-base font-semibold capitalize">
        <span className="text-space-cadet">attendance trend per time</span>
        <div className="flex items-center">
          <span className="text-main-blue space-x-2">this week</span>
          <Chevrodown />
        </div>
      </div>

      <div>
        <ApexChart
          type="area"
          options={option}
          series={series}
          height={300}
          width={700}
        />
      </div>
    </div>
  );
};
