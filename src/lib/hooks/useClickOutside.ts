import { type RefObject, useEffect } from "react";

const checkIsOutside = <T extends HTMLElement>(
  target: Node,
  ref: RefObject<T>,
) => {
  const isRefArray = Array.isArray(ref);

  if (!isRefArray) return ref.current && !ref.current.contains(target);

  return ref
    .filter((r) => Boolean(r.current))
    .every((r) => r.current && !r.current.contains(target));
};

export function useClickOutside<T extends HTMLElement>(
  anchorRef: RefObject<T>,
  containerRef: RefObject<T>,
  cb: () => void,
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!target?.isConnected) return;
      const targetParent = target.parentNode;

      const isTargetAnchor = anchorRef.current === target;
      const isTargetAnchorParent = anchorRef.current === targetParent;
      const isContainerOutside = checkIsOutside(target, containerRef);
      const isTargetAnchorClick = isTargetAnchor || isTargetAnchorParent;

      if (!isTargetAnchorClick && isContainerOutside) cb();
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [anchorRef, containerRef, cb]);
}
