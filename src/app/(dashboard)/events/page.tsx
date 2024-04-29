import DataGridTable from "@/components/ui/DataGridTable";
import Topbar from "@/components/ui/Topbar";
import React, { Suspense } from "react";
import CreateEventForm from "@/components/Forms/CreateEventForm";
import { DataTable } from "./dataTable";

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
        <div className="px-4 lg:px-[3.5rem] pt-8">
          <DataGridTable searchLabel="Search Events">
            <DataTable />
          </DataGridTable>
        </div>
      </Suspense>
    </>
  );
}

export default page;
