import Topbar from "@/components/ui/Topbar";
import React, { Suspense } from "react";
import AddUserForm from "@/components/Forms/AddUserForm";
import DefaultPage from "./default";

function page() {
  return (
    <>
      <Topbar
        heading="Users"
        showActionBtn
        actionButtonLabel="Add User"
        overlayTitle="Add User"
      >
        <AddUserForm />
      </Topbar>
      <Suspense>
        <DefaultPage />
      </Suspense>
    </>
  );
}

export default page;
