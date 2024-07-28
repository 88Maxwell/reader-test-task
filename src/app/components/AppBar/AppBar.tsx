import { Button } from "@/lib/ui/Button";
import { IconButton } from "@/lib/ui/IconButton";
import BookOpenIcon from "./assets/icons/book_open_icon.svg";
import BooksIcon from "./assets/icons/books_icon.svg";
import MoreHorizontalIcon from "./assets/icons/more_horizontal_icon.svg";
import NumberedListLeftIcon from "./assets/icons/numbered_list_left_icon.svg";
import SettingsIcon from "./assets/icons/settings_icon.svg";
import ShareIcon from "./assets/icons/share_icon.svg";
import clsx from "clsx";

export const AppBar = () => {
  return (
    <nav
      className={clsx(
        "flex flex-row justify-between px-8 py-4.5",
        "dark:bg-dark-background-header-bg"
      )}
    >
      <section>
        <h1></h1>
        <IconButton></IconButton>
        <Button>subscribe</Button>
      </section>
      <section className="flex flex-row gap-6 text-light-gray-600 dark:text-white">
        <IconButton>
          <BookOpenIcon />
        </IconButton>
        <IconButton>
          <BooksIcon />
        </IconButton>
        <IconButton>
          <MoreHorizontalIcon />
        </IconButton>
        <IconButton>
          <NumberedListLeftIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </section>
    </nav>
  );
};
