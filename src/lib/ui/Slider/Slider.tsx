import clsx from "clsx";
import "./slider.scss";
import type { SliderProps } from "./SliderTypes";

export const Slider = ({ className, leftTitle, rightTitle }: SliderProps) => (
  <div className={className}>
    <input type="range" />
    <div
      className={clsx(
        "flex flex-row justify-between text-[13px]/[17px] text-light-label-light-secondary-text",
        "dark:text-dark-label-secondary",
      )}
    >
      <span>{leftTitle}</span>
      <span>{rightTitle}</span>
    </div>
  </div>
);
