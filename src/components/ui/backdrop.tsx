import { cn } from "@/lib/utils";

const BackDrop = ({ showBackdrop }: { showBackdrop: boolean }) => {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full bg-overlay-light z-50 h-svh animate-out fade-out-0 inset-0 invisible",
        {
          " fade-in-0 animate-in block visible": showBackdrop,
        }
      )}
      aria-hidden="true"
    />
  );
};

export default BackDrop;
