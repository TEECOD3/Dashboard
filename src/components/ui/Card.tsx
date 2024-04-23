import { ChevronRight } from "lucide-react";
import React from "react";
import MoreIcon from "../custom_icons/MoreIcon";

const Card = () => {
  return (
    <div className="bg-white border p-4">
      <div className="mb-3 flex items-start justify-between">
        <span className="flex items-center space-x-2">
          <span className="border border-main-blue rounded-[0.25rem] px-2 py-1 text-xs text-main-blue">
            Male
          </span>
          <span className="border border-umber rounded-[0.25rem] px-2 py-1 text-xs text-umber">
            100 Level
          </span>
        </span>
        <button>
          <MoreIcon />
        </button>
      </div>
      <span className="block mb-3">
        <h3 className="text-sm font-semibold text-dark-blue mb-2">
          Dele Ademola
        </h3>
        <h4 className="text-xs text-dark-blue">0120304060</h4>
      </span>
      <span className="flex space-x-1 items-center text-xs text-dark-blue">
        <span>Faculty of Arts</span>
        <ChevronRight className="w-3 h-3" />
        <span>Department of Music</span>
      </span>
    </div>
  );
};

export default Card;
