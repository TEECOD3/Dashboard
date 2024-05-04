import MoreIcon from "@/components/custom_icons/MoreIcon";
import React from "react";

const Card = ({ clickHandler }: { clickHandler: () => void }) => {
  return (
    <div
      onClick={clickHandler}
      className="transition-all duration-75 bg-white cursor-pointer border p-4"
    >
      <div className="mb-4 flex items-start justify-between">
        <span className="bg-primary-30 rounded-[0.25rem] px-2 py-1 text-xs text-primary-800">
          Report
        </span>

        <button>
          <MoreIcon />
        </button>
      </div>
      <span className="block mb-3">
        <h3 className="text-sm font-semibold text-dark-blue mb-2">
          Hi, Please I need help
        </h3>
        <p className="text-sm text-gray-black">
          🎓 Graduation is approaching, and I&apos;m feeling nervous about the
          future. Can you share some insights from your post-graduation
          experiences? 🎉🎓
        </p>
      </span>
      <span className="flex space-x-1 items-center text-xs text-grey-black opacity-50">
        Time
      </span>
    </div>
  );
};

export default Card;
