import Topbar from "@/components/ui/Topbar";
import React, { Suspense } from "react";
import DefaultPage from "./default";

function page() {
  return (
    <>
      <Topbar heading="Students" />
      <Suspense>
        <DefaultPage />
      </Suspense>
    </>
  );
}

export default page;
