interface SettingRecordProps {
  icon: React.ReactNode;
  title: React.ReactNode;
}
export function SettingRecordField({ icon, title }: SettingRecordProps) {
  return (
    <div className="flex flex-col items-center text-center justify-center max-w-[88px]">
      {icon}
      <p className="mt-1">{title}</p>
    </div>
  );
}
