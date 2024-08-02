"use client";

import { MobileReaderCenterTapZone } from "@/domains/reader/components/MobileReaderCenterTapZone/MobileReaderCenterTapZone";
import { useScrollBottom } from "@/lib/hooks/useScrollBottom";
import { useToggle } from "@/lib/hooks/useToggle";
import clsx from "clsx";
import { AppBar } from "./components/AppBar/AppBar";
import { TEXT } from "./stubData";

export default function Home() {
  const [appBarShown, { on: showAppBar, off: hideAppBar }] = useToggle(true);

  useScrollBottom(hideAppBar, showAppBar);

  return (
    <>
      <AppBar isOpen={appBarShown} />
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
      </main>
      <MobileReaderCenterTapZone onTap={showAppBar} />
    </>
  );
}
