"use client";
import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Toaster } from "@/components/ui/sonner";
import Image from "next/image";

function DeviceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <BrowserView>
        <main>{children}</main>
        <Toaster />
      </BrowserView>
      <MobileView>
        <div className="h-dvh grid place-items-center place-content-center text-center">
          <span className="block h-[5rem] w-[5rem] drop-shadow-3d mb-8">
            <Image
              priority
              src="/logo.png"
              width={77}
              height={79.53}
              alt="Logo"
            />
          </span>
          <p className="text-base text-space-cadet">
            This site can only be accessed via desktop. Kindly log in using your
            work computer
          </p>
        </div>
      </MobileView>
    </div>
  );
}

export default DeviceLayout;
