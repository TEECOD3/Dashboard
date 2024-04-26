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
import { AddUserForm } from "../Forms/addUserForm";

type TaddUserModalProps = {
  children: ReactNode;
};

export function AddUserModal(props: TaddUserModalProps) {
  const { children } = props;
  return (
    <Sheet>
      {children}
      <SheetContent className="!w-[600px]">
        <SheetHeader className="mt-16 capitalize">
          <SheetTitle className="text-space-cadet text-base">
            add user
          </SheetTitle>
          <hr />
        </SheetHeader>
        <div className="mt-20">
          <AddUserForm />
        </div>
      </SheetContent>
    </Sheet>
  );
}
