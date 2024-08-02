import { PropsWithChildren } from "react";

export interface MobileBottomDrawerProps extends PropsWithChildren {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
}
