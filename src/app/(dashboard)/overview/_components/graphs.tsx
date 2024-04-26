"use client";
import { Chevrodown } from "@/components/custom_icons/Chevrondown";
import React from "react";
import ReactApexChart from "react-apexcharts";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
interface TGraphsProps {}

export const Graph: React.FC<TGraphsProps> = () => {
  const option: ApexOptions = {
    chart: {
      id: "apexchart-example",
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    // tooltip: {
    //   enabled: false,
    // },
    grid: {
      show: false,
    },
    xaxis: {
      type: "category",
      categories: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      max: 100,
      min: 0,
      stepSize: 25,
    },
    stroke: {
      width: 2,
      curve: "straight",
    },
    colors: ["#C9FCBE73", "#FFFFFF80"],
  };

  const series = [
    {
      name: "Student A",
      data: [10, 40, 0, 51, 45, 100, 0],
    },
    {
      name: "Student B",
      data: [0, 32, 59, 15, 34, 52, 41],
    },
  ];

  return (
    <div className="bg-white pt-6 h-[350px] w-full shadow-lg rounded-lg">
      <div className="flex gap-x-2 px-6 items-center text-base font-semibold capitalize">
        <span className="text-space-cadet">attendance trend per time</span>
        <div className="flex items-center">
          <span className="text-main-blue space-x-2">this week</span>
          <Chevrodown />
        </div>
      </div>

      <div className="max-w-full pr-4 pb-6 w-full h-auto relative">
        <ApexChart
          type="area"
          options={option}
          series={series}
          height={300}
          width={"100%"}
        />
      </div>
    </div>
  );
};
