import Image from "next/image";
import React from "react";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full min-h-dvh bg-gradient-to-tr py-[5rem] px-4 lg:px-0 lg:py-[8rem] to-button-blue flex items-center justify-center flex-col from-midnight-blue">
      <span className="block h-[5rem] w-[5rem] drop-shadow-3d">
        <Image priority src="/logo.png" width={77} height={79.53} alt="Logo" />
      </span>
      {children}
    </main>
  );
}

export default layout;
