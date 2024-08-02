import clsx from "clsx";
import { useState } from "react";
import type { ToggleProps } from "./ToggleTypes";
import type { Option } from "../types";

export const SelectCarousel = <L extends React.ReactNode, V extends string>({
  className,
  option1,
  option2,
  value,
  name,
  onChange,
}: ToggleProps<L, V>) => {
  const [opt, setOpt] = useState<Option<L, V>>(value || option1);
  const options = [option1, option2];

  const getChangeHandler = (o: Option<L, V>) => () => {
    if (onChange) onChange(o);
    else setOpt(o);
  };

  const currentOption = onChange ? (value as Option<L, V>) : opt;

  return (
    <div className={clsx("", className)}>
      <select name={name} className="hidden">
        {options.map((o) => (
          <option value={o.value} key={`toggle-${o.value}-option`}>
            {o.label}
          </option>
        ))}
      </select>
      {options.map((o, index) => (
        <button
          type="button"
          key={`toggle-${o.value}-option`}
          onClick={getChangeHandler(o)}
          className={clsx("p-3 w-1/2 text-xs dark:text-dark-label-primary", {
            "bg-dark-brand-brand text-white": o.value === currentOption.value,
            "border bg-light-gray-500 border-black/10 dark:border-none dark:bg-dark-background-field-contrast":
              o.value !== currentOption.value,
            "rounded-s-2.5xl": index === 0,
            "rounded-e-2.5xl": index === 1,
          })}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
};
