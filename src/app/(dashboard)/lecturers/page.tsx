import DataGridTable from "@/components/ui/DataGridTable";
import Topbar from "@/components/ui/Topbar";
import React, { Suspense } from "react";
import { DataTable } from "./dataTable";
import AddLecturerForm from "@/components/Forms/AddLecturerForm";

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
        <div className="px-4 lg:px-[3.5rem] pt-8">
          <DataGridTable searchLabel="Search Lecturers">
            <DataTable />
          </DataGridTable>
        </div>
      </Suspense>
    </>
  );
}

export default page;
