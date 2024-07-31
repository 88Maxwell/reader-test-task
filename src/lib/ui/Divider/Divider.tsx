import clsx from "clsx";

interface DividerProps {
  className?: string;
}

export function Divider({ className = "" }: DividerProps) {
  return (
    <hr
      className={clsx(
        "w-full h-1",
        "border-none bg-light-stroke-divider-primary dark:bg-dark-stroke-divider-primary",
        className,
      )}
    />
  );
}
