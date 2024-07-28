import clsx from "clsx";
import { ButtonProps } from "./IconButtonTypes";

export const IconButton = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={clsx("text-inherit", className)} {...props}>
      {children}
    </button>
  );
};
