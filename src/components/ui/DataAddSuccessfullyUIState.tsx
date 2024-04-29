import React from "react";
import UserSearchIcon from "../custom_icons/UserSearchIcon";
import { Button } from "./button";

const DataAddSuccessfullyUIState = () => {
  return (
    <div className="mt-[6rem]">
      <UserSearchIcon className="mx-auto w-fit mb-8 block" />
      <span className="block border-b border-grey-white pb-[1.5rem] mb-8">
        <h1 className="max-w-[17.4375rem] text-center mx-auto text-2xl font-semibold text-dark-blue">
          Great, Successfully Created New Event
        </h1>
      </span>
      <p className="text-sm text-grey-black mb-8">
        You have successfully added a new list, you can find them in the Event
        list.
      </p>
      <Button className="!bg-main-blue space-x-[0.625rem] !w-full !py-4 !h-auto !text-white !font-semibold !text-sm">
        Go to Events
      </Button>
    </div>
  );
};

export default DataAddSuccessfullyUIState;
