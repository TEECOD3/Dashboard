import React, { Suspense } from "react";
import DefaultPage from "./default";

function page() {
  return (
    <Suspense>
      <DefaultPage />
    </Suspense>
  );
}

export default page;
