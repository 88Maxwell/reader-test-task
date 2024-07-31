import clsx from "clsx";
import { forwardRef } from "react";
import { ButtonProps } from "./IconButtonTypes";

export const IconButton = forwardRef(
  ({ children, className, ...props }: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => (
    <button ref={ref} type="button" className={clsx("text-inherit", className)} {...props}>
      {children}
    </button>
  ),
);
