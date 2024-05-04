import { ChevronRight } from "lucide-react";
import React from "react";
import MoreIcon from "@/components/custom_icons/MoreIcon";

export interface CardProps {
  id: string;
  type: string;
  date: string;
  name: string;
  location: string;
  faculty: string;
  department: string;
  className?: string;
}

const Card = ({ className = "", ...data }: CardProps) => {
  return (
    <div className={`bg-white border p-4 ${className}`}>
      <div className="mb-3 flex items-start justify-between">
        <span className="flex items-center space-x-2">
          <span className="border border-main-blue rounded-[0.25rem] px-2 py-1 text-xs text-main-blue">
            {data?.type}
          </span>
          <span className="border border-umber rounded-[0.25rem] px-2 py-1 text-xs text-umber">
            {data?.date}
          </span>
        </span>
        <button className="text-grey-black">
          <MoreIcon />
        </button>
      </div>
      <span className="block mb-3">
        <h3 className="text-sm font-semibold text-dark-blue mb-2">
          {data?.name}
        </h3>
        <h4 className="text-xs text-dark-blue">{data?.location}</h4>
      </span>
      <span className="flex space-x-1 items-center text-xs text-dark-blue">
        <span>{data?.faculty}</span>
        <ChevronRight className="w-3 h-3" />
        <span>{data?.department}</span>
      </span>
    </div>
  );
};

export default Card;
