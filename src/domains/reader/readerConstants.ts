import type { Option } from "@/lib/ui/types";
import type { ReaderModes } from "./readerTypes";

export const readerVisibilitySettingsOptions: Option[] = [
  { value: "hide", label: "Приховати" },
  { value: "show", label: "Показувати" },
];

export const readerFontsSettingsOptions: Option[] = [
  { value: "arial", label: "Arial" },
  { value: "roboto", label: "Roboto" },
  { value: "times-new-roman", label: "Times new roman" },
];

export const readerModeOptionsMap: Record<
  ReaderModes,
  Option<string, ReaderModes>
> = {
  leftToRight: { value: "leftToRight", label: "Справа-наліво" },
  topToBottom: { value: "topToBottom", label: "Зверху-вниз" },
};
