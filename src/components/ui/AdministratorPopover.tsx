import { LogOutIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { ReactNode } from "react";

type TAdminnistratorPopOverProps = {
  children: ReactNode;
  onLogout: () => void;
};
export default function AdministratorPopOver(
  props: TAdminnistratorPopOverProps
) {
  const { children, onLogout } = props;
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-56" side="top">
        <div className="flex gap-x-4 mt-3 cursor-pointer" onClick={onLogout}>
          <LogOutIcon color="#0294E2" />
          <p className="text-[0.75rem] text-space-cadet">Log Out</p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
