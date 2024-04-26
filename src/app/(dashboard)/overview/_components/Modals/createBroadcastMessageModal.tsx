import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ReactNode } from "react";
import { CreateBroadcastMessageForm } from "../Forms/createBroadcastMessageForm";

type TCreateBroadcastMessageModalProps = {
  children: ReactNode;
};

export function CreateBroadcastMessageModal(
  props: TCreateBroadcastMessageModalProps
) {
  const { children } = props;
  return (
    <Sheet>
      {children}
      <SheetContent>
        <SheetHeader className="mt-16 capitalize">
          <SheetTitle className="text-space-cadet text-base">
            create broadcast message
          </SheetTitle>
          <hr />
        </SheetHeader>
        <div className="mt-20">
          <CreateBroadcastMessageForm />
        </div>
      </SheetContent>
    </Sheet>
  );
}
