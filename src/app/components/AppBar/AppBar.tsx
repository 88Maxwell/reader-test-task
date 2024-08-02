"use client";

import { OutlinedButton } from "@/lib/ui/OutlinedButton";
import { IconButton } from "@/lib/ui/IconButton";
import clsx from "clsx";
import { Avatar } from "@/lib/ui/Avatar";
import { useRef, useState } from "react";
import BookOpenIcon from "./assets/icons/book_open_icon.svg";
import BooksIcon from "./assets/icons/books_icon.svg";
import MoreHorizontalIcon from "./assets/icons/more_horizontal_icon.svg";
import NumberedListLeftIcon from "./assets/icons/numbered_list_left_icon.svg";
import SettingsIcon from "./assets/icons/settings_icon.svg";
import ArrowLeftIcon from "./assets/icons/arrow-left.svg";
import ShareIcon from "./assets/icons/share_icon.svg";
import { SettingPopover } from "../SettingPopover/SettingPopover";

const fakeUser = {
  name: "Fake name",
  avatarUrl: "https://i.pravatar.cc/24?u=a042581f4e29026704d",
};

export function AppBar() {
  const settingsButtonRef = useRef<HTMLButtonElement>(null);
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const handleOpenSetting = () => setIsSettingOpen(true);
  const handleCloseSetting = () => setIsSettingOpen(false);

  return (
    <nav
      className={clsx(
        "flex flex-row justify-between px-8 py-4.5 border-b border-light-stroke-divider-primary",
        "dark:bg-[#2C2D30] dark:border-none", // TODO: add color to design
      )}
    >
      <section className="flex flex-row gap-4">
        <IconButton>
          <ArrowLeftIcon />
        </IconButton>
        <h1 className="text-light-label-light-main-text dark:text-dark-label-sub-head mr-2 hidden-mobile-block">
          Назва книги
        </h1>
        <div className="flex flex-row items-center gap-2 hidden-mobile-block">
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
        <OutlinedButton className="hidden-mobile-button">
          Підписатись
        </OutlinedButton>
      </section>
      <section className="flex flex-row gap-6 text-light-gray-600 dark:text-white">
        <IconButton>
          <NumberedListLeftIcon />
        </IconButton>
        <IconButton>
          <BooksIcon />
        </IconButton>
        <IconButton className="hidden-mobile-button">
          <BookOpenIcon />
        </IconButton>
        <IconButton className="hidden-mobile-button">
          <ShareIcon />
        </IconButton>
        <IconButton
          ref={settingsButtonRef}
          onClick={handleOpenSetting}
          className="relative"
        >
          <SettingsIcon />
          <SettingPopover
            anchorRef={settingsButtonRef}
            isOpen={isSettingOpen}
            onClose={handleCloseSetting}
          />
        </IconButton>
        <IconButton>
          <MoreHorizontalIcon />
        </IconButton>
      </section>
    </nav>
  );
}
