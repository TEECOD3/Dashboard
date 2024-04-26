"use client";
import { cn } from "@/lib/utils";
import { ChevronDown, CircleX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import BookIcon from "../custom_icons/BookIcon";
import BriefcaseIcon from "../custom_icons/BriefcaseIcon";
import { CalendarIcon } from "../custom_icons/CalendarIcon";
import ClockIcon from "../custom_icons/ClockIcon";
import MessagesIcon from "../custom_icons/MessagesIcon";
import OverviewIcon from "../custom_icons/OverviewIcon";
import UserIcon from "../custom_icons/UserIcon";

const links = [
  {
    href: "/overview",
    name: "Overview",
    icon: <OverviewIcon />,
  },
  {
    href: "/session",
    name: "Session",
    icon: <ClockIcon />,
  },
  {
    href: "/courses",
    name: "Courses",
    icon: <BookIcon />,
  },
  {
    href: "/events",
    name: "Events",
    icon: <CalendarIcon />,
  },
  { header: true, name: "User Management" },
  {
    href: "/lecturers",
    name: "Lecturers",
    icon: <BriefcaseIcon />,
  },
  {
    href: "/students",
    name: "Students",
    icon: <BookIcon />,
  },
  {
    href: "/users",
    name: "Users",
    icon: <UserIcon />,
  },
  {
    href: "/messages",
    name: "Messages",
    icon: <MessagesIcon />,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="bg-white z-50 hidden lg:block fixed lg:relative styled-scrollbar top-0 left-0 border-[0.5px] border-pale overflow-auto h-dvh w-full">
      <div className="flex sticky top-0 bg-white z-10 space-x-3 mb-8 items-center border-b px-[1.5rem] border-pale py-[1.25rem]">
        <CircleX
          role="button"
          className="absolute top-1/2 -translate-y-1/2 right-4 text-charleston w-6 lg:hidden h-6"
        />
        <Image priority src="/logo.png" width={42} height={43} alt="Logo" />
        <span>
          <h2 className="font-bold text-lg text-space-cadet -tracking-tighter leading-tight">
            LASU
          </h2>
          <span className="text-xs leading-[0.945rem] block text-azure">
            App Management
          </span>
        </span>
      </div>
      <ul className="px-[1.5rem]">
        {links?.map((link, index) => (
          <li key={index}>
            {link?.header ? (
              <span className="text-xs text-grey-black block mt-10 mb-[1.5rem] uppercase">
                {link?.name}
              </span>
            ) : (
              <Link
                href={link?.href as string}
                className={cn(
                  "flex space-x-4 text-sm mt-2 text-charleston rounded-[0.5rem] duration-75 hover:bg-gradient-to-tl hover:from-button-blue hover:to-midnight-blue hover:font-semibold hover:text-white items-center p-4",
                  {
                    "text-white font-semibold bg-gradient-to-tl from-button-blue to-midnight-blue":
                      pathname === link?.href,
                  }
                )}
              >
                <span>{link?.icon}</span>
                <span>{link?.name}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
      <div className="flex space-x-3 mb-8 items-center border-t mt-[16rem] px-[1.5rem] border-pale py-[1.25rem]">
        <span className="w-[2.5rem] text-light-main-blue grid place-items-center h-[2.5rem] bg-space-cadet rounded-full">
          <UserIcon />
        </span>
        <div>
          <button className="flex items-center mb-[0.5rem] space-x-[0.5rem]">
            <span className="font-semibold text-space-cadet text-t14">
              Dele Chukwudele
            </span>
            <ChevronDown className="w-[1rem] h-[1rem] text-main-blue" />
          </button>
          <span className="uppercase bg-primary-30 border-primary-200 border rounded-[0.25rem] p-[0.5rem] text-[0.625rem] text-space-cadet">
            Administrator
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
