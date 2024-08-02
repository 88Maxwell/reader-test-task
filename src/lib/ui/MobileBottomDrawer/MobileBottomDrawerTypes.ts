import type { PropsWithChildren, ReactNode } from "react";

export interface MobileBottomDrawerProps extends PropsWithChildren {
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode;
  className?: string;
}
