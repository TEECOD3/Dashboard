import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const Overview = () => {
  return (
    <div>
      <div className="grid place-items-center place-content-evenly grid-cols-3 border border-grey-white py-6 px-4 mb-8">
        <span className="text-center border-r block w-full">
          <h3 className="text-2xl font-semibold text-black leading-[1.89rem]">
            10
          </h3>
          <h5 className="text-xs text-black">Courses</h5>
        </span>
        <span className="text-center border-r block w-full">
          <h3 className="text-2xl font-semibold text-black leading-[1.89rem]">
            10
          </h3>
          <h5 className="text-xs text-black">Courses</h5>
        </span>
        <span className="text-center block w-full">
          <h3 className="text-2xl font-semibold text-black leading-[1.89rem]">
            80%
          </h3>
          <h5 className="text-xs text-black">Avg. Atte</h5>
        </span>
      </div>
      <div>
        <h4 className="text-xs font-semibold text-space-cadet pb-4 px-2 border-b border-black/20 mb-4">
          Student Information
        </h4>
        <div className="space-y-6">
          <span className="block">
            <Label
              htmlFor="first_name"
              className="font-semibold block mb-2 text-space-cadet text-xs leading-[-0.3px]"
            >
              First Name
            </Label>
            <Input
              className="!py-[1.1875rem] !h-auto !px-4 bg-cultured disabled:opacity-100 !text-space-cadet !text-sm !border-grey-white !rounded-[0.3125rem]"
              id="first_name"
              disabled
              value="Emmanuel"
            />
          </span>
          <span className="block">
            <Label
              htmlFor="last_name"
              className="font-semibold block mb-2 text-space-cadet text-xs leading-[-0.3px]"
            >
              Last Name
            </Label>
            <Input
              className="!py-[1.1875rem] !h-auto !px-4 bg-cultured disabled:opacity-100 !text-space-cadet !text-sm !border-grey-white !rounded-[0.3125rem]"
              id="last_name"
              disabled
              value="Ademola"
            />
          </span>
          <span className="block">
            <Label
              htmlFor="email"
              className="font-semibold block mb-2 text-space-cadet text-xs leading-[-0.3px]"
            >
              Student mail
            </Label>
            <Input
              className="!py-[1.1875rem] !h-auto !px-4 bg-cultured disabled:opacity-100 !text-space-cadet !text-sm !border-grey-white !rounded-[0.3125rem]"
              id="email"
              disabled
              value="a.keating@lasu.edu.ng"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
