import clsx from "clsx";
import { ButtonProps } from "./ButtonTypes";

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={clsx("", className)} {...props}>
      {children}
    </button>
  );
};
