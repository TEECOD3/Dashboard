import DataGridTable from "@/components/ui/DataGridTable";
import Topbar from "@/components/ui/Topbar";
import React, { Suspense } from "react";
import { DataTable } from "./dataTable";
import AddUserForm from "@/components/Forms/AddUserForm";

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
        <div className="px-4 lg:px-[3.5rem] pt-8">
          <DataGridTable searchLabel="Search Users">
            <DataTable />
          </DataGridTable>
        </div>
      </Suspense>
    </>
  );
}

export default page;
