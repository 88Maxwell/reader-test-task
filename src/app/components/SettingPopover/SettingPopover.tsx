import { Popover, PopoverProps } from "@/lib/ui/Popover";
import clsx from "clsx";
import { ReaderSettings } from "../ReaderSettings/ReaderSettings";

export const SettingPopover = (props: Omit<PopoverProps, "children">) => (
  <Popover {...props}>
    <div
      className={clsx(
        "min-w-96 absolute top-9 -right-7.5 rounded-1.5xl px-6 py-8 border border-solid",
        "dark:bg-[#232323] dark:border-black/70", // TODO: no color in design
      )}
    >
      <ReaderSettings />
    </div>
  </Popover>
);
