"use client";
import { MobileReaderBottomSwipeZone } from "@/domains/reader/components/MobileReaderBottomSwipeZone";
import { useToggle } from "@/lib/hooks/useToggle";
import { Avatar } from "@/lib/ui/Avatar";
import { IconButton } from "@/lib/ui/IconButton";
import { MobileBottomDrawer } from "@/lib/ui/MobileBottomDrawer";
import { OutlinedButton } from "@/lib/ui/OutlinedButton";
import clsx from "clsx";
import { useRef } from "react";
import { ReaderSettings } from "../ReaderSettings/ReaderSettings";
import { SettingPopover } from "../SettingPopover/SettingPopover";
import type { AppBarProps } from "./AppBarTypes";
import ArrowLeftIcon from "./assets/icons/arrow-left.svg";
import BookOpenIcon from "./assets/icons/book_open_icon.svg";
import BooksIcon from "./assets/icons/books_icon.svg";
import MoreHorizontalIcon from "./assets/icons/more_horizontal_icon.svg";
import NumberedListLeftIcon from "./assets/icons/numbered_list_left_icon.svg";
import SettingsIcon from "./assets/icons/settings_icon.svg";
import ShareIcon from "./assets/icons/share_icon.svg";

const fakeUser = {
  name: "Fake name",
  avatarUrl: "https://i.pravatar.cc/24?u=a042581f4e29026704d",
};

export function AppBar({ isOpen }: AppBarProps) {
  const settingsButtonRef = useRef<HTMLButtonElement>(null);
  const [isSettingsOpen, { on: onOpenSettings, off: onCloseSettings }] =
    useToggle();

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 right-0",
          "flex flex-row justify-between p-4 md:px-8 md:py-4.5 border-b",
          "border-light-stroke-divider-primary",
          "dark:bg-[#2C2D30] dark:border-none", // TODO: add color to design
          "transition-opacity duration-300",
          { "opacity-100": isOpen, "opacity-0": !isOpen },
        )}
      >
        <section className="flex flex-row gap-4">
          <IconButton>
            <ArrowLeftIcon />
          </IconButton>
          <h1 className="text-light-label-light-main-text dark:text-dark-label-sub-head mr-2 hidden-mobile-block">
            Назва книги
          </h1>
          <div className="flex-row items-center gap-2 hidden-mobile-flex">
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
            onClick={onOpenSettings}
            className="relative"
          >
            <SettingsIcon />
            <SettingPopover
              className="absolute top-9 -right-7.5"
              anchorRef={settingsButtonRef}
              isOpen={isSettingsOpen}
              onClose={onCloseSettings}
            />
          </IconButton>
          <IconButton>
            <MoreHorizontalIcon />
          </IconButton>
        </section>
      </nav>
      <MobileBottomDrawer isOpen={isSettingsOpen} onClose={onCloseSettings}>
        <ReaderSettings className="p-6" />
      </MobileBottomDrawer>
      <MobileReaderBottomSwipeZone onSwipedUp={onOpenSettings} />
    </>
  );
}
