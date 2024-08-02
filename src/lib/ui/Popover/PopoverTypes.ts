import type { ReactNode, RefObject } from "react";

export interface PopoverProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  withClickOutside?: boolean;
  anchorRef: RefObject<HTMLElement>;
}
