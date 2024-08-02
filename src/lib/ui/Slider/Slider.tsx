import clsx from "clsx";
import "./slider.scss";
import { SliderProps } from "./SliderTypes";

export const Slider = ({ className, leftTitle, rightTitle }: SliderProps) => (
  <div>
    <input className={className} type="range" />
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
