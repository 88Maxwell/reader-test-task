import { useSwipeable } from "react-swipeable";

export interface MobileReaderCenterTapZoneProps {
  onTap: () => void;
}
export const MobileReaderCenterTapZone = ({
  onTap,
}: MobileReaderCenterTapZoneProps) => {
  const handlers = useSwipeable({
    onTap,
    trackTouch: true,
  });

  return (
    <div
      className="md:hidden fixed bottom-0 left-1/4 right-1/4 top-0 inset-0"
      {...handlers}
    />
  );
};
