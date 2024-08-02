"use client";

import clsx from "clsx";
import { BottomDrawer } from "@/lib/ui/MobileBottomDrawer/MobileBottomDrawer";
import { MobileReaderCenterTapZone } from "@/domains/reader/components/MobileReaderCenterTapZone/MobileReaderCenterTapZone";
import { useState } from "react";
import { useScrollBottom } from "@/lib/hooks/useScrollBottom";
import { TEXT } from "./stubData";
import { AppBar } from "./components/AppBar/AppBar";

export default function Home() {
  const [appBarShown, setAppBarShow] = useState(true);
  const handleTap = () => setAppBarShow((v) => !v);

  useScrollBottom(() => setAppBarShow(false));

  return (
    <>
      <AppBar isOpen={appBarShown} />
      <main
        className={clsx(
          "min-h-screen pb-8 pt-24 px-4 md:pb-14 md:pt-[120px] md:px-[270px]",
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
        <BottomDrawer />
      </main>
      <MobileReaderCenterTapZone onTap={handleTap} />
    </>
  );
}
