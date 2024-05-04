import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface OverlayProps {
  title: string;
  triggerComponent: React.ReactNode;
  children: React.ReactNode;
}

export function Overlay({ title, triggerComponent, children }: OverlayProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* <Button variant="outline">Open</Button> */}
        {triggerComponent}
      </SheetTrigger>
      <SheetContent className="p-0">
        <SheetHeader>
          <SheetTitle className="text-sm pt-6 px-4 border-b border-grey-white pb-6">
            {title}
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-full">
          <div className="p-8 pb-24"> {children}</div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
