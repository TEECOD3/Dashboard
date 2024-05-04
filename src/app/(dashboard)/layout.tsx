import Sidebar from "@/components/ui/Sidebar";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="lg:grid h-dvh overflow-hidden bg-alice-blue lg:grid-cols-[18rem,1fr]">
      <Sidebar />
      <main className="relative overflow-auto h-dvh pb-6">{children}</main>
    </div>
  );
}

export default layout;
