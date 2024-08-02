import { useEffect, useRef } from "react";

type UseScrollBottomCb = () => void;

export const useScrollBottom = (cb: UseScrollBottomCb) => {
  const lastScrollPositionRef = useRef(0);

  useEffect(() => {
    if (!window) return () => null;

    const handleScroll = () => {
      const scrollPositionDiff = window.scrollY - lastScrollPositionRef.current;
      const isScrollToBottom = scrollPositionDiff > 0;
      if (isScrollToBottom) cb();
      lastScrollPositionRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};
