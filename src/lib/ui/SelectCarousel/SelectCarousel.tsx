import clsx from "clsx";
import { useState } from "react";
import { IconButton } from "../IconButton";
import type { Option } from "../types";
import type { SelectCarouselProps } from "./SelectCarouselTypes";
import ArrowRightIcon from "./arrow-right.svg";

export const SelectCarousel = ({
  className,
  options,
  value,
  name,
  onChange,
}: SelectCarouselProps) => {
  const [opt, setOpt] = useState<Option>(value || options[0]);
  const currentOption = onChange ? (value as Option) : opt;

  const getCurrentOptionIndex = () => {
    const currentOptionIndex = options.findIndex(
      (o) => o.value === currentOption.value,
    );
    return currentOptionIndex;
  };
  const currentChangeHandler = onChange || setOpt;

  const currentOptionIndex = getCurrentOptionIndex();
  const isCurrentOptionFirst = currentOptionIndex === 0;
  const isCurrentOptionLast = currentOptionIndex === options.length - 1;

  const handlePrev = () => {
    if (isCurrentOptionFirst) return;
    const nextOptionIndex = currentOptionIndex - 1;

    const nextOption = options[nextOptionIndex];
    currentChangeHandler(nextOption);
  };

  const handleNext = () => {
    if (isCurrentOptionLast) return;
    const nextOptionIndex = currentOptionIndex + 1;

    const nextOption = options[nextOptionIndex];
    currentChangeHandler(nextOption);
  };

  return (
    <div
      className={clsx(
        "flex flex-row w-full justify-between items-center border border-solid py-2 px-4 rounded-2.5xl",
        "bg-light-gray-500 text-light-label-light-main-text",
        "dark:bg-dark-background-field-contrast dark:border-dark-stroke-divider-primary",
        className,
      )}
    >
      <select name={name} className="hidden">
        {options.map((o) => (
          <option value={o.value} key={`toggle-${o.value}-option`}>
            {o.label}
          </option>
        ))}
      </select>
      <IconButton
        disabled={isCurrentOptionFirst}
        onClick={handlePrev}
        className="rotate-180"
      >
        <ArrowRightIcon className="text-dark-brand-brand dark:text-dark-label-primary" />
      </IconButton>
      <span className="text-sm dark:text-dark-label-primary">
        {currentOption.label}
      </span>
      <IconButton disabled={isCurrentOptionLast} onClick={handleNext}>
        <ArrowRightIcon className="text-dark-brand-brand dark:text-dark-label-primary" />
      </IconButton>
    </div>
  );
};
