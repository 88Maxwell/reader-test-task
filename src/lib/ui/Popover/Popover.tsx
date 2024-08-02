import { useClickOutside } from "@/lib/hooks/useClickOutside";
import { useRef } from "react";
import type { PopoverProps } from "./PopoverTypes";

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
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};
