import Topbar from "@/components/ui/Topbar";
import React, { Suspense } from "react";
import AddLecturerForm from "@/components/Forms/AddLecturerForm";
import DefaultPage from "./default";

function page() {
  return (
    <>
      <Topbar
        heading="Lecturers"
        showActionBtn
        actionButtonLabel="Add Lecturer"
        overlayTitle="Add Lecturer"
      >
        <AddLecturerForm />
      </Topbar>
      <Suspense>
        <DefaultPage />
      </Suspense>
    </>
  );
}

export default page;
