"use client";
import DataGridTable from "@/components/ui/DataGridTable";
import { Overlay } from "@/components/ui/overlay";
import { students } from "@/static_data";
import React, { useState } from "react";
import Card from "./_components/Card";
import StudentInformation from "./_components/StudentInformation";
import { DataTable } from "./dataTable";

function DefaultPage() {
  const [] = useState();
  return (
    <div className="px-4 lg:px-[3.5rem] pt-8">
      <DataGridTable
        data={students}
        renderGrid={(item, index) => (
          <Overlay
            key={index}
            title="Student Information"
            triggerComponent={
              <div>
                <Card className="cursor-pointer" {...item} />
              </div>
            }
          >
            <StudentInformation {...item} />
          </Overlay>
        )}
        searchLabel="Search Students"
      >
        <DataTable />
      </DataGridTable>
    </div>
  );
}

export default DefaultPage;
