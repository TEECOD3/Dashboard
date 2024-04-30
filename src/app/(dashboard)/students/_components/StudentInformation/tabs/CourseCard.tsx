import MoreIcon from "@/components/custom_icons/MoreIcon";
import { ChevronRight } from "lucide-react";

const CourseCard = () => {
  return (
    <div className="flex items-start justify-between border border-grey-white p-4">
      <div>
        <h3 className="text-sm font-semibold mb-2 text-black leading-[1.1025rem] -tracking-[0.3px]">
          Intro to Course
        </h3>
        <h6 className="text-xs text-black mb-2">Course 101</h6>
        <span className="flex space-x-1 items-center text-xs text-dark-blue">
          <span>Faculty of Arts</span>
          <ChevronRight className="w-3 h-3" />
          <span>Department of Music</span>
        </span>
      </div>
      <button className="text-grey-white">
        <MoreIcon />
      </button>
    </div>
  );
};

export default CourseCard;
