"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import ArrowDownIcon from "../custom_icons/ArrowDownIcon";
import BackDrop from "./backdrop";

interface SortButtonProps {
  name: string;
  defaultValue?: string;
  options: string[];
  label: string;
  popOverContentClassName?: string;
}

export const SortButton = ({
  name,
  label,
  defaultValue = "all",
  options,
  popOverContentClassName = "!min-w-[6.5rem]",
}: SortButtonProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [value, setValue] = useState(defaultValue);
  const [showPopover, setShowPopover] = useState(false);

  const handleSort = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value && value !== "all") {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    replace(`${pathname}?${params.toString()}`);

    setShowPopover(false);
    setTimeout(() => {
      setValue(value);
    }, 100);
  };

  return (
    <>
      <BackDrop showBackdrop={showPopover} />
      <Popover open={showPopover} onOpenChange={setShowPopover}>
        <PopoverTrigger asChild>
          <button className="flex items-center space-x-[0.625rem] capitalize text-dark-blue text-xs bg-white border-pale border p-[0.75rem] rounded-[0.625rem]">
            <span className="text-primary ml-0.5 capitalize">
              {value === "all" ? label : value}
            </span>
            <ArrowDownIcon className="text-main-blue" />
          </button>
        </PopoverTrigger>
        <PopoverContent
          className={`z-50 !p-0 !w-full ${popOverContentClassName}`}
          align="start"
        >
          <h4 className="text-main-blue capitalize text-xs pb-3 pt-5 border-b px-4">
            {label}
          </h4>
          <ul className="w-full text-grey-black text-xs *:w-full">
            {options.map((option, idx) => (
              <li
                key={idx}
                className="py-3 px-4 w-full hover:bg-alice-blue duration-75 transition-colors"
              >
                <button
                  onClick={() => handleSort(option)}
                  className={cn("w-full text-left h-full block", {
                    "text-main-blue": value === option,
                  })}
                >
                  <span className="capitalize">{option}</span>
                </button>
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </>
  );
};
