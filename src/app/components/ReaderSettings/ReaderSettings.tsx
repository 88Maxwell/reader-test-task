import { Divider } from "@/lib/ui/Divider";
import { SettingRecord } from "../SettingRecord";
import CommentsIcon from "./assets/icons/comments_icon.svg";
import FontsIcon from "./assets/icons/fonts-icon.svg";
import TextIcon from "./assets/icons/text-icon.svg";
import ThemeIcon from "./assets/icons/theme-icon.svg";
import WidthOfFieldsIcon from "./assets/icons/width-of-fields-icon.svg";

export function ReaderSettings() {
  return (
    <div className="flex flex-col gap-8">
      <SettingRecord icon={<CommentsIcon />} title="Коментарі до абзаців">
        <div>switch</div>
      </SettingRecord>
      <SettingRecord icon={<FontsIcon />} title="Розмір тексту">
        <div>switch</div>
      </SettingRecord>
      <SettingRecord icon={<TextIcon />} title="Ширина полів">
        <div>switch</div>
      </SettingRecord>
      <SettingRecord icon={<ThemeIcon />} title="Колір теми">
        <div>switch</div>
      </SettingRecord>
      <SettingRecord icon={<WidthOfFieldsIcon />} title="Шрифт">
        <div>switch</div>
      </SettingRecord>
      <Divider />
      <div>
        <span>Перенос тексту</span>
        <div>switch</div>
      </div>
      <Divider />
      <div>
        <span>Книжний режим прочитання</span>
        <div>switch</div>
      </div>
    </div>
  );
}
