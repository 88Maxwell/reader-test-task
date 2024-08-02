import type { BackdropProps } from "./BackdropTypes";

export const Backdrop = ({ onClose }: BackdropProps) => (
  <div
    className="fixed inset-0 pointer-events-none z-1"
    onKeyDown={onClose}
    role="button"
    tabIndex={0}
    aria-label="backdrop"
  />
);
