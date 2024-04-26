"use client";
import CalenderAddIcon from "@/components/custom_icons/Calenderaddicon";
import MessageEditIcon from "@/components/custom_icons/MessageEdit";
import UserCircleAdd from "@/components/custom_icons/UserCircleadd";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AddUserModal } from "./Modals/addUserModal";
import { CreateBroadcastMessageModal } from "./Modals/createBroadcastMessageModal";
import { CreateEventModal } from "./Modals/createEventModal";

type Props = {};

function QuickActions(props: Props) {
  return (
    <div className="w-full p-6 bg-white shadow-lg h-[350px] rounded-lg">
      <div className="w-full text-center">
        <h3 className="capitalize font-semibold text-space-cadet text-base">
          quick actions
        </h3>
      </div>
      <div className="mt-8 flex-col gap-y-3 flex">
        <AddUserModal>
          <SheetTrigger asChild>
            <ActionWidget
              icon={<UserCircleAdd />}
              actionTitle="Add user"
              onClick={() => {}}
            />
          </SheetTrigger>
        </AddUserModal>

        <CreateBroadcastMessageModal>
          <SheetTrigger asChild>
            <ActionWidget
              icon={<MessageEditIcon />}
              actionTitle="create Broadcast Message"
              onClick={() => {}}
            />
          </SheetTrigger>
        </CreateBroadcastMessageModal>

        <CreateEventModal>
          <SheetTrigger asChild>
            <ActionWidget
              icon={<CalenderAddIcon />}
              actionTitle="create An Event"
              onClick={() => {}}
            />
          </SheetTrigger>
        </CreateEventModal>
      </div>
    </div>
  );
}

export default QuickActions;

type TActionWidget = {
  icon: React.ReactElement;
  actionTitle: string;
  onClick: () => void;
};
function ActionWidget(props: TActionWidget) {
  const { icon, actionTitle, onClick } = props;
  return (
    <div
      className="rounded-lg w-full shadow-lg h-[4.4rem] px-4 py-2.8 ring-pale ring-[1px] hover:shadow-none cursor-pointer transform transition-all duration-200 ease"
      onClick={onClick}
    >
      <div className="flex gap-x-3 items-center text-space-cadet h-full text-[14px] leading-normal capitalize">
        <div>{icon}</div>
        <span>{actionTitle}</span>
      </div>
    </div>
  );
}
