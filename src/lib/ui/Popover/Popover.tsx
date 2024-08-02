import { useRef } from "react";
import { useClickOutside } from "@/lib/hooks/useClickOutside";
import clsx from "clsx";
import { PopoverProps } from "./PopoverTypes";

export const Popover = ({
  anchorRef,
  className,
  children,
  isOpen,
  onClose,
  withClickOutside = true,
}: PopoverProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(anchorRef, containerRef, () => {
    if (withClickOutside && Boolean(onClose)) onClose();
  });

  if (!isOpen) return null;
  return (
    <div
      ref={containerRef}
      className={clsx("bg-white dark:bg-dark-background-secondary", className)}
    >
      {children}
    </div>
  );
};
