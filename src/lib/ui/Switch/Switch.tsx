import clsx from "clsx";

export const Switch = () => (
  <label className="relative inline-flex cursor-pointer items-center">
    <input id="switch" type="checkbox" className="peer sr-only" />
    <label htmlFor="switch" className="hidden" />
    <div
      className={clsx(
        "peer peer-checked:bg-dark-brand-brand peer-checked:after:translate-x-full",
        "h-[25px] w-12 rounded-full bg-switch-base dark:bg-dark-background-tertiary",
        "after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-['']",
      )}
    />
  </label>
);
