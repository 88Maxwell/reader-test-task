import "./slider.scss";
import { SliderProps } from "./SliderTypes";

export const Slider = ({ className }: SliderProps) => (
  <input className={className} id="default-range" type="range" />
);
