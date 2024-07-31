import clsx from "clsx";
import { useState } from "react";
import { ToggleProps } from "./ToggleTypes";
import { Option } from "../types";

export const Toggle = ({
  className,
  option1,
  option2,
  value,
  name,
  onChange,
}: ToggleProps) => {
  const [opt, setOpt] = useState<Option>(value);
  const options = [option1, option2];

  const getChangeHandler = (o: Option) => () => {
    if (onChange) onChange(o);
    else setOpt(o);
  };

  const currentOption = onChange ? value : opt;

  return (
    <div className={clsx("", className)}>
      <select name={name} className="hidden">
        {options.map((o) => (
          <option value={o.value} key={`toggle-${o.value}-option`}>
            {option1.label}
          </option>
        ))}
      </select>
      {options.map((o, index) => (
        <button
          type="button"
          key={`toggle-${o.value}-option`}
          onClick={getChangeHandler(o)}
          className={clsx("p-3 w-1/2 text-xs dark:text-dark-label-primary", {
            "bg-dark-brand-brand": o.value === currentOption.value,
            "bg-dark-background-field-contrast":
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
