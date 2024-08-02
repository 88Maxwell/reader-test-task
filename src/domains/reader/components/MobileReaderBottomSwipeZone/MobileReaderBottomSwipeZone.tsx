import { useSwipeable } from "react-swipeable";

interface MobileReaderBottomSwipeZoneProps {
  onSwipedUp: () => void;
}
export const MobileReaderBottomSwipeZone = ({
  onSwipedUp,
}: MobileReaderBottomSwipeZoneProps) => {
  const handlers = useSwipeable({
    onSwipedUp,
    trackTouch: true,
    preventScrollOnSwipe: true,
  });

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 top-[90%] inset-0"
      {...handlers}
    />
  );
};
