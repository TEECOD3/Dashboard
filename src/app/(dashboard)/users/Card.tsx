import { ChevronRight } from "lucide-react";
import React from "react";
import MoreIcon from "@/components/custom_icons/MoreIcon";

export interface CardProps {
  id: string;
  gender: string;
  level: number;
  first_name: string;
  last_name: string;
  mat_no: string;
  faculty: string;
  department: string;
  className?: string;
  onClick?: () => void;
}

const Card = ({ className = "", ...data }: CardProps) => {
  return (
    <div className={`bg-white border p-4 ${className}`}>
      <div className="mb-3 flex items-start justify-between">
        <span className="flex items-center space-x-2">
          <span className="border border-main-blue rounded-[0.25rem] px-2 py-1 text-xs text-main-blue">
            {data?.gender}
          </span>
          <span className="border border-umber rounded-[0.25rem] px-2 py-1 text-xs text-umber">
            {data?.level} Level
          </span>
        </span>
        <button className="text-grey-black">
          <MoreIcon />
        </button>
      </div>
      <span className="block mb-3">
        <h3 className="text-sm font-semibold text-dark-blue mb-2">
          {data?.first_name} {data?.last_name}
        </h3>
        <h4 className="text-xs text-dark-blue">{data?.mat_no}</h4>
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
