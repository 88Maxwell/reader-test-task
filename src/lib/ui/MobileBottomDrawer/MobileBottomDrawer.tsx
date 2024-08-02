"use client";

import clsx from "clsx";
import { Backdrop } from "../Backdrop";
import { MobileBottomDrawerProps } from "./MobileBottomDrawerTypes";
import { IconButton } from "../IconButton";
import CrossIcon from "./close-icon.svg";

export const MobileBottomDrawer = ({
  isOpen,
  onClose,
  children,
  className,
}: MobileBottomDrawerProps) => {
  if (!isOpen) return null;
  return (
    <>
      {isOpen && <Backdrop onClose={onClose} />}
      <div
        className={clsx(
          "fixed bottom-0 left-0 w-full max-w-md bg-white shadow-md rounded-t-lg z-20 ",
          "transform transition-transform duration-300 ease-out",
          { "translate-y-0": isOpen, "translate-y-full": !isOpen },
          "bg-white dark:bg-dark-background-secondary",
          className,
        )}
      >
        <div className="h-10 flex justify-center items-center">
          <div className="w-10 h-1 bg-gray-400 rounded-full" />
        </div>
        <IconButton
          className={clsx(
            "rounded-full absolute top-4 right-4",
            "bg-light-icon-outline-medium text-light-label-light-main-text",
            "dark:bg-dark-icon-primary dark:text-dark-background-field-contrast",
          )}
        >
          <CrossIcon />
        </IconButton>
        {children}
      </div>
    </>
  );
};
