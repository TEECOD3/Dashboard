import Topbar from "@/components/ui/Topbar";
import React, { Suspense } from "react";
import CreateEventForm from "@/components/Forms/CreateEventForm";
import DefaultPage from "./default";

function page() {
  return (
    <>
      <Topbar
        heading="Events"
        showActionBtn
        actionButtonLabel="Create Event"
        overlayTitle="Create Event"
      >
        <CreateEventForm />
      </Topbar>
      <Suspense>
        <DefaultPage />
      </Suspense>
    </>
  );
}

export default page;
