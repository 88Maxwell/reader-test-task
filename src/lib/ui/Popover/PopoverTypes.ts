export interface PopoverProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  withClickOutside?: boolean;
  anchorRef: React.RefObject<HTMLElement>;
}
