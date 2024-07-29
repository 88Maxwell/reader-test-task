import clsx from "clsx";
import { ButtonProps } from "./IconButtonTypes";

export function IconButton({ children, className, ...props }: ButtonProps) {
  return (
    <button type="button" className={clsx("text-inherit", className)} {...props}>
      {children}
    </button>
  );
}
