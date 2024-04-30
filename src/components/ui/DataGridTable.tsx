"use client";
import { departments, faculties, levels } from "@/lib/static-modal-data";
import { cn } from "@/lib/utils";
import React, { Children, useState } from "react";
import CategoryIcon from "../custom_icons/CategoryIcon";
import RowIcon from "../custom_icons/RowIcon";
import SquareArrowLeftIcon from "../custom_icons/SquareArrowLeftIcon";
import SquareArrowRightIcon from "../custom_icons/SquareArrowRightIcon";
import { SortButton, SortButtonWithGroupedData } from "./Filters";
import Search from "./search";

interface DataGridTableProps {
  renderGrid: (item: any, index: number) => React.ReactNode;
  data: any[];
  children: React.ReactNode;
  searchLabel: string;
}

const DataGridTable = ({
  children,
  searchLabel,
  data,
  renderGrid,
}: DataGridTableProps) => {
  const [view, setView] = useState<"grid" | "table">("table");
  return (
    <div>
      <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row mb-8 items-center justify-between">
        <Search placeholder={searchLabel} />
        <div className="flex flex-wrap lg:flex-nowrap w-full lg:w-fit items-center gap-3">
          <SortButton label="All Levels" name="level" options={levels} />
          <SortButton
            popOverContentClassName="!min-w-[9.9375rem]"
            label="All Faculties"
            name="faculty"
            options={faculties}
          />
          <SortButtonWithGroupedData
            popOverContentClassName="!min-w-[9.9375rem]"
            label="All Departments"
            name="department"
            options={departments}
          />
          <SortButton
            label="Sort By"
            name="sortBy"
            options={["name", "date"]}
          />
        </div>
      </div>
      <div className="flex items-center justify-between mb-[1.25rem]">
        <span className="flex space-x-2 items-center">
          <button
            onClick={() => setView("table")}
            className={cn("p-2 rounded-[0.625rem]", {
              "border-main-blue border": view === "table",
            })}
          >
            <RowIcon />
          </button>
          <button
            onClick={() => setView("grid")}
            className={cn("p-2 rounded-[0.625rem]", {
              "border-main-blue border": view === "grid",
            })}
          >
            <CategoryIcon />
          </button>
        </span>
        <div className="flex items-center space-x-[0.625rem]">
          <span className="text-dark-blue font-semibold text-xs">
            <span className="text-main-blue">1-50</span> of 15000
          </span>
          <span className="flex items-center space-x-[0.625rem]">
            <button>
              <SquareArrowLeftIcon />
            </button>
            <button>
              <SquareArrowRightIcon />
            </button>
          </span>
        </div>
      </div>
      <div>
        {view === "table" ? (
          children
        ) : (
          <div className="grid gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
            {Children.toArray(
              data?.map((item: ReturnType<(typeof data)[0]>, index) =>
                renderGrid(item, index)
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DataGridTable;
