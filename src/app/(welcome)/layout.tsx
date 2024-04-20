import React from "react";
import Image from "next/image";

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <main className="w-full min-h-dvh bg-gradient-to-tr py-[5rem] px-4 lg:px-0 lg:py-[12.1875rem] to-button-blue flex items-center justify-center flex-col from-midnight-blue">
      <Image
        priority
        src="/logo.png"
        width={77}
        height={79.53}
        alt="Logo"
        className="drop-shadow-3d block"
      />
      {children}
    </main>
  );
}

export default layout;
