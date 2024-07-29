import CommentsIcon from "./assets/icons/comments_icon.svg";
import FontsIcon from "./assets/icons/fonts-icon.svg";
import TextIcon from "./assets/icons/text-icon.svg";
import ThemeIcon from "./assets/icons/theme-icon.svg";
import WidthOfFieldsIcon from "./assets/icons/width-of-fields-icon.svg";

export const ReaderSettings = () => {
  return (
    <>
      <div className="text-light-gray-600 dark:text-white">
        <div className="flex justify-center">
          <CommentsIcon />
          <p>Коментарі доабзаців</p>
        </div>
      </div>
    </>
  );
};
