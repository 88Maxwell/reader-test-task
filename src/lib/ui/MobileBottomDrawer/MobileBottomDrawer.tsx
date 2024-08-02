"use client";

import { useState } from "react";
import { useSwipeable } from "react-swipeable";

import "./BottomDrawer.css";

export const BottomDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);
  console.log({ isOpen });
  const handlers = useSwipeable({
    onSwipedUp: () => openDrawer(),
    onSwipedDown: () => closeDrawer(),
    // preventDefaultTouchmoveEvent: true,
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: true,
  });

  return (
    <div
      className="fixed bottom-0 left-0 right-0 top-[90%] inset-0 flex justify-center items-end"
      {...handlers}
    >
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 pointer-events-auto z-10"
          onClick={closeDrawer}
        />
      )}
      <div
        className={`fixed bottom-0 left-0 w-full max-w-md h-72 bg-white shadow-md rounded-t-lg transform transition-transform duration-300 ease-out pointer-events-auto z-20 ${isOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="h-10 flex justify-center items-center">
          <div className="w-10 h-1 bg-gray-400 rounded-full" />
        </div>
        <div className="px-4 py-2 text-center">
          <h2 className="text-lg font-semibold">Bottom Drawer</h2>
          <p className="mt-2 text-gray-600">
            Це приклад компонента Bottom Drawer, який реагує на свайпи. Ви
            можете використовувати його для навігації або відображення
            додаткової інформації.
          </p>
        </div>
      </div>
    </div>
  );
};
