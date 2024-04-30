"use client";

import React from "react";
import CircleAddIcon from "../custom_icons/CircleAddIcon";
import NotificationIcon from "../custom_icons/NotificationIcon";
import { Overlay } from "./overlay";
import NotificationBing from "../custom_icons/NotificationBing";

interface Props {
  heading: string;
  onOverviewPage?: boolean;
  showActionBtn?: boolean;
  actionButtonLabel?: string;
  action?: () => void;
  overlayTitle?: string;
  children?: React.ReactNode;
}

const Topbar = ({
  heading,
  onOverviewPage,
  action,
  showActionBtn = false,
  actionButtonLabel,
  overlayTitle,
  children,
}: Props) => {
  return (
    <header
      className={`flex items-center sticky top-0 z-50 justify-between ${
        !showActionBtn ? "py-[1.6rem]" : "py-[1.265rem]"
      } px-[1rem] lg:px-[3.5rem] bg-white`}
    >
      <span className="flex items-end space-x-4">
        <span className="text-xl lg:text-2xl font-semibold text-space-cadet">
          {heading}
        </span>
        {onOverviewPage ? (
          <span className="text-grey-black text-sm mb-1">
            2023/2024 Session
          </span>
        ) : (
          <></>
        )}
      </span>
      <span className="flex items-center space-x-6">
        {showActionBtn && (
          <Overlay
            title={overlayTitle || ""}
            triggerComponent={
              <button
                title={actionButtonLabel}
                onClick={() => {
                  if (action) action();
                }}
                className="flex text-white text-sm font-semibold items-center bg-main-blue/90 hover:bg-main-blue duration-75 transition-colors rounded-[0.625rem] py-3 px-4 space-x-[0.625rem]"
              >
                <CircleAddIcon />
                <span className="hidden lg:inline-block">
                  {actionButtonLabel}
                </span>
              </button>
            }
          >
            {children ? children : <></>}
          </Overlay>
        )}

        <Overlay
          title="Notification"
          triggerComponent={
            <div className="cursor-pointer">
              <NotificationIcon />
            </div>
          }
        >
          <div className="h-full w-full p-2">
            <Notifications />
          </div>
        </Overlay>
      </span>
    </header>
  );
};

export default Topbar;

function Notifications() {
  return (
    <div className="">
      <div className="">
        <p className="capitalize font-semibold text-[14px]">today</p>

        <div className="mt-8 space-y-5">
          {[1, 2, 3, 4].map((notification, notificationIdx) => (
            <NotificationWidget
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo repellendus tempore "
              time="9th june 2023"
              key={notificationIdx}
            />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <p className="capitalize font-semibold text-[14px]">yesterday</p>

        <div className="mt-8 space-y-5">
          {[1, 2, 3, 4].map((notification, notificationIdx) => (
            <NotificationWidget
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo repellendus tempore "
              time="9th june 2023"
              key={notificationIdx}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type TNotificationWidgetProps = {
  time: string;
  title: string;
};

function NotificationWidget(props: TNotificationWidgetProps) {
  const { time, title } = props;
  return (
    <div>
      <div className="flex items-center justify-center gap-x-3 mb-6">
        <div className=" p-2 rounded-full bg-gray-100 size-8 flex items-center justify-center ">
          <NotificationBing />
        </div>
        <div className="flex flex-col flex-1">
          <p className="text-[12px] line-clamp-1">{title}</p>
          <p className="text-[8px]">{time}</p>
        </div>
      </div>

      <hr />
    </div>
  );
}
