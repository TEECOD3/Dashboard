import DataGridTable from "@/components/ui/DataGridTable";
import Topbar from "@/components/ui/Topbar";
import React from "react";
import { DataTable } from "./dataTable";

function page() {
  return (
    <>
      <Topbar heading="Courses" />
      <div className="px-4 lg:px-[3.5rem] pt-8">
        <DataGridTable searchLabel="Search Courses">
          <DataTable />
        </DataGridTable>
      </div>
    </>
  );
}

export default page;
