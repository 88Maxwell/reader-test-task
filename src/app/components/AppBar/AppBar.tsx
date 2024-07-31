import { Button } from "@/lib/ui/Button";
import { IconButton } from "@/lib/ui/IconButton";
import clsx from "clsx";
import { Avatar } from "@/lib/ui/Avatar";
import BookOpenIcon from "./assets/icons/book_open_icon.svg";
import BooksIcon from "./assets/icons/books_icon.svg";
import MoreHorizontalIcon from "./assets/icons/more_horizontal_icon.svg";
import NumberedListLeftIcon from "./assets/icons/numbered_list_left_icon.svg";
import SettingsIcon from "./assets/icons/settings_icon.svg";
import ArrowLeftIcon from "./assets/icons/arrow-left.svg";
import ShareIcon from "./assets/icons/share_icon.svg";
import { ReaderSettings } from "../ReaderSettings/ReaderSettings";

export function AppBar() {
  const fakeUser = {
    name: "Fake name",
    avatarUrl: "https://i.pravatar.cc/24?u=a042581f4e29026704d",
  };

  return (
    <nav
      className={clsx(
        "flex flex-row justify-between px-8 py-4.5",
        "dark:bg-dark-background-header-bg",
      )}
    >
      <section className="flex flex-row gap-4">
        <IconButton>
          <ArrowLeftIcon />
        </IconButton>
        <h1 className="text-light-label-light-main-text dark:text-dark-label-sub-head mr-2">
          Назва книги
        </h1>
        <div className="flex flex-row items-center gap-2">
          <Avatar
            width={24}
            height={24}
            src={fakeUser.avatarUrl}
            alt={fakeUser.name}
          />
          <span className="text-light-label-light-main-text dark:text-dark-label-sub-head">
            {fakeUser.name}
          </span>
        </div>
        <Button>subscribe</Button>
      </section>
      <section className="flex flex-row gap-6 text-light-gray-600 dark:text-white">
        <IconButton>
          <NumberedListLeftIcon />
        </IconButton>
        <IconButton>
          <BooksIcon />
        </IconButton>
        <IconButton>
          <BookOpenIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <MoreHorizontalIcon />
        </IconButton>

        <div className="min-w-96 absolute top-0 right-0 shadow-gray-800 rounded-1.5xl dark:bg-dark-background-field-contrast px-6 py-8">
          <ReaderSettings />
        </div>
      </section>
    </nav>
  );
}
