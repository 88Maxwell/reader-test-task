interface SettingRecordProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
}
export function SettingRecord({ icon, title, children }: SettingRecordProps) {
  return (
    <div className="flex flex-row justify-between text-light-gray-600 dark:text-white">
      <div className="flex flex-col items-center justify-center">
        {icon}
        <p>{title}</p>
      </div>
      <div>{children}</div>
    </div>
  );
}
