"use client";

import React from "react";
import CircleAddIcon from "../custom_icons/CircleAddIcon";
import NotificationIcon from "../custom_icons/NotificationIcon";
import { Overlay } from "./overlay";

interface Props {
  heading: string;
  onOverviewPage?: boolean;
  showActionBtn?: boolean;
  actionButtonLabel?: string;
  action?: () => void;
  overlayTitle?: string;
}

const Topbar = ({
  heading,
  onOverviewPage,
  action,
  showActionBtn = false,
  actionButtonLabel,
  overlayTitle,
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
            <></>
          </Overlay>
        )}
        <NotificationIcon />
      </span>
    </header>
  );
};

export default Topbar;
