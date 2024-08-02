import clsx from "clsx";

interface SettingRecordProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  className?: string;
}

export function SettingRecordField({
  icon,
  title,
  className,
}: SettingRecordProps) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center text-center justify-center max-w-[88px]",
        className,
      )}
    >
      {icon}
      <p className="mt-1">{title}</p>
    </div>
  );
}
