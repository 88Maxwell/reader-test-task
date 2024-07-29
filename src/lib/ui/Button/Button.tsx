import clsx from "clsx";
import { ButtonProps } from "./ButtonTypes";

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button type="button" className={clsx("", className)} {...props}>
      {children}
    </button>
  );
}
