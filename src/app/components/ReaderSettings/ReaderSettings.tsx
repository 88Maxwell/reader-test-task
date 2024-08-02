import { Divider } from "@/lib/ui/Divider";
import { Switch } from "@/lib/ui/Switch";
import { Slider } from "@/lib/ui/Slider";
import { Toggle } from "@/lib/ui/Toggle";
import { SelectCarousel } from "@/lib/ui/SelectCarousel";
import {
  readerFontsSettingsOptions,
  readerModeOptionsMap,
  readerVisibilitySettingsOptions,
} from "@/domains/reader/readerConstants";
import { themeOptionsMap } from "@/domains/common/commonConstants";
import { useTheme } from "@/domains/common/hooks/useTheme";
import CommentsIcon from "./assets/icons/comments_icon.svg";
import FontsIcon from "./assets/icons/fonts-icon.svg";
import TextIcon from "./assets/icons/text-icon.svg";
import ThemeIcon from "./assets/icons/theme-icon.svg";
import WidthOfFieldsIcon from "./assets/icons/width-of-fields-icon.svg";
import { SettingRecordField } from "../SettingRecordField/SettingRecordField";
import type { ReaderSettingsProps } from "./ReaderSettingsTypes";

export function ReaderSettings({ className }: ReaderSettingsProps) {
  const { themeOption, onChangeTheme } = useTheme();

  return (
    <div className={className}>
      <div className="grid grid-cols-[88px_1fr] items-center justify-center gap-8">
        <SettingRecordField
          icon={<CommentsIcon />}
          title="Коментарі до абзаців"
        />
        <Toggle
          option1={readerVisibilitySettingsOptions[0]}
          option2={readerVisibilitySettingsOptions[1]}
          name="visibility"
        />
        <SettingRecordField icon={<FontsIcon />} title="Розмір тексту" />
        <Slider leftTitle="Менше" rightTitle="Більше" />
        <SettingRecordField
          className="hidden-mobile-flex"
          icon={<TextIcon />}
          title="Ширина полів"
        />
        <Slider
          className="hidden-mobile-flex"
          leftTitle="Менше"
          rightTitle="Більше"
        />
        <SettingRecordField icon={<ThemeIcon />} title="Колір теми" />
        <Toggle
          option1={themeOptionsMap.light}
          option2={themeOptionsMap.dark}
          value={themeOption}
          onChange={onChangeTheme}
          name="theme"
        />
        <SettingRecordField
          className="md:hidden"
          icon={<ThemeIcon />}
          title="Колір теми"
        />
        <Toggle
          className="md:hidden"
          option1={readerModeOptionsMap.topToBottom}
          option2={readerModeOptionsMap.leftToRight}
          name="theme"
        />
        <SettingRecordField icon={<WidthOfFieldsIcon />} title="Шрифт" />
        <SelectCarousel name="font" options={readerFontsSettingsOptions} />
      </div>
      <Divider className="mt-7.5 mb-4" />
      <div className="flex flex-row justify-between">
        <span>Перенос тексту</span>
        <Switch />
      </div>
      <Divider className="hidden-mobile-block my-4" />
      <div className="hidden-mobile-block flex flex-row justify-between">
        <span>Книжний режим прочитання</span>
        <Switch />
      </div>
    </div>
  );
}
