"use client";

import clsx from "clsx";
import { MobileReaderCenterTapZone } from "@/domains/reader/components/MobileReaderCenterTapZone/MobileReaderCenterTapZone";
import { useState } from "react";
import { useScrollBottom } from "@/lib/hooks/useScrollBottom";
import { MobileReaderBottomSwipeZone } from "@/domains/reader/components/MobileReaderBottomSwipeZone";
import { MobileBottomDrawer } from "@/lib/ui/MobileBottomDrawer";
import { TEXT } from "./stubData";
import { AppBar } from "./components/AppBar/AppBar";
import { ReaderSettings } from "./components/ReaderSettings/ReaderSettings";

export default function Home() {
  const [appBarShown, setAppBarShow] = useState(true);
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const handleOpenSetting = () => setIsSettingOpen(true);
  const handleCloseSetting = () => setIsSettingOpen(false);

  const showAppBar = () => setAppBarShow(true);
  const hideAppBar = () => setAppBarShow(false);

  useScrollBottom(hideAppBar, showAppBar);

  return (
    <>
      <AppBar
        isSettingsOpen={isSettingOpen}
        onCloseSettings={handleCloseSetting}
        onOpenSettings={handleOpenSetting}
        isOpen={appBarShown}
      />
      <main
        className={clsx(
          "min-h-screen pb-8 pt-[88px] px-4 md:pb-14 md:pt-[120px] md:px-[270px]",
          "bg-white text-light-label-light-main-text",
          "dark:bg-black dark:text-dark-label-primary",
        )}
      >
        <h1 className="text-3.5xl mb-3">{TEXT.header}</h1>
        <div>
          {TEXT.texts.map((v) => (
            <p key={v}>{v}</p>
          ))}
        </div>
        <MobileBottomDrawer isOpen={isSettingOpen} onClose={handleCloseSetting}>
          <ReaderSettings className="p-6" />
        </MobileBottomDrawer>
      </main>
      <MobileReaderBottomSwipeZone onSwipedUp={handleOpenSetting} />
      <MobileReaderCenterTapZone onTap={showAppBar} />
    </>
  );
}
