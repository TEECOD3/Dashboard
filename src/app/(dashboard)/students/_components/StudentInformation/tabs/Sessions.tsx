import MoreIcon from "@/components/custom_icons/MoreIcon";
import { Dot } from "lucide-react";

const SessionCard = () => {
  return (
    <div className="flex items-start justify-between bg-cultured p-4">
      <div>
        <h3 className="text-sm font-semibold mb-2 text-black leading-[1.1025rem] -tracking-[0.3px]">
          iOS Device
        </h3>
        <h6 className="text-xs text-black mb-1">Current Session</h6>
        <span className="flex mb-6 space-x-1 items-center text-xs text-dark-blue">
          <span>Lagos, Nigeria</span>
          <Dot />
          <span>3 days ago</span>
        </span>
        <span className="block text-xs leading-[0.75rem] text-red-400">
          Unlink Device
        </span>
      </div>
      <button className="text-grey-white">
        <MoreIcon />
      </button>
    </div>
  );
};

const Sessions = () => {
  return (
    <div>
      <h4 className="text-xs font-semibold text-space-cadet pb-4 px-2 border-b border-black/20 mb-4">
        Session Information
      </h4>
      <div className="space-y-4">
        <SessionCard />
      </div>
    </div>
  );
};

export default Sessions;
