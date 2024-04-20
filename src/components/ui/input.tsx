import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-auto w-full rounded-md border border-main-blue bg-white px-3 py-2 text-sm ring-offset-main-blue file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-space-cadet/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-main-blue focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:border-main-blue dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-space-cadet/50 dark:focus-visible:ring-main-blue",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
