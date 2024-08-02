import { Media } from "@/domains/common/components/MediaProvider";
import { Popover, type PopoverProps } from "@/lib/ui/Popover";
import clsx from "clsx";
import { ReaderSettings } from "../ReaderSettings/ReaderSettings";

export const SettingPopover = ({
  className,
  ...props
}: Omit<PopoverProps, "children">) => (
  <Media className={className} greaterThan={"md"}>
    <Popover
      {...props}
      className={clsx(
        "min-w-96",
        "rounded-1.5xl px-6 py-8 cursor-auto",
        "bg-white shadow-800",
        "dark:border dark:border-solid dark:bg-dark-background-secondary dark:border-dark-background-tertiary  dark:shadow-500",
      )}
    >
      <ReaderSettings />
    </Popover>
  </Media>
);
