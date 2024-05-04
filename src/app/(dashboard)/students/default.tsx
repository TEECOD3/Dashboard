"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import DataGridTable from "@/components/ui/DataGridTable";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Overlay } from "@/components/ui/overlay";
import { students } from "@/lib/static_data";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import React, { useMemo, useState } from "react";
import Card from "./_components/Card";
import StudentInformation from "./_components/StudentInformation";
import { DataTable } from "../../../components/ui/dataTable";

export type Student = {
  id: string;
  gender: string;
  level: number;
  first_name: string;
  last_name: string;
  mat_no: string;
  faculty: string;
  department: string;
};

const data: Student[] = students;

function DefaultPage() {
  const columns: ColumnDef<Student>[] = useMemo(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <div className="grid place-items-center w-[3rem] pr-4">
            <Checkbox
              checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
              }
              onCheckedChange={(value: boolean) =>
                table.toggleAllPageRowsSelected(!!value)
              }
              aria-label="Select all"
            />
          </div>
        ),
        cell: ({ row }) => (
          <div className="grid place-items-center w-[2rem]">
            <Checkbox
              checked={row.getIsSelected()}
              onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
              aria-label="Select row"
            />
          </div>
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "mat_no",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
              className="w-full"
            >
              Mat. Num.
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
        cell: ({ row }) => (
          <div className="capitalize text-center !text-dark-blue">
            {row.getValue("mat_no")}
          </div>
        ),
      },
      {
        accessorKey: "first_name",
        header: "First Name",
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("first_name")}</div>
        ),
      },
      {
        accessorKey: "last_name",
        header: "Last Name",
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("last_name")}</div>
        ),
      },
      {
        accessorKey: "faculty",
        header: "Faculty",
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("faculty")}</div>
        ),
      },
      {
        accessorKey: "department",
        header: "Department",
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("department")}</div>
        ),
      },
      {
        accessorKey: "level",
        header: "Level",
        cell: ({ row }) => (
          <div className="border w-fit border-umber rounded-[0.25rem] px-2 py-1 text-xs text-umber">
            {row.getValue("level")} Level
          </div>
        ),
      },
      {
        accessorKey: "gender",
        header: "Gender",
        cell: ({ row }) => (
          <div className="capitalize w-fit border border-main-blue rounded-[0.25rem] px-2 py-1 text-xs text-main-blue">
            {row.getValue("gender")}
          </div>
        ),
      },
      {
        id: "actions",
        header: "Action",
        enableHiding: false,
        cell: ({ row }) => {
          const student = row.original;

          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Action</DropdownMenuLabel>
                <Overlay
                  title="Student Information"
                  triggerComponent={
                    <div>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger
                          hideIcon
                          className="cursor-pointer hover:bg-main-blue"
                        >
                          View student details
                        </DropdownMenuSubTrigger>
                      </DropdownMenuSub>
                    </div>
                  }
                >
                  <StudentInformation {...student} />
                </Overlay>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      },
    ],
    []
  );

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
        <DataTable data={data} columns={columns} />
      </DataGridTable>
    </div>
  );
}

export default DefaultPage;
