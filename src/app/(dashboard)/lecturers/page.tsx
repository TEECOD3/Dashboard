import DataGridTable from "@/components/ui/DataGridTable";
import Topbar from "@/components/ui/Topbar";
import React from "react";
import { DataTable } from "./dataTable";

function page() {
  return (
    <>
      <Topbar
        heading="Lecturers"
        showActionBtn
        actionButtonLabel="Add Lecturer"
      />
      <div className="px-4 lg:px-[3.5rem] pt-8">
        <DataGridTable searchLabel="Search Lecturers">
          <DataTable />
        </DataGridTable>
      </div>
    </>
  );
}

export default page;
