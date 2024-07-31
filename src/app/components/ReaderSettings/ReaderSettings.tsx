import { Divider } from "@/lib/ui/Divider";
import { Switch } from "@/lib/ui/Switch";
import { Slider } from "@/lib/ui/Slider";
import CommentsIcon from "./assets/icons/comments_icon.svg";
import FontsIcon from "./assets/icons/fonts-icon.svg";
import TextIcon from "./assets/icons/text-icon.svg";
import ThemeIcon from "./assets/icons/theme-icon.svg";
import WidthOfFieldsIcon from "./assets/icons/width-of-fields-icon.svg";
import { SettingRecordField } from "../SettingRecordField/SettingRecordField";

/* <div className="flex flex-row justify-between text-light-gray-600 dark:text-white"> */

export function ReaderSettings() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-[88px_1fr] items-center justify-center gap-8">
        <SettingRecordField icon={<CommentsIcon />} title="Коментарі до абзаців" />
        <Slider />
        <SettingRecordField icon={<FontsIcon />} title="Розмір тексту" />
        <Slider />
        <SettingRecordField icon={<TextIcon />} title="Ширина полів" />
        <Slider />
        <SettingRecordField icon={<ThemeIcon />} title="Колір теми" />
        <Slider />
        <SettingRecordField icon={<WidthOfFieldsIcon />} title="Шрифт" />
        <Slider />
      </div>
      <Divider />
      <div className="flex flex-row justify-between">
        <span>Перенос тексту</span>
        <Switch />
      </div>
      <Divider />
      <div className="flex flex-row justify-between">
        <span>Книжний режим прочитання</span>
        <Switch />
      </div>
    </div>
  );
}
