import { useEffect, useRef } from "react";

type Cb = () => void;

export const useScrollBottom = (cb: Cb, initiate?: Cb) => {
  const lastScrollPositionRef = useRef(0);

  useEffect(() => {
    if (!window) return () => null;

    const handleScroll = () => {
      const scrollPositionDiff = window.scrollY - lastScrollPositionRef.current;
      const isScrollToBottom = scrollPositionDiff > 0;
      const isOnTop = window.scrollY === 0;

      if (isOnTop) initiate?.();
      else if (isScrollToBottom) cb();

      lastScrollPositionRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};
