"use client";

import { Media } from "@/domains/common/components/MediaProvider";
import clsx from "clsx";
import { Backdrop } from "../Backdrop";
import { IconButton } from "../IconButton";
import type { MobileBottomDrawerProps } from "./MobileBottomDrawerTypes";
import CrossIcon from "./close-icon.svg";

export const MobileBottomDrawer = ({
  isOpen,
  onClose,
  children,
  className,
}: MobileBottomDrawerProps) => {
  if (!isOpen) return null;
  return (
    <Media lessThan={"md"}>
      {isOpen && <Backdrop onClose={onClose} />}
      <div
        className={clsx(
          "shadow-drawer",
          "bg-white dark:bg-dark-background-secondary",
          "fixed bottom-0 left-0 w-full max-w-md bg-white shadow-md rounded-t-lg z-20 ",
          "transform transition-transform duration-300 ease-out",
          { "translate-y-0": isOpen, "translate-y-full": !isOpen },
          className,
        )}
      >
        <div className="h-10 flex justify-center items-center">
          <div className="w-10 h-1 bg-gray-400 rounded-full" />
        </div>
        <IconButton
          onClick={onClose}
          className={clsx(
            "rounded-full absolute top-4 right-4",
            "bg-light-icon-outline-medium/10 text-light-label-light-main-text/50",
            "dark:text-dark-icon-secondary dark:bg-dark-background-field-contrast",
          )}
        >
          <CrossIcon />
        </IconButton>
        <div>{children}</div>
      </div>
    </Media>
  );
};
