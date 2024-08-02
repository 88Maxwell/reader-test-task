import clsx from "clsx";
import { forwardRef } from "react";
import { ButtonProps } from "./IconButtonTypes";

export const IconButton = forwardRef(
  (
    { children, className, disabled, ...props }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) => (
    <button
      ref={ref}
      type="button"
      disabled={disabled}
      className={clsx(
        "text-inherit",
        // { "dark:text-dark-label-disabled": disabled }, // TODO: NO colors for light theme in design.
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);
