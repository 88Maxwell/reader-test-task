import clsx from "clsx";

export const Switch = () => (
  <label className="relative inline-flex cursor-pointer items-center">
    <input id="switch" type="checkbox" className="peer sr-only" />
    <label htmlFor="switch" className="hidden" />
    <div
      className={clsx(
        "peer peer-checked:bg-dark-brand-brand peer-checked:after:translate-x-full",
        "h-[25px] w-10 rounded-full bg-switch-base",
        "after:absolute after:left-[5px] after:top-[5px] after:h-[15px] after:w-[15px] after:rounded-full after:bg-white after:transition-all after:content-['']",
        "dark:bg-dark-background-tertiary",
      )}
    />
  </label>
);
