import { Chevrodown } from "@/components/custom_icons/Chevrondown";
import Image from "next/image";
import React from "react";

export function StatusBoard() {
  return (
    <div className="w-full rounded-xl bg-gradient-to-tl shadow-lg from-button-blue to-midnight-blue flex h-[148px] py-6 px-6">
      <div
        className="flex flex-col justify-between w-[85%] h-full
      "
      >
        <div className="flex gap-x-2 items-center text-[12px] font-semibold capitalize">
          <span className="text-pale">your status:</span>
          <div className="flex items-center">
            <span className="text-white space-x-2">this week</span>
            <Chevrodown />
          </div>
        </div>
        <div className="flex justify-between divide-x-2 divide-pale w-[85%]">
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold text-white align-baseline">05</h3>
            <p className="text-[12px] capitalize text-pale">events created</p>
          </div>
          <div className="">
            <div className="flex flex-col ml-10">
              <h3 className="text-3xl font-bold text-crayola align-baseline">
                05
              </h3>
              <p className="text-[12px] capitalize text-pale">events created</p>
            </div>
          </div>
          <div className="flex flex-col ml-10 ">
            <div className="flex flex-col ml-10">
              <h3 className="text-3xl font-bold text-white align-baseline">
                80%
              </h3>
              <p className="text-[12px] capitalize text-pale">events created</p>
            </div>
          </div>
          <div className="flex flex-col ml-10 ">
            <div className="flex flex-col ml-10">
              <h3 className="text-3xl font-bold text-white align-baseline leading-[32px]">
                80%
              </h3>
              <p className="text-[12px]  capitalize text-pale">
                events created
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Image
          src="/clockImage.svg"
          alt="clock"
          className="mt-7"
          height={250}
          width={200}
          loading="eager"
          priority
        />
      </div>
    </div>
  );
}
