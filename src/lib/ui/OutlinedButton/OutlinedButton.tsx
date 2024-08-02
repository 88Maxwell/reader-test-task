import clsx from "clsx";
import type { OutlinedButtonProps } from "./OutlinedButtonTypes";

// Better to use Button.variant === "outlined", but in this case good enough
export function OutlinedButton({
  children,
  className,
  ...props
}: OutlinedButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        "border border-solid rounded-lg py-[3px] px-2 text-xs/5 box-border",
        "border-black/20 text-light-label-light-secondary-text",
        "dark:border-[#D1D1D11F] dark:text-light-label-dark-main-text", // TODO: No color variable in design
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
